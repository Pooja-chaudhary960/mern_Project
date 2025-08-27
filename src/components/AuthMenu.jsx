"use client";
import { LOGIN_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AuthMenu = () => {
  const router = useRouter();

  let authToken = null;
  if (typeof window !== "undefined") {
    authToken = localStorage.getItem("authToken");
  }

  function logout() {
    localStorage.removeItem("authToken");
    router.push(LOGIN_ROUTE);
  }

  if (authToken)
    return (
      <button
        onClick={logout}
        className="text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition"
      >
        Logout
      </button>
    );

  return (
    <Link
      href={LOGIN_ROUTE}
      className="text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition"
    >
      Login
    </Link>
  );
};

export default AuthMenu;
