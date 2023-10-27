import NextAuth, { RequestInternal } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "../../../services/api";
import { NextApiRequest } from "next";

type authCredPros = {
  credentials: Record<string, string> | undefined;
};

type authReqPros = {
  req: Pick<RequestInternal, "body" | "query" | "headers" | "method">;
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(
        credentials: Record<string, string>,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ) {
        const username = credentials.email as string;
        const password = credentials.password as string;
        await login(username, password)
          .then((res) => {
            console.log("res login");
            console.log(res.accessToken);
            return res.accessToken;
          })
          .catch((error) => {
            console.log("error login");
            console.log(error);
            return null;
          });
      },
    }),
  ],
});
