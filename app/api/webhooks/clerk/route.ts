import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'

export async function POST() {
    return Response.json({ message: 'The route is working' });
 }