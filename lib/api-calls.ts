import { db } from "@/app/db"
import { Country, countries } from "@/app/db/schema"
import { eq } from "drizzle-orm"

export async function getData():Promise<Country[]> {
    const results:Country[] = await db.select().from(countries).orderBy(countries.id)

    return results
}

export async function deleteData(id:number) {  
    const test = await db.delete(countries).where(eq(countries.id,id))

return test
}

export async function insertData(values:any) {
    const insert = await db.insert(countries).values(values)
    
    return insert
}