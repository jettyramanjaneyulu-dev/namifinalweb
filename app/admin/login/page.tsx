"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
  credentials: "include",   // 🔥 THIS LINE FIXES EVERYTHING
});

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      // ✅ success → go to dashboard
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError("Something went wrong");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleLogin }
        
        style={{
          width: "100%",
          maxWidth: "380px",
          padding: "35px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          color: "#fff",
        }}
      >
        
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          Admin Panel
        </h2>

        {/* Email */}
        <label style={{ fontSize: "13px", opacity: 0.85 }}>
          Email Address
        </label>
        <input
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            marginBottom: "16px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "14px",
            color: "#000",
            background: "rgba(255,255,255,0.9)",
          }}
        />

        {/* Password */}
        <label style={{ fontSize: "13px", opacity: 0.85 }}>
          Password
        </label>
        <div style={{ position: "relative", marginBottom: "14px" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px 46px 12px 12px",
              marginTop: "6px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              fontSize: "14px",
              color: "#000",
              background: "rgba(255,255,255,0.9)",
            }}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#0072ff",
              fontSize: "14px",
            }}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {error && (
          <p style={{ color: "#ffb3b3", fontSize: "13px", marginBottom: "10px" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg, #00c6ff, #0072ff)",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(0,114,255,0.4)",
          }}
        >
          Sign In
        </button>

        <p
          style={{
            marginTop: "18px",
            fontSize: "13px",
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          Don’t have an admin account?{" "}
          <a
            href="/admin/register"
            style={{ color: "#00c6ff", textDecoration: "none", fontWeight: 500 }}
          >
            Create Admin
          </a>
        </p>
      </form>
    </div>
  );
}