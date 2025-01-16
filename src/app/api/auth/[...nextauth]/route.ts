import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/" },
  providers: [
    Credentials({
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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
