import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

interface IParams {
    params: {
        id: number
    }
}

export default function UpdateForm({ params }: IParams) {
    const formSchema = z.object({
        name: z.string().min(1)
    })

    const form = useForm({
        // resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        }
    })

    const updateCountry = async (values: z.infer<typeof formSchema>, e?: React.BaseSyntheticEvent) => {
        // try {
        //     await axios.patch(`/api/country/${params.id}`, values)
        //     toast.success('Updated successful')
        // } catch (error) {
        //     toast.error("Something went wrong")
        // }
        e?.preventDefault()
        console.log(values)
    }
    return (
        <div className='w-1/3'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(updateCountry)}>
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
                    <Button type="submit" variant={"default"} className="mt-2">Save</Button>
                </form>
            </Form>
        </div>
    )
}
