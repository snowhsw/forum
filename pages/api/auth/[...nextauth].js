import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { adapter } from "next/dist/server/web/adapter";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23liulOsd037vXKbyc',
      clientSecret: '0dc2bf0f1902690d844ff76b5e48fcc7383ffcc0',
    }),
  ],
  secret : 'qwer1234',
  adapter: MongoDBAdapter( connectDB )
};
export default NextAuth(authOptions); 