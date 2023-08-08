import { useEffect, useState } from 'react'
import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
} from '../../components'
import { Tables, supabase } from '../../lib/supabase'
import { useForm } from 'react-hook-form'
import { User } from 'lucide-react'

type Props = {}

export const HomePage = () => {
    let a
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    console.log('duy watch', errors, watch('input')) // watch input value by passing the name of it

    const [todoList, setTodoList] = useState<Tables<'todos'>[] | null>(null)

    useEffect(() => {
        getTodoList()
    }, [])

    async function getTodoList() {
        const { data } = await supabase.from('todos').select()

        setTodoList(data)
    }

    return (
        <div className="min-h-screen p-4">
            <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                <FormControl className="w-full" error={!!errors.input}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        startDecorator={<User />}
                        placeholder="Enter your email"
                        defaultValue=""
                        {...register('input', { required: true })}
                    />
                    {errors.input && (
                        <FormHelperText className="text-red-600">
                            This is an error message.
                        </FormHelperText>
                    )}
                </FormControl>
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
            <ul className="space-y-2 py-4">
                {todoList?.map((country) => (
                    <li
                        className="rounded-md bg-blue-800 p-4 text-white"
                        key={country.id}
                    >
                        {country.task}
                    </li>
                ))}
            </ul>
        </div>
    )
}
