// "use client"
import { getData } from "@/lib/api-calls"
import DataTable from "./(root)/table"
import { Fragment } from "react"
// import { QueryClient, QueryClientProvider } from "react-query"

// const queryClient = new QueryClient();

export default async function Home() {
  const countries = await getData()
  return (
    <Fragment>
      <div className="shadow-sm py-4 mx-auto ">
        <p className="max-w-7xl mx-auto italic font-medium">Countries();</p>
      </div>
      <div className="max-w-7xl mx-auto mt-10">
        {/* <QueryClientProvider client={queryClient}>
        </QueryClientProvider> */}
        <DataTable data={countries} />
      </div>
    </Fragment>
  )
}
