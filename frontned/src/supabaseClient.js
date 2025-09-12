// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rlnsvbykufkylywbjqnk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsbnN2YnlrdWZreWx5d2JqcW5rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NzE5MDg3MywiZXhwIjoyMDcyNzY2ODczfQ.MV1_6B8LtjZblvIMyyVk2s8TMOWRzNj7baIfTmULonk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);