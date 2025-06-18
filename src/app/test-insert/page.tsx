'use client';

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    async function insertLead() {
      const response = await supabase.from('leads').insert([
        {
          school_id: "test-school",
          first_name: "Jane",
          last_name: "Doe",
          email: "jane@example.com",
          phone: "1234567890",
          message: "Test insert",
          source: "test-page"
        }
      ])        
      console.log(response)
      if (response.error) setStatus(`Error: ${response.error.message}`)
      else setStatus(`Status ${response.status}: Lead created successfully`)
    }


    insertLead()
  }, [])
  
  return (
    <div className="py-24">
      {status && <h1>{status}</h1>}
    </div>
  )

  
}