// pages/log.tsx
'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import React from 'react';

export default function LogPage() {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    const fakeUserId = 'test-user-123'; // Replace with actual user ID once auth is ready

    const response = await supabase.from('user_logs').insert([
      {
        user_id: fakeUserId,
        text: text,
        created_at: new Date().toISOString(),
      },
    ]);

    if (!response.error) {
      setSubmitted(true);
      setText('');
    }
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full border p-2"
        rows={4}
        placeholder="What did you accomplish today?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white" onClick={handleSubmit}>
        Submit
      </button>
      {submitted && <p className="text-green-500 mt-2">Submitted!</p>}
    </div>
  );
}
