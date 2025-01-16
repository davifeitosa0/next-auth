"use client";
import Google from "@/../public/icons/google.png";
import OauthItem from "@/components/login/OauthItem";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function OauthGroup() {
  return (
    <>
      <OauthItem
        onClick={() => signIn("github", { callbackUrl: "/home" })}
        className="bg-[#0d1017] hover:bg-[#111] text-white"
      >
        <Github />
        Github
      </OauthItem>

      <OauthItem
        onClick={() => signIn("google", { callbackUrl: "/home" })}
        className="bg-white text-primary hover:opacity-90"
      >
        <Image src={Google} alt="Google icon" width={24} height={24} />
        Google
      </OauthItem>
    </>
  );
}
