"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export const LogOutButton = () => {
  return (
    <LogOut
      onClick={() => signOut({ callbackUrl: "/" })}
      className="cursor-pointer hover:bg-red-600 p-1 size-8 rounded-sm "
    />
  );
};
