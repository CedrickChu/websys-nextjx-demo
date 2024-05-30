'use client';
import Spinner from "./Spinner";
import Link from "next/link";
import useSession from "@/lib/useSession";
import useStore from "@/store";
import { apiLogoutUser } from "@/lib/api-requests";
import { useRouter } from "next/navigation";

const Header = () => {
  const store = useStore();
  const user = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    store.setRequestLoading(true);
    try {
      await apiLogoutUser();
    } catch (error) {
    } finally {
      store.reset();
      router.push("/login");
    }
  };

  const homeHref = user ? '/home' : '/';

  return (
    <>
      <header className="bg-transparent h-20">
        <nav className="h-full flex justify-between container items-center">
          <div className="flex items-center">
            <Link href={homeHref} className="text-2xl font-semibold flex items-center">
              WEB SYS NEXTJS DEMO
            </Link>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link href="/register" >
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/login" >
                    Login
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link href="/profile" >
                    Profile
                  </Link>
                </li>
                <li className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <div className="pt-4 pl-2 fixed">
        {store.requestLoading && <Spinner />}
      </div>
    </>
  );
};

export default Header;
