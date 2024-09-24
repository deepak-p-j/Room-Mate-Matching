// app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import createUser from '@/app/actions/createUser'; // Ensure this path is correct
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    /**
     * `signIn` callback is called whenever a user tries to sign in.
     * We use it to create or update the user in our database.
     */
    async signIn({ user, account }) {
      try {
        const { email, image, name } = user;
        const { provider, providerAccountId } = account;
        const userData = {
          email: email!,
          image: image || '',
          name: name || '',
          provider: provider || '',
          providerAccountId: providerAccountId || '',
        };

        if (email) {
          const result = await createUser(userData);
          if (result.message !== 'Successfully saved') {
            console.error('User creation failed:', result.err);
            return false; // Prevent sign-in if user creation fails
          }
        }
        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false; // Prevent sign-in if there's an error
      }
    },

    /**
     * `session` callback is called whenever a session is checked.
     * We use it to pass additional session information.
     */
    async session({ session, token }) {
      try {
        if (token && session.user) {
          session.user.email = token.email as string;
        }
        return session;
      } catch (error) {
        console.error('Error in session callback:', error);
        return session;
      }
    },

    /**
     * `jwt` callback is called whenever a JWT token is created or updated.
     * We use it to store the user's email in the token.
     */
    async jwt({ token, user }) {
      try {
        if (user) {
          token.email = user.email;
        }
        return token;
      } catch (error) {
        console.error('Error in jwt callback:', error);
        return token;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set correctly
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development', // Enable debug messages in development
};

// Initialize NextAuth with the defined options
const handler = NextAuth(authOptions);

// Export GET and POST handlers
export { handler as GET, handler as POST };
