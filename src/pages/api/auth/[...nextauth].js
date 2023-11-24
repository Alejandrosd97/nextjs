import 'dotenv/config'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'


export default NextAuth({
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_SECRET_KEY,
            profile(profile){
                return {
                    id : profile.id,
                    name : profile.name,
                    email : profile.name,
                    role : profile.email === 'alex.santamaria97@gmail.com'? 'admin' : 'user'
                }
            }
        })
    ],
    secret : process.env.JWT_TOKEN
})