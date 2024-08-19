import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Apple from 'next-auth/providers/apple';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Apple({
      clientId: process.env.AUTH_APPLE_ID as string,
      clientSecret: process.env.AUTH_APPLE_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
});
