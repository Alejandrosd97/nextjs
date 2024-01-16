import prisma from '@/lib/prisma'
import { Stripe} from 'stripe'




export default async function handler(req, res) {
    const stripe =  new Stripe(process.env.STRIPE_SECRET_KEY)
    const precios =await stripe.prices.list()

    res.json(precios.data)
}

  
