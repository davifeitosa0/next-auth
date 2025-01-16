'use client'
import React from "react";
import { HTMLAttributes } from "react";

interface OauthItemProps extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const OauthItem: React.FC<OauthItemProps> = ({ onClick, className, children, ...rest }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center gap-4 w-1/2 h-12 rounded-lg cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default OauthItem;
