"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { apiUpdateAuthUser } from "@/lib/api-requests";
import { UserData } from "../../lib/api-requests";


interface FilteredUser {
    id: string;
    email: string;
    name: string;
    role?: string;
    photo?: string;
    verified?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

interface ProfilePageClientProps {
  user: FilteredUser;
  token: string;
}

export default function ProfilePageClient({ user, token }: ProfilePageClientProps) {
  const [formState, setFormState] = useState({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    photo: user.photo,
    vertified: user.verified,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData: UserData = {
        id: formState.id,
        email: formState.email,
        name: formState.name,
        role: formState.role,
        photo: formState.photo,
        verified: formState.vertified,
        createdAt: formState.createdAt,
        updatedAt: formState.updatedAt,

      };
      console.log("Sending request with userData:", userData);
      await apiUpdateAuthUser(token, userData);
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Failed to update profile. Please try again.');
    }
  };

  return (
    <section className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto rounded-md h-auto flex justify-center items-center">
        <div>
          <p className="mb-3 text-5xl text-center font-semibold">
            Profile Page
          </p>
          <div className="mt-8">
            <h4 className="mb-3">Id: {user.id}</h4>
            <h4 className="mb-3">Role: {user.role}</h4>
            <h4 className="mb-3">Verified: {String(user.verified)}</h4>
          </div>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-4">
              <label className="block">Name</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full text-black px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block">Email</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full text-black px-4 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
