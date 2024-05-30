import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { apiLoginUser } from '@/lib/api-requests';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const loginUser = async (credentials) => {
    try {
      const user = await apiLoginUser(credentials);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success("Logged in successfully");
      router.push("/profile");
    } catch (error) {
      console.error(error);
      toast.error("Failed to log in");
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push("/");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
