"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Blog = {
  title: string;
  content: string;
  created_at: string;
  file_url?: string | null;
};

export default function ViewBlog() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      const res = await fetch(`/api/blogs/${id}`);
      const data = await res.json();
      setBlog(data);
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-500 animate-pulse">Loading blog…</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-red-500 font-medium">Blog not found</p>
      </div>
    );
  }

  const isImage = blog.file_url?.match(/\.(jpg|jpeg|png|webp)$/i);
  const isPdf = blog.file_url?.match(/\.pdf$/i);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-3 sm:px-6 py-6">
      <div className="max-w-4xl mx-auto">

        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => router.push("/admin/blogs")}
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            ← Back to Blogs
          </button>

          <span className="text-xs text-gray-500">
            {new Date(blog.created_at).toLocaleDateString()}
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Title Section */}
          <div className="px-6 sm:px-10 py-6 border-b">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
              {blog.title}
            </h1>
          </div>

          {/* Media */}
        {/* Attachment Card */}
{blog.file_url && (
  <div className="mt-6">
    <a
      href={blog.file_url} target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-3
        rounded-xl border
        px-6 py-4
        bg-white
        text-blue-600
        font-semibold
        shadow-sm
        hover:bg-blue-50
        transition
      "
    >
      📄 View Attachment
    </a>
  </div>
)}



          {/* Content */}
          <div className="px-6 sm:px-10 py-8">
            <div className="
              text-gray-800
              text-base
              leading-relaxed
              whitespace-pre-line
            ">
              {blog.content}
            </div>
          </div>
        </div>

        {/* Sticky Actions (Mobile Friendly) */}
        {/* <div className="
          mt-6
          flex justify-end
          sm:static
          fixed bottom-0 left-0 right-0
          bg-white
          sm:bg-transparent
          border-t sm:border-0
          px-4 py-3
          sm:p-0
        ">
          <button
            onClick={() => router.push(`/admin/blogs/edit/${id}`)}
            className="
              w-full sm:w-auto
              px-6 py-3
              rounded-xl
              bg-blue-600
              text-white
              font-bold
              hover:bg-blue-700
              transition
            "
          >
            Edit Blog
          </button>
        </div> */}
      </div>
    </div>
  );
}
