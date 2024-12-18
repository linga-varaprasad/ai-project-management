import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zqdmclngcjsbtizaosji.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZG1jbG5nY2pzYnRpemFvc2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0OTEzODksImV4cCI6MjA1MDA2NzM4OX0.FP7mz2oYqtcJ4CmuIcSm_mbyus7MOGCTso4yl8kPiPs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)