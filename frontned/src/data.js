export const generalRegistrationLink = "http://googleusercontent.com/forms.google.com/13"; // You will replace this with your GForm link

export const organizers = [
  { name: "SGSITS Logo 1", logo: "/logos/image1.png" },
  { name: "SGSITS Logo 2", logo: "/logos/image2.png" },
  { name: "SGSITS Logo 3", logo: "/logos/image3.png" },
  { name: "SGSITS Logo 4", logo: "/logos/image4.png" },
  { name: "SGSITS Logo 5", logo: "/logos/image5.png" },
  { name: "SGSITS Logo 6", logo: "/logos/image6.png" },
  // { name: "SGSITS Logo 7", logo: "/logos/image7.png" },
];

export const translations = {
  en: {
    title: "AAROHAN 2025",
    theme: "Ignite, Inspire, and Impact",
    subtitle: "SGSITS's Inaugural TechFest",
    heroDesc: "The ultimate convergence of technology, innovation, and talent at SGSITS, Indore.",
    home: "Home",
    Prarupam: "Prarupam",
    events: "Events",
    expo: "Expo",
    gallery: "Gallery",
    team: "Team",
    register: "Register Now",
    flagship_title: "Flagship Events",
    aarohan_title: "Aarohan",
    aarohan_desc: "The heart of TechFest, featuring a diverse range of technical and cultural events.",
    award_title: "Gyan Innovation Award",
    award_desc: "Showcase your groundbreaking projects and compete for the most prestigious award of the fest.",
  },
  // FIX: Added the complete Hindi translation object
  hi: {
    title: "आरोहण 2025",
    theme: "प्रेरणा, प्रज्वलन, परिवर्तन",
    subtitle: "SGSITS का पहला टेकफेस्ट",
    heroDesc: "SGSITS, इंदौर में प्रौद्योगिकी, नवाचार और प्रतिभा का संगम।",
    home: "होम",
    Prarupam: "प्रारूपम",
    events: "इवेंट्स",
    expo: "एक्सपो",
    gallery: "गैलरी",
    team: "टीम",
    register: "अभी रजिस्टर करें",
    flagship_title: "प्रमुख इवेंट्स",
    aarohan_title: "आरोहण",
    aarohan_desc: "टेकफेस्ट का केंद्र, जिसमें विभिन्न तकनीकी और सांस्कृतिक कार्यक्रम शामिल हैं।",
    award_title: "ज्ञान इनोवेशन अवार्ड",
    award_desc: "अपनी अभूतपूर्व परियोजनाओं का प्रदर्शन करें और फेस्ट के सबसे प्रतिष्ठित पुरस्कार के लिए प्रतिस्पर्धा करें।",
  },
};

export const prarupamData = {
  title: "PRARUPAM: A Confluence of Innovators",
  tagline: "Prototype competition of AAROHAN 2025 organized by SGSITS Incubation Forum",
  description: "A stage to showcase innovations, validate ideas, learn from experts & pitch to investors!",
  proposalDeadline: "25th September 2025",
  participationFee: "₹200",
  whoCanParticipate: "Open for Students, Innovators & Startups!",
  themes: [
    "SMART EDUCATION / VILLAGES / CITIES",
    "CLEAN AND GREEN ENERGY",
    "INDUSTRY 4.0 AND 5.0",
    "FINTECH",
    "HEALTH SCIENCE / LIFE SCIENCE/ BIOTECH / FOODTECH/ VETERINARYTECH/AGRITECH",
    "WASTE MANAGEMENT / BEST OUT OF WASTE",
    "EQUIPMENT / SOFTWARE FOR DEFENCE FORCES"
  ],
  prizes: {
    "TRL 1-3 (Research Phase)": [
      { rank: "1st Prize", amount: "₹3000" }, { rank: "2nd Prize", amount: "₹2000" }, { rank: "3rd Prize", amount: "₹1000" }
    ],
    "TRL 4-6 (Development Phase)": [
      { rank: "1st Prize", amount: "₹7000" }, { rank: "2nd Prize", amount: "₹5000" }, { rank: "3rd Prize", amount: "₹3000" }
    ],
    "TRL 7-9 (Implementation Phase)": [
      { rank: "1st Prize", amount: "₹12000" }, { rank: "2nd Prize", amount: "₹9000" }, { rank: "3rd Prize", amount: "₹6000" }
    ],
  },
  winnerBenefits: [
    "Pre-Incubation at SIF with Expert mentorship",
    "Prototype validation",
    "Business model support",
    "Exposure to funding opportunities",
    "Certificates of achievement",
    "Award for 3 Best Entries"
  ]
};

// NEW list of departmental events
export const departmentalEvents = [
  {
    name: "Hackathon by #include",
    department: "Information Technology",
    description: "A thrilling coding marathon to build innovative software solutions.",
    image: "http://googleusercontent.com/images.google.com/42",
    date: "13th October",
    registrationLink: "YOUR_HACKATHON_FORM_LINK_HERE"
  },
  {
    name: "House Modeling Competition",
    department: "Mechanical Engineering",
    description: "Design and build intricate models showcasing architectural and engineering prowess.",
    image: "http://googleusercontent.com/images.google.com/43",
    date: "13th October",
    registrationLink: "YOUR_HOUSE_MODELING_FORM_LINK_HERE"
  },
  {
    name: "CS Department Workshop",
    department: "Computer Engineering",
    description: "An in-depth workshop on cutting-edge technologies by industry experts.",
    image: "http://googleusercontent.com/images.google.com/44",
    date: "28th August",
    registrationLink: "YOUR_CS_WORKSHOP_FORM_LINK_HERE"
  }
];

export const eventTracks = [
  { 
    id: 1, 
    name: "Prototype Competition", 
    image: "/assets/track1.png", 
    link: "/prarupam" 
  },
  { 
    id: 2, 
    name: "Industry Expo", 
    image: "/assets/track2.png", 
    link: "/expo" 
  },
  { 
    id: 3, 
    name: "Invited Talks", 
    image: "/assets/track3.png", 
    link: "/events" 
  },
  { 
    id: 4, 
    name: "Student Conference", 
    image: "/assets/track4.png", 
    link: "/events" 
  },
  { 
    id: 5, 
    name: "Roborace & Exciting Games", 
    image: "/assets/track5.png", 
    link: "/events" 
  },
  { 
    id: 6, 
    name: "Cultural Events", 
    image: "/assets/track6.png", 
    link: "/events" 
  },
];
// NEW: A dedicated array for the gallery page with real images
export const galleryImages = [
  "https://res.cloudinary.com/df4fnnohe/image/upload/v1757742983/WhatsApp_Image_2025-09-08_at_18.38.04_18f9642e_qidgyv.jpg",
  "https://res.cloudinary.com/df4fnnohe/image/upload/v1757742976/WhatsApp_Image_2025-09-08_at_18.38.03_e5284848_nklmzf.jpg",
  // "http://googleusercontent.com/images.google.com/36",
];

export const teamData = {
  "Organizing Committee": [
    { name: "Prof. Neetesh Purohit", role: "Patron, Director", avatar: "https://fcsl.iiita.ac.in/neetesh.jpg" },
    { name: "Prof. Milind D. Dandekar", role: "Convener, Dean (IPFA)", avatar: "https://i1.rgstatic.net/ii/profile.image/697452025892865-1543296929522_Q512/Milind-Dandekar.jpg" },
    { name: "Prof. Lalit Purohit", role: "Convener, Dean (ARSD)", avatar: "https://thfvnext.bing.com/th/id/OIP._8RwNv3LdjP9KwTxamh41wAAAA?r=0&o=7&cb=thfvnextrm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Prof. Shailendra Sharma", role: "Event Coordinator", avatar: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=YEa1-dUAAAAJ&citpid=2" },
    { name: "Prof. Krishnakant Dhakar", role: "Co-Coordinator", avatar: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=hR9a3mEAAAAJ&citpid=2" },
    { name: "Prof. Omprakash Tanwar", role: "Co-Coordinator", avatar: "https://tse1.mm.bing.net/th/id/OIP.JCRuziVH-sF5jeHQd9z1GQHaJS?r=0&cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Prof. Neetesh Purohit", role: "Patron, Director", avatar: "https://fcsl.iiita.ac.in/neetesh.jpg" },
    { name: "Prof. Milind D. Dandekar", role: "Convener, Dean (IPFA)", avatar: "https://i1.rgstatic.net/ii/profile.image/697452025892865-1543296929522_Q512/Milind-Dandekar.jpg" },
    { name: "Prof. Lalit Purohit", role: "Convener, Dean (ARSD)", avatar: "https://thfvnext.bing.com/th/id/OIP._8RwNv3LdjP9KwTxamh41wAAAA?r=0&o=7&cb=thfvnextrm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Prof. Shailendra Sharma", role: "Event Coordinator", avatar: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=YEa1-dUAAAAJ&citpid=2" },
    { name: "Prof. Krishnakant Dhakar", role: "Co-Coordinator", avatar: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=hR9a3mEAAAAJ&citpid=2" },
    { name: "Prof. Omprakash Tanwar", role: "Co-Coordinator", avatar: "https://tse1.mm.bing.net/th/id/OIP.JCRuziVH-sF5jeHQd9z1GQHaJS?r=0&cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" },
  ],
  "Prarupam Team": [
    { name: "Prof. Vinod Pare", role: "Team Lead", avatar: "https://drive.google.com/file/d/15bh946SSDaDt1d6XkbZZsvd-gLPztQpS/view?usp=sharing" },
    { name: "Prof. Vineet Singh", role: "Co-Team Lead", avatar: "https://media.licdn.com/dms/image/v2/D4D03AQE9bUpCzGYY4A/profile-displayphoto-shrink_800_800/B4DZSuA9fXHYAc-/0/1738086276222?e=1760572800&v=beta&t=o3LObXBQHpe47rz2Nkl0gEnmxKZDcG727_Gx2pbaLK8" },
    { name: "Prof. R.C. Gurjar", role: "Co-Team Lead", avatar: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=DSL2-UcAAAAJ&citpid=2" },
    { name: "Prof. Manjeet Soni", role: "Member", avatar: "https://www.sgsits.ac.in/images/Departments/it/manjeet_ksoni-resize.webp" },
    { name: "Prof. Urmila Raghuvanshi", role: "Member", avatar: "https://media.licdn.com/dms/image/v2/C5603AQGtV_a58I16HA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517366793210?e=1760572800&v=beta&t=tA9Xe2bueqf1ix4TZ-WcWlVdIF0iaSEyGpGTUYd6nYE" },
    { name: "Prof. Ashwin Srivastava", role: "Member", avatar: "https://media.licdn.com/dms/image/v2/C4E03AQFrGCvss213-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516774077421?e=1760572800&v=beta&t=FNDZX_tnZIiTSWWGG2s3c8NNYp6gpZvKm5hcwlcC7Sg" },
    { name: "Prof. Puneet K. Samaiya", role: "Member", avatar: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=N_pPcj8AAAAJ&citpid=2" },
    { name: "Prof. Avani Jain", role: "Member", avatar: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=s28-sQwAAAAJ&citpid=1" },
    { name: "Prof. Tarun Kumar Narnaure", role: "Member", avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFtaazmNhHcNg/profile-displayphoto-shrink_800_800/B4DZN3vfFJG0Ac-/0/1732880765338?e=1760572800&v=beta&t=gDIkszRCahmp7a5JEL5pV-9ezEMcDnXTPR0lmMq5aAE" },
    { name: "Prof. Gangaram Mourya", role: "Member", avatar: "" },
    { name: "Prof. Kumar Rohit", role: "Member", avatar: "https://media.licdn.com/dms/image/v2/D5603AQFFI1G7KYuYIg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720508849059?e=1760572800&v=beta&t=v89iwSeWihKVqe69SAntChUvSXlLl48H94YlcJF88UE" },
    { name: "Prof. Adarsh Jaiswal", role: "Member", avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEqAobwLkXlqg/profile-displayphoto-shrink_200_200/B4DZSsNrcSHIAY-/0/1738056056186?e=1760572800&v=beta&t=Ar25dXYL-Q71Q-zOGre3kUeX2mziwNxDLqlxi3r8LQE" },
  ],
  "Expo Team": [
    { name: "Prof. Shekhar Sharma", role: "Team Lead", avatar: "https://media.licdn.com/dms/image/v2/C5603AQHatfUZjusEEQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1587834446222?e=1760572800&v=beta&t=_1QUsNZv8R9CG1OR6vhvZLbwrZTrWtKqkBCg0Sed5Bo" },
    { name: "Prof. Gireesh Gaurav Soni", role: "Co-Team Lead", avatar: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=EK4V89kAAAAJ&citpid=1" },
    { name: "Prof. Swati Chougaonkar", role: "Co-Team Lead", avatar: "https://www.sgsits.ac.in/images/Departments/me/swati_chaugaonakar-resize.webp" },
    { name: "Prof. Vivek Tiwari", role: "Member", avatar: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=phiYfnUAAAAJ&citpid=1" },
    { name: "Prof. Anujulata Yadav", role: "Member", avatar: "https: //scholar.googleusercontent.com/citations?view_op=view_photo&user=phiYfnUAAAAJ&citpid=1" },
    { name: "Prof. Anil Mulewa", role: "Member", avatar: "" },
    { name: "Prof. Gourav Jain", role: "Member", avatar: "https://media.licdn.com/dms/image/v2/C4D03AQHf9FS6Xo6PKA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517459067495?e=1760572800&v=beta&t=NIpfbR2bcLeGY2QPr22sS95msDrSLZODwwoDt4SfeQk" },
    { name: "Prof. Mukesh Sakale", role: "Member", avatar: "https://media.licdn.com/dms/image/v2/D4D03AQH9V_D69cPfSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705783796407?e=1760572800&v=beta&t=IhiuNC4WcPRFSBkt4v7AakoFNNTP00ZcynZeBMgEb6Q" },
    { name: "Prof. Puja Gupta", role: "Member", avatar: "https://media.licdn.com/dms/image/v2/C4E03AQHfolmxNJxJCw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1598372374823?e=1760572800&v=beta&t=bJnAaCT57m16VCAqzaIYC42VMEqk8kuJ2EqwwypaAGQ" },
  ]
};

export const expoData = {
  about: "As part of AAROHAN - The Annual TechFest of SGSITS, Indore, we are delighted to host the Industry Expo 2025, a premier exhibition where leading industries, enterprises, and innovators can present their cutting-edge products, solutions, and technologies.",
  whyExhibit: [
    "Showcase your products, services, and solutions to thousands of visitors.",
    "Network with industry leaders, academicians, researchers, and students.",
    "Gain brand visibility in central India's leading engineering institute - SGSITS.",
    "Access to a talented pool of students for internships and recruitment.",
    "Explore collaborative research and consultancy opportunities."
  ],
  stallPackages: [
    { size: "15 feet x 15 feet", price: "₹12,000" },
    { size: "10 feet x 15 feet", price: "₹8,000" },
    { size: "10 feet x 10 feet", price: "₹6,000" },
  ],
  contactEmail: "IndustryExpoAarohan@gmail.com",
};