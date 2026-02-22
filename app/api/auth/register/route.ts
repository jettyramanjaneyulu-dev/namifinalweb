import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();

    // 1️⃣ Check existing admin
    const { data: existing, error: checkError } = await supabase
      .from("admins")
      .select("id")
      .eq("email", email)
      .single();

    if (existing) {
      return NextResponse.json(
        { message: "Admin already exists" },
        { status: 409 }
      );
    }

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 = no rows found (safe to ignore)
      throw checkError;
    }

    // 2️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Insert admin
    const { error: insertError } = await supabase.from("admins").insert([
      {
        name,
        email,
        password: hashedPassword,
      },
    ]);

    if (insertError) {
      throw insertError;
    }

    return NextResponse.json(
      { message: "Admin created successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}