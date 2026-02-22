import BlogForm from "@/components/BlogForm";
import Link from "next/link";

export default function CreateBlogPage() {
  return (
    <div
      style={{ backgroundColor: '#193f62' }}
      className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative"
    >
      
      {/* Header Area */}
      <div className="mx-auto max-w-4xl mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="z-10">
          <h1 className="text-white text-4xl font-black tracking-tight">
            Create New Blog
          </h1>
          <p className="mt-2 text-lg font-bold text-white/80">
            Write and publish a new blog post
          </p>
        </div>

        <Link href="/admin/blogs"
          className="z-10 inline-flex items-center rounded-xl bg-white/10 border-2 border-white/20 px-6 py-2 text-sm font-bold text-white hover:bg-white hover:text-[#193f62] transition-all"
        >
          ← Back to Blogs
        </Link>
      </div>

      {/* Main Form Card */}
      <div className="mx-auto max-w-4xl rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">

        {/* Card Header */}
        <div className="bg-[#00add4] px-8 py-6">
          <h2 className="text-2xl font-bold text-black">
            Blog Details
          </h2>
          <p className="text-black font-medium">
            Complete the fields below to publish
          </p>
        </div>


        {/* The Form Area */}
        <div className="px-8 py-10 bg-white">
          {/* The BlogForm will now use the #00a5d0 color for visibility */}
          <BlogForm />
        </div>
      </div>
    </div>
  );
}