"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

import AdminLayout from "@/components/AdminLayout";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";

import { FileText, CheckCircle, Clock } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();

  const [totalBlogs, setTotalBlogs] = useState(0);
  const [publishedBlogs, setPublishedBlogs] = useState(0);
  const [draftBlogs, setDraftBlogs] = useState(0);
  const [loading, setLoading] = useState(true);

  // 📊 Fetch dashboard stats (DATA ONLY)
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { count: total } = await supabase
          .from("posts")
          .select("*", { count: "exact", head: true });

        const { count: published } = await supabase
          .from("posts")
          .select("*", { count: "exact", head: true })
          .eq("published", true);

        const { count: drafts } = await supabase
          .from("posts")
          .select("*", { count: "exact", head: true })
          .eq("published", false);

        setTotalBlogs(total ?? 0);
        setPublishedBlogs(published ?? 0);
        setDraftBlogs(drafts ?? 0);
      } catch (err) {
        console.error("Dashboard stats error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // ⏳ Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gray-100 text-gray-900">
        <AdminSidebar />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <AdminHeader title="Admin Dashboard" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Total Blogs */}
            <div className="rounded-2xl bg-white shadow p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                <FileText size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Blogs</p>
                <p className="text-3xl font-bold">{totalBlogs}</p>
              </div>
            </div>

            {/* Published */}
            <div className="rounded-2xl bg-white shadow p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-green-100 text-green-600">
                <CheckCircle size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Published</p>
                <p className="text-3xl font-bold">{publishedBlogs}</p>
              </div>
            </div>

            {/* Drafts */}
            <div className="rounded-2xl bg-white shadow p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-yellow-100 text-yellow-600">
                <Clock size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Drafts</p>
                <p className="text-3xl font-bold">{draftBlogs}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AdminLayout>
  );
}