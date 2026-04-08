"use client"

import { Button } from "@/components/ui/button"
import { House } from 'lucide-react'
import Link from "next/link"
import { account, client, ID } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [accepted, setAccepted] = useState(false);

  const updateDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!userDetails.name || !userDetails.email || !userDetails.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (userDetails.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!accepted) {
      setError("Please accept the terms and conditions.");
      return;
    }

    try {
      setLoading(true);
      const response = await account.create(
        ID.unique(),
        userDetails.email,
        userDetails.password,
        userDetails.name
      );
      router.push("/auth/sign-in");
    } catch (err: any) {
      setError(err?.message ?? String(err));
    } finally {
      setLoading(false);
    }
  }
  return (
    /* 1. Parent container must be relative and overflow-hidden */
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 2. The Animated Background Layer */}
      <div
        className="absolute inset-0 z-0 bg-[url('/house-3.jpg')] bg-cover bg-center animate-[ken-burns_20s_ease-in-out_infinite_alternate] transform-gpu"
      />
      
      {/* 3. Dark Overlay (makes the form pop) */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* 4. Content Layer (increased z-index to stay above background) */}
      <div className="relative z-20 w-full max-w-md mx-4 bg-white/95 backdrop-blur-sm shadow-2xl flex flex-col items-center gap-8 py-10 px-8 rounded-xl border border-gray-200">
        <div className="text-center">
          <House size={40} className="text-blue-700 mx-auto mb-2"/>
          <h1 className="text-2xl font-bold text-gray-800 font-montserrat">Sign up</h1>
        </div>
        
        <div className="w-full font-inter">
          <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700">Your Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Harry"
                value={userDetails.name}
                onChange={updateDetails}
                className="border border-gray-300 rounded-md py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-700 w-full transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address:</label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                value={userDetails.email}
                onChange={updateDetails}
                className="border border-gray-300 rounded-md py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-700 w-full transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" title="password" className="text-sm font-semibold text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Password:"
                value={userDetails.password}
                onChange={updateDetails}
                className="border border-gray-300 rounded-md py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-700 w-full transition-all"
              />
            </div>

            <div className="flex items-center gap-2 py-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 accent-blue-700"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I Accept <Link href="/terms" className="text-blue-700 font-medium hover:underline">Terms And Condition</Link>
              </label>
            </div>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <Button type="submit" disabled={loading} className="bg-blue-700 hover:bg-blue-700 text-white py-6 text-lg font-semibold">
              {loading ? 'Registering...' : 'Register'}
            </Button>
          </form>
          
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account? <Link href="/auth/sign-in" className="text-black font-bold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignUp