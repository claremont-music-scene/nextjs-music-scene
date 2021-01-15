import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Credentials({
            //The Credentials provider can only be used if JSON Web Tokens are enabled
            // for sessions. Users authenticated with the Credentials provider are not persisted in the database.

            debug: false,

            secret: "shiny",

            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'your username',

            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jimmy" },
                password: {  label: "Password", type: "password" }
            },

            session: {
                // Use JSON Web Tokens for session instead of database sessions.
                // This option can be used with or without a database for users/accounts.
                // Note: `jwt` is automatically set to `true` if no database is specified.
                jwt: true,

                // Seconds - How long until an idle session expires and is no longer valid.
                maxAge: 30 * 24 * 60 * 60, // 30 days

                // Seconds - Throttle how frequently to write to database to extend a session.
                // Use it to limit write operations. Set to 0 to always update the database.
                // Note: This option is ignored if using JSON Web Tokens
                //updateAge: 24 * 60 * 60, // 24 hours
            },

            jwt: {
                // A secret to use for key generation - you should set this explicitly
                // Defaults to NextAuth.js secret if not explicitly specified.
                secret: 'Stay away from my special lady friend',

                // Set to true to use encryption. Defaults to false (signing only).
                encryption: true,

                // You can define your own encode/decode functions for signing and encryption
                // if you want to override the default behaviour.
                // encode: async ({ secret, token, maxAge }) => {},
                // decode: async ({ secret, token, maxAge }) => {},
            },

            callbacks: {
                jwt: async (token, user, account, profile, isNewUser) => {
                    const isSignIn = user ? true : false;

                    console.log('jwt callback', isSignIn)

                    if (isSignIn) {
                        token.apiToken = user.token;
                    }
                    return token;
                },
                session: async (session, user) => {
                    return { ...session, user: { username: user.username } };
                },
            },

            events: {
                signIn: async (message) => { /* on successful sign in */ },
                signOut: async (message) => { /* on signout */ },
                createUser: async (message) => { /* user created */ },
                linkAccount: async (message) => { /* account linked to a user */ },
                session: async (message) => { /* session is active */ },
                error: async (message) => { /* error in authentication flow */ }
            },

            authorize: async (credentials) => {


                const user = (credentials) => {

                    //TODO auth POST

                    console.log('authenticating', credentials)

                    // You need to provide your own logic here that takes the credentials
                    // submitted and returns either a object representing a user or value
                    // that is false/null if the credentials are invalid.
                    // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                    return {token: "0123456789-oak"}
                }


                if (user) {
                    // Any user object returned here will be saved in the JSON Web Token
                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            }
        })
    ]

}

export default (req, res) => NextAuth(req, res, options)



