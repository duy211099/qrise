import { useEffect, useState } from 'react'
import { Input } from '../../components'
import { QRCode } from '../../components/QRCode/QRCode'
import { createClient } from '@supabase/supabase-js'
import { Database } from '../../../database.types'

const supabase = createClient<Database>(
    import.meta.env.SUPABASE_URL ?? '',
    import.meta.env.SUPABASE_ANON_KEY ?? '',
)

export const HomePage = () => {
    const [value, setValue] = useState('')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [countries, setCountries] = useState<any>([])

    useEffect(() => {
        getCountries()
    }, [])

    async function getCountries() {
        const { data } = await supabase.from('todos').select()
        setCountries(data)
    }

    return (
        <div className="min-h-screen bg-slate-600 p-4">
            <ul>
                {countries.map((country) => (
                    <li key={country.id}>{country.task}</li>
                ))}
            </ul>
            <Input
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                value={value}
            />
            <div className="flex justify-center p-4">
                <QRCode value={value} />
            </div>
        </div>
    )
}
