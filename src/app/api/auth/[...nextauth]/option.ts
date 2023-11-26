import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {

    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_CLIENT_ID as string,
          clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
       /* GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),*/
        // Add more providers as needed
      ],
    
      // Optional configuration
      /*callbacks: {
        async jwt(token, user) {
          // Add extra properties to the token if needed
          if (user) {
            token.id = user.id;
          }
          return token;
        },
        async session(session, token) {
          // Add extra properties to the session if needed
          session.userId = token.id;
          return session;
        },
      },*/

}