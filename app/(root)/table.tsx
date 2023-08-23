'use client'
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation";
import axios from "axios"
import { toast } from "react-hot-toast";
import { Pencil, Trash2 } from "lucide-react";
import CountryForm from "./country-form";


export interface DataTableProps {
    data: {
        id: number;
        name: string | null;
    }[]
}

export default function DataTable({ data }: DataTableProps) {
    const router = useRouter();
    const keys = Object.keys(data[0]);

    const onDelete = async (e: any) => {
        const countryId = e.currentTarget.value

        try {
            await axios.delete(`/api/country/${countryId}`, countryId)
            toast.success("Country removed")
            router.replace('/')
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    return (
        <div>
            <Table className="border border-collapse">
                {/* <TableCaption>Add new countries here</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        {keys.map(key => (
                            <TableHead key={key} className="capitalize">{key}</TableHead>
                        ))}
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map(({ id, name }) => (
                        <TableRow key={id}>
                            <TableCell>{id}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell className="flex items-center gap-2">
                                <Button size={"sm"} variant={"destructive"} value={id} onClick={onDelete}><Trash2 className="w-4 h-4" /></Button>
                                {/* Edit Country */}
                                <Button size={"sm"} variant={"outline"} value={id} onClick={() => {
                                    router.push(`/${id}`)
                                }}><Pencil className="h-4 w-4" /></Button>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Form */}
            <CountryForm />

        </div>
    )
}
