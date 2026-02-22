"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import Eye from "lucide-react/dist/esm/icons/eye";
import FileText from "lucide-react/dist/esm/icons/file-text";
import { motion } from "framer-motion";

type Blog = {
  id: number;
  title: string;
  created_at: string;
  file_url?: string | null;
};

export default function BlogPage() {
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
    <div
      className="
        relative min-h-screen px-4 py-10
        bg-gradient-to-br
        from-[#0f2027] via-[#203a43] to-[#2c5364]
        overflow-hidden
      "
    >
      {/* Floating Capsules Background */}
      <FloatingCapsules />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Our Blog
        </h1>
        <p className="mt-2 text-white/70">
          Latest updates, articles & resources
        </p>
      </div>

      {loading && (
        <p className="relative z-10 text-center text-white/70">
          Loading blogs…
        </p>
      )}

      {/* Grid */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6
        "
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="
              backdrop-blur-xl
              bg-white/15
              border border-white/20
              rounded-3xl
              shadow-lg
              hover:bg-white/20
              transition
              p-5
              flex gap-4
            "
          >
            {/* LEFT CONTENT */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-white/70 mt-1">
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>
              </div>

              <div className="mt-4">
                <Link
                  href={`/blog/${blog.id}`}
                  className="
                    inline-flex items-center gap-2
                    text-sm font-medium
                    text-cyan-300 hover:text-cyan-200
                  "
                >
                  <Eye size={16} />
                  Read More
                </Link>
              </div>
            </div>

            {/* RIGHT: ATTACHMENT */}
            {blog.file_url && (
              <a
                href={blog.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-28 h-24
                  rounded-2xl
                  overflow-hidden
                  flex items-center justify-center
                  bg-white/20
                  border border-white/30
                  hover:bg-white/30
                  transition
                "
              >
                {isImage(blog.file_url) && (
                  <img
                    src={blog.file_url}
                    alt="Attachment"
                    className="w-full h-full object-cover"
                  />
                )}

                {isPdf(blog.file_url) && (
                  <div className="flex flex-col items-center text-cyan-200">
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
        <p className="relative z-10 text-white/70 mt-12 text-center">
          No blog posts available.
        </p>
      )}
    </div>
  );
}


      /* ===================== FLOATING CAPSULES – FULL PAGE ===================== */

const capsuleColors = [
  "from-pink-400 to-rose-500",
  "from-cyan-400 to-blue-500",
  "from-purple-400 to-indigo-500",
];

type Capsule = {
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

function FloatingCapsules() {
  const [capsules, setCapsules] = useState<Capsule[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 18 }).map((_, i) => ({
      x: Math.random() * 100,
      size: 24 + Math.random() * 26,
      duration: 22 + Math.random() * 18,
      delay: Math.random() * 10,
      color: capsuleColors[i % capsuleColors.length],
    }));

    setCapsules(generated);
  }, []);

  if (!capsules.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {capsules.map((cap, i) => (
        <motion.div
          key={i}
          initial={{
            x: `${cap.x}vw`,
            y: "1100",
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "-200",
            opacity: [0, 0.35, 0.35, 0],
            rotate: 360,
          }}
          transition={{
            duration: cap.duration,
            delay: cap.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute rounded-full bg-gradient-to-br ${cap.color} blur-[0.4px]`}
          style={{
            width: cap.size ,
            height: cap.size,
          }}
        />
      ))}
    </div>
  );
}