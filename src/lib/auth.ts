import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/" },
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as { email: string; password: string };

        const user = {
          id: "1",
          name: password,
          email: email,
          image: "",
        };
        return user;
      },
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
};
