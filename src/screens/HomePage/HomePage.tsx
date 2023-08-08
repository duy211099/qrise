import { useEffect, useState } from 'react'
import { FormControl, FormHelperText, FormLabel, Input } from '../../components'
import { QRCode } from '../../components/QRCode/QRCode'
import { Tables, supabase } from '../../lib/supabase'
import { useForm } from 'react-hook-form'

export const HomePage = () => {
    const [value, setValue] = useState('')
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
        <div className="min-h-screen bg-slate-600 p-4">
            <FormControl onSubmit={handleSubmit(onSubmit)}>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder="Enter your email"
                    defaultValue=""
                    {...register('input', { required: true })}
                    error={!!errors.input}
                />
                {errors.input && (
                    <FormHelperText className="text-red-600">
                        This is an error message.
                    </FormHelperText>
                )}
            </FormControl>
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
