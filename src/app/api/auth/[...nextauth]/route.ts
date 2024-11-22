import NextAuth from "next-auth"
import { OAuthConfig } from "next-auth/providers/oauth";

const client_id = 'e3800a81-22c0-41eb-ad47-862a9d9d233f';
const client_secret = "zRw3IK2JmJz5MRG-cZJqJtmq7KQee26c";
const redirect_uri = "http://localhost:5003/api/auth/osp";
const post_logout_redirect_uri = "http://localhost:5003/api/auth/logout";
const code_challenge = "5rTRUoSencKvxUFW1G53yygSd8Fc8p4ln1MEcBo-s7c";
const code_verifier =
  "3wSdYcQ1DCWX3Jx2l5YTMsVnY1YrMNnSsxA48aB9rnRfxOFzjKryQW_1qamHGhhODkVhxPNpiAPFxM9w2UKP4w";

const handler = NextAuth({
  providers: [
    {
      id: "osp-auth",
      name: "OSPAuth",
      type: "oauth",
      // version: "2.0",
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: {
        url: `http://localhost:3020/auth/authorize`,
        params: {
          code_challenge_method: "S256",
        }
      },
      token: `http://localhost:3020/auth/token`,
      idToken: false,
      userinfo: "http://localhost:3020/client/user-info",
      checks: ['pkce'],
      async profile(profile) {
        console.log(profile)
        return {
          id: profile?.sub || profile.id,
          name: profile.name,
          email: profile.email,
        };
      },
    },
  ],
  // secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }