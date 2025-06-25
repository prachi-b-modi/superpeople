// pages/test.tsx
import { supabase } from '../lib/supabase'
import React from 'react';

export default async function TestPage() {
  const { data, error } = await supabase.from('user_logs').select('*')
  return (
    <pre>{JSON.stringify(data || error, null, 2)}</pre>
  )
}
