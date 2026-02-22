import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ✅ SERVICE ROLE CLIENT (SERVER ONLY)
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Simple slug generator
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("file") as File | null;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Missing title or content" },
        { status: 400 }
      );
    }

    const slug = slugify(title);
    let fileUrl: string | null = null;

    /* ===== FILE UPLOAD ===== */
    if (file && file.size > 0) {
      const ext = file.name.split(".").pop();
      const fileName = `${crypto.randomUUID()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-files")
        .upload(fileName, file, {
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        console.error(uploadError);
        return NextResponse.json(
          { error: "File upload failed" },
          { status: 500 }
        );
      }

      const { data } = supabase.storage
        .from("blog-files")
        .getPublicUrl(fileName);

      fileUrl = data.publicUrl;
    }

    /* ===== INSERT DATABASE ===== */
    const { error: dbError } = await supabase.from("posts").insert([
      {
        title,
        slug,
        content,
        file_url: fileUrl,
      },
    ]);

    if (dbError) {
      console.error(dbError);
      return NextResponse.json(
        { error: "Database insert failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("BLOG CREATE ERROR:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}