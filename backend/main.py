# main.py
import os
import qrcode
import requests
import io
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List
from supabase_client import supabase
from PIL import Image
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# --- CORS Middleware Configuration ---
origins = [
    "http://localhost:5173",
    "https://sgsits-techfest-2025.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models ---
class UserRegistration(BaseModel):
    name: str
    phone: str
    email: EmailStr
    event_ids: List[int]

# --- Helper Functions ---
def generate_and_upload_qr(registration_id: int):
    # This function remains the same
    qr_data = f"AAROHAN2025-REG-{registration_id}"
    qr = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=10, border=4)
    qr.add_data(qr_data)
    qr.make(fit=True)
    qr_img = qr.make_image(fill_color="black", back_color="white").convert('RGB')
    
    try:
        logo = Image.open("aarohan_logo.png")
        logo_size = 60
        logo = logo.resize((logo_size, logo_size))
        pos = ((qr_img.size[0] - logo_size) // 2, (qr_img.size[1] - logo_size) // 2)
        qr_img.paste(logo, pos)
    except FileNotFoundError:
        print("Warning: aarohan_logo.png not found. Creating QR without logo.")

    img_byte_arr = io.BytesIO()
    qr_img.save(img_byte_arr, format='PNG')
    img_byte_arr = img_byte_arr.getvalue()

    file_path = f"ticket_{registration_id}.png"
    try:
        supabase.storage.from_("qr_codes").upload(file_path, img_byte_arr, {"content-type": "image/png"})
        return supabase.storage.from_("qr_codes").get_public_url(file_path)
    except Exception as e:
        if "Duplicate" in str(e):
             return supabase.storage.from_("qr_codes").get_public_url(file_path)
        else:
            raise e

def send_confirmation_email(user_email: str, user_name: str, event_names: List[str], qr_url: str):
    url = "https://api.brevo.com/v3/smtp/email"
    
    html_content = f"""
    <h3>Hello {user_name},</h3>
    <p>Thank you for registering for AAROHAN 2025! This QR code is your unique ticket for the following event(s):</p>
    <ul>{''.join([f'<li><strong>{name}</strong></li>' for name in event_names])}</ul>
    <p>Please show this at the registration desk to mark your attendance.</p>
    <img src="{qr_url}" alt="Your QR Code Ticket">
    <p>We look forward to seeing you there!</p>
    <p>Best Regards,<br>Team Aarohan</p>
    """

    payload = {
        # FIX: Use your verified sender email from the screenshot
        "sender": {"name": "Team Aarohan", "email": "sethatishayjain@gmail.com"},
        "to": [{"email": user_email, "name": user_name}],
        "subject": "Your Ticket for AAROHAN 2025!",
        "htmlContent": html_content
    }
    headers = {
        "accept": "application/json",
        "api-key": os.environ.get("BREVO_API_KEY"),
        "content-type": "application/json"
    }
    response = requests.post(url, json=payload, headers=headers)
    
    print("Brevo API Response Status Code:", response.status_code)
    print("Brevo API Response Body:", response.text)
    
    response.raise_for_status()

# --- API Endpoints ---
@app.get("/")
def read_root():
    return {"message": "Aarohan TechFest API is running!"}

@app.post("/register_user")
def register_user(registration: UserRegistration):
    try:
        user_response = supabase.table('users').upsert({
            'name': registration.name,
            'email': registration.email,
            'phone': registration.phone
        }, on_conflict='email').execute()
        user = user_response.data[0]
        user_id = user['id']

        event_response = supabase.table('events').select('id, name').in_('id', registration.event_ids).execute()
        events = event_response.data
        if len(events) != len(registration.event_ids):
            raise HTTPException(status_code=404, detail="One or more event IDs are invalid.")
        
        event_names = [event['name'] for event in events]

        reg_response = supabase.table('registrations').insert({
            'user_id': user_id,
            'event_id': events[0]['id']
        }).execute()
        registration_id = reg_response.data[0]['id']

        qr_url = generate_and_upload_qr(registration_id)
        
        supabase.table('registrations').update({'qr_code_path': qr_url}).eq('id', registration_id).execute()
        
        send_confirmation_email(registration.email, registration.name, event_names, qr_url)
        
        return {"status": "success", "message": "Registration successful! Confirmation email sent.", "qr_url": qr_url}

    except Exception as e:
        print(f"An error occurred: {e}")
        raise HTTPException(status_code=500, detail=str(e))