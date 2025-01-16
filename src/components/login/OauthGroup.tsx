"use client";
import { Github } from "lucide-react";
import Image from "next/image";
import Google from "@/../public/icons/google.png";
import OauthItem from "@/components/login/OauthItem";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function OauthGroup() {
  const { data: session } = useSession();
  useEffect(() => {
    console.log(session?.user);
  },[session])
  
  return (
    <>
      <OauthItem
        onClick={() => signIn("github")}
        className="bg-[#0d1017] hover:bg-[#111] text-white"
      >
        <Github />
        Github
      </OauthItem>

      <OauthItem
        onClick={() => console.log("Google")}
        className="bg-white text-primary hover:opacity-90"
      >
        <Image src={Google} alt="Google icon" width={24} height={24} />
        Google
      </OauthItem>
    </>
  );
}

