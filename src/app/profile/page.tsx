import Header from "@/components/Header";
import { apiGetAuthUser } from "@/lib/api-requests";
import { cookies } from "next/headers";
import { AuthPageInvisible } from "@/lib/protect-page";

export default async function ProfilePage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const user = await apiGetAuthUser(token?.value);

  return (
    <>
      <Header />
      <section className=" min-h-screen pt-20">
        <div className="max-w-4xl mx-auto rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Profile Page
            </p>
            <div className="mt-8">
              <h4 className="mb-3">Id: {user.id}</h4>
              <h4 className="mb-3">Name: {user.name}</h4>
              <h4 className="mb-3">Email: {user.email}</h4>
              <h4 className="mb-3">Role: {user.role}</h4>
              <h4 className="mb-3">Verified: {String(user.verified)}</h4>
            </div>
          </div>
        </div>
      </section>
      <AuthPageInvisible />
    </>
  );
}
