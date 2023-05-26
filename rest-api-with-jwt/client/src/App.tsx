import React, { useState } from "react";
import { check } from "./api/auth";
import DisplayError from "./components/DisplayError";

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const credentialCheck = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { email, password } = formData
    const isValid: any = await check(email, password)

    if (!isValid.status) {
      setError(isValid.message)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="container mx-auto min-h-screen flex">
      <div className="w-full sm:w-[500px] m-auto p-5">
        <header className="mb-6">
          <h1 className="font-bold text-2xl">Sign In</h1>
        </header>

        <DisplayError error={error} />

        <form onSubmit={(e) => credentialCheck(e)} action="">
          <input type="email" value={formData.email} onChange={e => handleChange(e)} name="email" required className="mb-4 block py-3 px-5 w-full rounded-full outline-none text-slate-800 text-base placeholder:text-slate-400 bg-slate-200" placeholder="Enter email" />
          <input type="password" value={formData.password} onChange={e => handleChange(e)} name="password" required className="mb-4 block py-3 px-5 w-full rounded-full outline-none text-slate-800 text-base placeholder:text-slate-400 bg-slate-200" placeholder="Enter password" />

          <button className="block w-full bg-slate-800 py-3 text-slate-100 px-5 rounded-full font-semibold">Sign In</button>
        </form>
      </div>
    </main>
  );
}

export default App;
