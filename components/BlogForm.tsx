"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type BlogFormProps = {
  initialData?: {
    title?: string;
    content?: string;
  };
  blogId?: string;
};

export default function BlogForm({ initialData, blogId }: BlogFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setContent(initialData.content || "");
    }
  }, [initialData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    if (selectedFile.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const url = blogId ? `/api/blogs/${blogId}` : `/api/blogs`;
    const method = blogId ? "PUT" : "POST";

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (file) formData.append("file", file);

    const res = await fetch(url, { method, body: formData });

    if (res.ok) {
      router.push("/admin/blogs");
      router.refresh();
    } else {
      alert("Failed to save blog");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Title */}
      <div>
        <label className="block mb-2 font-bold text-black">
          Blog Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
            w-full rounded-xl px-5 py-4
            bg-white text-black
            border-2 border-[#cfeef6]
            focus:border-[#00a5d0]
            focus:ring-2 focus:ring-[#00a5d0]/40
            outline-none transition
          "
          placeholder="Enter blog title"
          required
        />
      </div>

      {/* Content */}
      <div>
        <label className="block mb-2 font-bold text-black">
          Blog Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="
            w-full min-h-[220px] rounded-xl px-5 py-4
            bg-white text-black
            border-2 border-[#cfeef6]
            focus:border-[#00a5d0]
            focus:ring-2 focus:ring-[#00a5d0]/40
            outline-none transition
          "
          placeholder="Write your blog content here..."
          required
        />
      </div>

      {/* Upload */}
      <div>
        <label className="block mb-2 font-bold text-black">
          Upload Image or PDF
        </label>

        <input
          type="file"
          accept="image/*,.pdf"
          onChange={handleFileChange}
          className="
            block  text-sm text-black  
            file:mr-4 file:py-2.5 file:px-5
            file:rounded-xl file:border-0
            file:font-bold
            file:bg-[#00a5d0] file:text-black
            hover:file:bg-[#008bb5] 
            transition
          "
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 max-h-56 rounded-xl border border-[#cfeef6]"
          />
        )}

       {file && file.type === "application/pdf" && (
  <p className="mt-3 font-semibold text-[#cfeef6] flex items-center gap-2">
    📄
    <span className="break-all text-black">
      {file.name}
    </span>
  </p>
)}      </div>

      {/* Submit */}
   <button
  type="submit"
  disabled={loading}
  className="
    w-full inline-flex items-center justify-center gap-2
    rounded-2xl px-8 py-3
    bg-white/10
    border-2 border-white/30
    text-black font-bold text-base
    backdrop-blur-md
    hover:bg-white hover:text-[#193f62]
    active:scale-[0.98]
    focus:outline-none focus:ring-2 focus:ring-white/40
    disabled:opacity-60 disabled:cursor-not-allowed
    transition-all duration-200
  "
>
  {loading ? "Saving..." : blogId ? "Update Blog" : "Create Blog"}
</button>


    </form>
  );
}
