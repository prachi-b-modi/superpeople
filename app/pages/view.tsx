// pages/view.tsx
import { supabase } from '../lib/supabase';
import React from 'react';

export default async function ViewLogs() {
  const fakeUserId = 'test-user-123';

  const { data: logs, error } = await supabase
    .from('user_logs')
    .select('*')
    .eq('user_id', fakeUserId)
    .order('created_at', { ascending: false });

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Your Logs</h2>
      <pre>{JSON.stringify(logs || error, null, 2)}</pre>
    </div>
  );
}
