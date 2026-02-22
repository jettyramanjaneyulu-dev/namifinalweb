"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 46px 13px 13px",
  marginTop: "6px",
  marginBottom: "18px",
  border: "none",
  borderRadius: "10px",
  fontSize: "14px",
  color: "#000",
  backgroundColor: "rgba(255,255,255,0.95)",
  outline: "none",
};

export default function AdminRegister() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      setSuccess("Admin account created successfully");
      setLoading(false);

      setTimeout(() => {
        router.replace("/admin/login");
      }, 1500);
    } catch (err) {
      console.error("REGISTER FETCH ERROR:", err);
      setError("Server error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e293b, #0f172a)",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleRegister}
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "32px",
          borderRadius: "18px",
          background: "rgba(255,255,255,0.14)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          color: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "26px" }}>
          Create Admin
        </h2>

        <label>Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />

        <label>Password</label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            minLength={6}
            required
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
            }}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {error && (
          <p style={{ color: "#fecaca", fontSize: "13px" }}>
            {error}
          </p>
        )}

        {success && (
          <p style={{ color: "#bbf7d0", fontSize: "13px" }}>
            {success}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "13px",
            marginTop: "10px",
            borderRadius: "12px",
            border: "none",
            background: loading
              ? "#64748b"
              : "linear-gradient(135deg, #22d3ee, #2563eb)",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <p style={{ marginTop: "18px", fontSize: "13px", textAlign: "center" }}>
          Already have an account?{" "}
          <a href="/admin/login" style={{ color: "#22d3ee" }}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}