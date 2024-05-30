// src/app/profile/page.tsx
import Header from "@/components/Header";
import { apiGetAuthUser } from "@/lib/api-requests";
import { cookies } from "next/headers";
import ProfilePageClient from "../profile/ProfilePageClient";

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

export default async function ProfilePage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return <div>Error: No token found</div>;
  }

  const user = await apiGetAuthUser(token) as FilteredUser;

  return (
    <>
      <Header />
      <ProfilePageClient user={user} token={token} />
    </>
  );
}
