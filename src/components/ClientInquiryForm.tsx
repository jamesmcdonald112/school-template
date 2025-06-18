// TODO: Enhancement: Dynamically disable adult option or show a message based on school config from siteConfig.
'use client'
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { sharedFormStylesExport as formStyles } from "@/lib/themeProfiles";
import { siteConfig } from "@/lib/siteConfig";
import Container from "./Container";

type Props = {
  config: { schoolId: string }
}

export default function ClientInquiryForm({ config }: Props) {
  const [status, setStatus] = useState<null | 'success' | 'error' | 'loading'>(null)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
    interest: [] as string[]
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setFormData(prev => ({
      ...prev, 
      [name]: value
    }))

  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setStatus('loading')
    const response =  await supabase.from('leads').insert([
      {
        ...formData,
        school_id: config.schoolId,
        source: siteConfig.defaultFormSource || 'inquiry-form'
      }
    ])
    
    if(response.error) {
      setStatus('error')
      console.error(response.error.message)
    } else {
      setStatus('success')
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        interest: []
      })
    }

    
  }

  return (
    <Container>
      <h2 className="mb-5">Client Inquiry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <label className={formStyles.label} htmlFor="first_name">
          First Name <span className="text-red-500">*</span>
        </label>
        <input className={formStyles.input} type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required/>

        <label className={formStyles.label} htmlFor="last_name">
          Last Name <span className="text-red-500">*</span>
        </label>
        <input className={formStyles.input} type="text" id="last_name" name="last_name" value={formData.last_name}  onChange={handleChange} required/>

        <label className={formStyles.label} htmlFor="inquiry_type">
          Are you inquiring for yourself or a child? <span className="text-red-500">*</span>
        </label>
        <select className={formStyles.input} id="inquiry_type" name="inquiry_type" required>
          <option value="">Please select</option>
          <option value="adult">Myself (Adult, 18+)</option>
          <option value="child">For a Child (Under 18)</option>
        </select>
        {/* In future: Show date-of-birth input only if "child" is selected */}

        <div>
          <label className={formStyles.label}>
            What instrument(s) or program(s) are you interested in? <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {siteConfig.programsOverview.programs.map(({ name }) => {
              const value = name.toLowerCase().replace(/[^a-z]+/g, '');
              const isSelected = formData.interest.includes(value);
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      interest: isSelected
                        ? prev.interest.filter((i) => i !== value)
                        : [...prev.interest, value],
                    }))
                  }
                  className={`px-4 py-2 rounded-full border text-sm sm:text-base transition-colors duration-150 ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>
          <p className="text-sm text-gray-500 mt-1">Click to select one or more options.</p>
        </div>

        <label className={formStyles.label} htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input className={formStyles.input} type="text" id="email" name="email" value={formData.email}  onChange={handleChange} required/>

        <label className={formStyles.label} htmlFor="phone">
          Phone <span className="text-red-500">*</span>
        </label>
        <input className={formStyles.input} type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required/>

        <label className={formStyles.label} htmlFor="message">Message (optional)</label>
        <textarea className={formStyles.textarea} id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Anything else you'd like to add?"></textarea>

        <button 
          type="submit" 
          className="mt-4 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
          disabled={status === 'loading'}>Submit</button>
      </form>

      {status === 'loading' && <p className="mt-2 text-blue-500">Submitting...</p>}
      {status === 'success' && <p className="mt-2 text-green-600">Thanks! We'll be in touch soon.</p>}
      {status === 'error' && <p className="mt-2 text-red-600">Oops, something went wrong.</p>}
    </Container>
  )
}