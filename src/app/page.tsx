"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1>Welcome to My App</h1>

      <>
        <p>You are not signed in. Please sign in to continue.</p>
        <button
          onClick={() => signIn("osp")}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Sign In with OSP
        </button>
      </>
    </div>
  );
}
