import { db } from "@/app/db";
import { countries } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(req:Request,{params} : {params: {id:number}}) {
    try {
       return NextResponse.json(
        await db.delete(countries).where(eq(countries.id, params.id))
       )
    } catch (error) {
        return new NextResponse("Something went wrong")
    }
}

// export async function PATCH(req:Request,{params}:{params:{id:number}}) {
//     try {
//         const {body}:{body:any} = await req
//         const {countryName} = body

//        return NextResponse.json(
//         await db.update(countries).set({name:countryName}).where(eq(countries.id, params.id))
//        ) 
//     } catch (error) {
//         throw new NextResponse("Something went wrong")
//     }
// }

export async function GET(req:Request, {params}:{params:{id:number}}) {
    try {
        return NextResponse.json(
            await db.select().from(countries).where(eq(countries.id, params.id))
        )
    } catch (error) {
        throw new NextResponse("Something went wrong")
    }
}

export async function PATCH(req:Request, {params}: {params:{id:number}}) {
    try {
        const body = await req.json()
        const {name} = body
        return NextResponse.json(
            await db.update(countries).set({name: name}).where(eq(countries.id, 17))
        )
    } catch (error) {
        throw new NextResponse("Something went wrong")
    }
}