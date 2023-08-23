import { NextResponse } from "next/server";
import {getData} from "@/lib/api-calls";

export async function GET(request:Request) {
    const countries = await getData()
    return NextResponse.json(countries)
    // try {
    //     const data:Country[] = await db.select().from(countries).orderBy(countries.id)
        
    //     return NextResponse.json(data)
        
    // } catch (error) {
    //     return new NextResponse("Something went wrong")
    // }
}
