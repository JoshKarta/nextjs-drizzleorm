import { db } from "@/app/db"
import { countries } from "@/app/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export async function POST(req:Request) {
    try {
        // Destructuring from req param
        const body = await req.json()
        const {name} = body
        const country = await db.insert(countries).values({name:name})

        return NextResponse.json(country)
    } catch (error) {
        return new NextResponse('Something went wrong')
    }
}
