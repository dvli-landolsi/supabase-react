import { createClient } from "@supabase/supabase-js";

const VITE_SUPABASE_PROJECT_URL: string = import.meta.env.VITE_SUPABASE_URL;

const VITE_API_KEY: string = import.meta.env.VITE_API_KEY;

export const supabase = createClient(VITE_SUPABASE_PROJECT_URL, VITE_API_KEY);
