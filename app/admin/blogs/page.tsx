"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import Eye from "lucide-react/dist/esm/icons/eye";
import Pencil from "lucide-react/dist/esm/icons/pencil";
import Trash2 from "lucide-react/dist/esm/icons/trash-2";



type Blog = {
  id: number;
  title: string;
  created_at: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, created_at")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setBlogs(data);
      }

      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4 sm:p-8">

    {/* Header */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
  <h1 className="text-3xl font-bold">Blogs</h1>

  <div className="flex gap-3">
    {/* Back Button */}
    <Link
      href="/admin/dashboard"
      className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition shadow"
    >
      ← Back
    </Link>

    {/* Create Blog Button */}
    <Link
      href="/admin/blogs/create"
      className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow"
    >
      + Create Blog
    </Link>
  </div>
</div>

      {loading && <p>Loading blogs...</p>}

      {!loading && blogs.length === 0 && (
        <p className="text-gray-500">No blogs created yet.</p>
      )}

      {/* Desktop Table */}
      {blogs.length > 0 && (
        <div className="hidden md:block bg-white rounded-xl shadow border">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-center">Created</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-t">
                  <td className="p-4 font-medium">{blog.title}</td>
                  <td className="p-4 text-center">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </td>
                <td className="p-4 text-center">
  <div className="flex items-center justify-center gap-4">

    {/* View */}
    <Link
      href={`/admin/blogs/view/${blog.id}`}
      className="
        w-9 h-9 flex items-center justify-center
        rounded-full
        bg-green-50 text-green-600
        hover:bg-green-100 hover:scale-110
        transition
      "
      title="View"
    >
      <Eye size={18} />
    </Link>

    {/* Edit */}
    <Link
      href={`/admin/blogs/edit/${blog.id}`}
      className="
        w-9 h-9 flex items-center justify-center
        rounded-full
        bg-blue-50 text-blue-600
        hover:bg-blue-100 hover:scale-110
        transition
      "
      title="Edit"
    >
      <Pencil size={18} />
    </Link>

    {/* Delete */}
    <button
      className="
        w-9 h-9 flex items-center justify-center
        rounded-full
        bg-red-50 text-red-600
        hover:bg-red-100 hover:scale-110
        transition
      "
      title="Delete"
    >
      <Trash2 size={18} />
    </button>

  </div>
</td>



                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      

    </div>
  );
}
