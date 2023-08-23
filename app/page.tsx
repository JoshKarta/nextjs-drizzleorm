// "use client"
import DataTable from "./(root)/table"
import { Fragment } from "react"
import { UserButton, currentUser } from "@clerk/nextjs"
import { db } from "./db"
import { Country, countries } from "./db/schema"

// const queryClient = new QueryClient();

export default async function Home() {
  const user = await currentUser()
  // const countries = await getData()
  const data: Country[] = await db.select().from(countries).orderBy(countries.id)

  return (
    <Fragment>
      <div className="shadow-sm py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p>Welcome back <span className="italic font-medium capitalize">{user?.username}</span> </p>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10">
        {/* <QueryClientProvider client={queryClient}>
        </QueryClientProvider> */}
        <DataTable data={data} />
      </div>
    </Fragment>
  )
}
