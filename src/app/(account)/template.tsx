"use client"
import { useState } from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState('');

  return (
    <div className="py-32 space-y-3 p-4 gap-4 items-center flex flex-col">
      <h2>Routes relative to the User Account</h2>
      <h3>Layouts and Templates</h3>
      {children}
      <input className="p-1" type="text" value={input} onChange={e=>setInput(e.target.value)} />
    </div>
  )
}