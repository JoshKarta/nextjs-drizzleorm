'use client'
import { db } from "@/app/db"
import { countries } from "@/app/db/schema"
import { eq } from "drizzle-orm"
import { Fragment } from "react"
import Link from "next/link"
import UpdateForm from "./update-form"

interface IData {
    params: {
        id: number
    }
}


export default async function page({ params }: IData) {

    const country = await db.select().from(countries).where(eq(countries.id, params.id))

    return (
        <Fragment>
            <div className="shadow-sm py-4">
                <Link href={'/'}>
                    <p className="max-w-7xl mx-auto italic font-medium">Country({params.id});</p>
                </Link>
            </div>
            <div className="py-10 max-w-7xl mx-auto">
                <p>Country name is:
                    {country.map(({ name }, i) => (
                        <span key={i} className="ml-1 font-medium">{name}</span>
                    ))}
                </p>

                <div className="mt-10">
                    {/* <Form */}
                    <UpdateForm params={params} />
                </div>
            </div>
        </Fragment>
    )
}
