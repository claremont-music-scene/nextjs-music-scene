import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {authPoster} from "../../../util/crud";

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Credentials({
            //The Credentials provider can only be used if JSON Web Tokens are enabled
            // for sessions. Users authenticated with the Credentials provider are not persisted in the database.

            authorize: async (credentials) => {

                // Add logic here to look up the user from the credentials supplied
                const authRes = await authPoster(`${process.env.API_URL}/auth/token/login/`, {
                    username: credentials.username,
                    password: credentials.password
                })
                if (authRes && authRes.auth_token) {

                    const userRes = await fetch(`${process.env.API_URL}/auth/users/me/`, {
                        headers: {
                            Authorization: `Token ${authRes.auth_token}`
                        }
                    })
                    const userDeets = await userRes.json()

                    // Any object returned will be saved in `user` property of the JWT
                    return Promise.resolve({
                        apiToken: authRes.auth_token,
                        username: userDeets.username,
                        userId: userDeets.id
                    })
                } else {
                    // If you return null or false then the credentials will be rejected
                    return Promise.resolve(null)
                    // You can also Reject this callback with an Error or with a URL:
                    // return Promise.reject(new Error('error message')) // Redirect to error page
                    // return Promise.reject('/path/to/redirect')        // Redirect to a URL
                }
            },
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: {label: "Username", type: "text", placeholder: "jimmy"},
                password: {label: "Password", type: "password"}
            },

        })
    ],

    debug: false,

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
        //secret: 'Stay away from my special lady friend',

        // Set to true to use encryption. Defaults to false (signing only).
        encryption: true,

        // You can define your own encode/decode functions for signing and encryption
        // if you want to override the default behaviour.
        // encode: async ({ secret, token, maxAge }) => {},
        // decode: async ({ secret, token, maxAge }) => {},
    },

    callbacks: {
        jwt: async (token, user, account, profile, isNewUser) => {
            const isSignIn = user ? true : false
            if (isSignIn) {
                token.apiToken = user.apiToken
                token.username = user.username
                token.userId = user.userId
            }
            return Promise.resolve(token);
        },
        session: async (session, user) => {
            if (user.apiToken) {
                session.apiToken = user.apiToken
                session.username = user.username
                session.userId = user.userId
            }
            return Promise.resolve(session)
        }
    }

}

export default (req, res) => NextAuth(req, res, options)



