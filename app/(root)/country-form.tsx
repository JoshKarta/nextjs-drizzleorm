import axios from 'axios'
import { toast } from 'react-hot-toast'
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function CountryForm() {
    const router = useRouter()

    const formSchema = z.object({
        name: z.string().min(1)
    })

    const form = useForm<z.infer<typeof formSchema>>({
        // resolver: zodResolver(formSchema,),
        defaultValues: {
            name: ''
        }
    })

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        // try {
        //     axios.post("/api/country", values)
        //     toast.success("Country added")
        //     router.refresh()
        //     form.reset()
        // } catch (error) {
        //     toast.error("Something went wrong")
        // }
        console.log(values)
    }

    return (
        <div className="mt-10 flex gap-4 items-center justify-center w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Country name:</FormLabel>
                                <FormControl>
                                    <Input placeholder="Canada" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" variant={"ghost"} size={"sm"} className="mt-2">Save</Button>
                </form>
            </Form>
        </div>)
}
