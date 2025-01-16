import clsx from "clsx";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customSize: "sm" | "md" | "lg";
  className?: string;
}

export default function Input({ className, customSize, ...props }: InputProps) {
  const sizes = {
    sm: "h-9 rounded-md px-3",
    md: "h-12 rounded-md px-3",
    lg: "h-14 rounded-md px-8",
  };

  return <input className={clsx("bg-[#3b364c] text-secundary text-base border border-primary placeholder-slate-400 focus:border-none focus:outline-none focus:outline-offset-0 focus:outline-b-2 focus:outline-green-500", sizes[customSize], className)} {...props} />;
}
