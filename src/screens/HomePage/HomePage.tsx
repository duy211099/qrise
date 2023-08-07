type Props = {}
import { useState } from 'react'
import { Input } from '../../components'
import { QRCode } from '../../components/QRCode/QRCode'

export const HomePage = (_props: Props) => {
    const [value, setValue] = useState('')

    return (
        <div className="min-h-screen bg-slate-600 p-4">
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
