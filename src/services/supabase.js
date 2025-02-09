import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ziydlavsgtvotxmrnjpu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppeWRsYXZzZ3R2b3R4bXJuanB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwOTU5MjAsImV4cCI6MjA1NDY3MTkyMH0.KSnOg8U2KHEd7iOh9Iy2vNMRvNd3-WBCkisTKIaG6gM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
