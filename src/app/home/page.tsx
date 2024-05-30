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
      <section>
        <div className="max-w-4xl mx-auto  rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">
            Hello, {user.name}
          </p>
        </div>
      </section>
      <AuthPageInvisible />
    </>
  );
}
