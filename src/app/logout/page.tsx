"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const doLogout = async () => {
      await fetch("/api/auth/logout", { method: "POST" }); // or your logout API
      router.push("/login");
    };

    doLogout();
  }, [router]);

  return <p>Logging out...</p>;
}
