"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import Eye from "lucide-react/dist/esm/icons/eye";
import FileText from "lucide-react/dist/esm/icons/file-text";

type Blog = {
  id: number;
  title: string;
  created_at: string;
  file_url?: string | null;
};


export default function BlogsGridPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await supabase
        .from("posts")
        .select("id, title, created_at, file_url")
        .order("created_at", { ascending: false });

      setBlogs(data || []);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const isImage = (url?: string | null) =>
    url?.match(/\.(jpg|jpeg|png|webp)$/i);

  const isPdf = (url?: string | null) =>
    url?.match(/\.pdf$/i);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Blogs</h1>

        <Link
          href="/admin/dashboard"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {loading && <p className="text-gray-500">Loading blogs…</p>}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="
              bg-white rounded-2xl shadow
              hover:shadow-lg transition
              p-4 flex gap-4
            "
          >
            {/* LEFT: Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>
              </div>

              {/* View button */}
              <div className="mt-4">
                <Link
                  href={`/admin/blogs/view/${blog.id}`}
                  className="
                    inline-flex items-center gap-2
                    text-sm font-medium
                    text-green-600 hover:text-green-800
                  "
                >
                  <Eye size={16} />
                  View Blog
                </Link>
              </div>
            </div>

            {/* RIGHT: Attachment Thumbnail */}
            {blog.file_url && (
              <a
                href={blog.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-28 h-24
                  rounded-xl
                  border
                  overflow-hidden
                  flex items-center justify-center
                  bg-gray-50
                  hover:bg-gray-100
                "
                title="View Attachment"
              >
                {isImage(blog.file_url) && (
                  <img
                    src={blog.file_url}
                    alt="Attachment"
                    className="w-full h-full object-cover"
                  />
                )}

                {isPdf(blog.file_url) && (
                  <div className="flex flex-col items-center text-purple-600">
                    <FileText size={28} />
                    <span className="text-xs mt-1 font-medium">
                      PDF
                    </span>
                  </div>
                )}
              </a>
            )}
            
          </div>
        ))}
      </div>

      {!loading && blogs.length === 0 && (
        <p className="text-gray-500 mt-10 text-center">
          No blogs found.
        </p>
      )}
    </div>
  );
}
