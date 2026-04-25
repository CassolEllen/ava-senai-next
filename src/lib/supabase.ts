import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://klrfdunaqhjqlhupddqf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtscmZkdW5hcWhqcWxodXBkZHFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNzYyMTAsImV4cCI6MjA4OTk1MjIxMH0.NFxwdi4f_yfAkml5rQBd5H4pSpvmVNHJDHDR-N5mu8E";

export const supabase = createClient(supabaseUrl, supabaseKey);