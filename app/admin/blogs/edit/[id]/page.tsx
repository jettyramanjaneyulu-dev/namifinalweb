"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlog() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [existingFileUrl, setExistingFileUrl] = useState<string | null>(null);
  const [existingFileType, setExistingFileType] =
    useState<"image" | "pdf" | null>(null);

  // 🔹 Fetch existing blog
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const data = await res.json();

        setTitle(data?.title ?? "");
        setContent(data?.content ?? "");

        if (data?.file_url) {
          setExistingFileUrl(data.file_url);

          if (data.file_url.match(/\.(jpg|jpeg|png|webp)$/i)) {
            setExistingFileType("image");
            setPreview(data.file_url);
          } else if (data.file_url.match(/\.pdf$/i)) {
            setExistingFileType("pdf");
          }
        }
      } catch {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // 🔹 File select
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);

    if (selected.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(selected));
    } else {
      setPreview(null);
    }
  };

  // 🔹 Update blog
  const handleUpdate = async () => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setSaving(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (file) formData.append("file", file);

    const res = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      body: formData,
    });

    setSaving(false);

    if (!res.ok) {
      setError("Failed to update blog");
      return;
    }

    router.push("/admin/blogs");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-500">Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <button
        onClick={() => router.push("/admin/blogs")}
        className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
      >
        ← Back to Blogs
      </button>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Edit Blog</h1>
          <p className="text-sm text-gray-500">Update blog details</p>
        </div>

        {error && (
          <div className="mb-4 text-red-600 text-sm">{error}</div>
        )}

        {/* Title */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Blog Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Content */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Blog Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          />
        </div>

        {/* Existing file */}
        {existingFileUrl && !file && (
          <div className="mb-6">
            {existingFileType === "image" && (
              <img
                src={existingFileUrl}
                alt="Existing file"
                className="max-h-56 rounded-xl border"
              />
            )}

            {existingFileType === "pdf" && (
              <a
                href={existingFileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium underline"
              >
                📄 View existing PDF
              </a>
            )}
          </div>
        )}

        {/* Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Replace Image or PDF (optional)
          </label>
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-end">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            disabled={saving}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {saving ? "Updating..." : "Update Blog"}
          </button>
        </div>
      </div>
    </div>
  );
}