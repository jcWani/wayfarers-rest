import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cjaylxcmzxbovendcgcs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqYXlseGNtenhib3ZlbmRjZ2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4ODAyMjQsImV4cCI6MjAyNDQ1NjIyNH0.noj2mMxmZqXD5_TBykUJfEIQ9qaWfbnCdTgBYaFpI2c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
