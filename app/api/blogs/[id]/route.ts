import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

/* =========================
   GET BLOG BY ID
========================= */
export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const supabase = getSupabaseServerClient();

    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("GET BLOG ERROR:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/* =========================
   UPDATE BLOG
========================= */
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const supabase = getSupabaseServerClient();

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("file") as File | null;

    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    let fileUrl: string | undefined;

    /* ===== FILE UPLOAD ===== */
    if (file && file.size > 0) {
      const ext = file.name.split(".").pop();
      const fileName = `blog_${id}_${Date.now()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-files")
        .upload(fileName, file, { upsert: true });

      if (uploadError) {
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

    /* ===== UPDATE DATABASE ===== */
    const updatePayload: any = { title, content };
    if (fileUrl) updatePayload.file_url = fileUrl;

    const { data, error } = await supabase
      .from("posts")
      .update(updatePayload)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("UPDATE BLOG ERROR:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}