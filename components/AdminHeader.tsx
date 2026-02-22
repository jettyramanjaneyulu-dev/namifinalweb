"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { LogOut } from "lucide-react";

type Props = {
  title: string;
};

export default function AdminHeader({ title }: Props) {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error.message);
      return;
    }

    // 🔒 Prevent back navigation + clear state
    router.replace("/admin/login");

    // Optional but recommended in App Router
    router.refresh();
  };

  
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

      <button
        onClick={handleLogout}
        className="
          inline-flex items-center gap-2
          px-4 py-2
          rounded-xl
          bg-red-50 text-red-600
          hover:bg-red-100
          font-medium
          transition
        "
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}