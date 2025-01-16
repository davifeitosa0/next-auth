import { LogOutButton } from "@/components/home/Logout";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

const Home = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-6 bg-primary min-w-80 w-fit h-40 p-4 rounded-[60px]">
        <Image
          width={80}
          height={80}
          className="rounded-full object-cover"
          src={session?.user?.image || "/default-image.png"}
          alt={session?.user?.name || "User Image"}
        />
        <h1 className="font-bold text-xl">Olá {session?.user?.name}!</h1>
        <LogOutButton />
      </div>
    </div>
  );
};

export default Home;
