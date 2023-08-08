// type Props = {}

import { Input } from '../../components'
import { QRCode } from '../../components/QRCode/QRCode'
import { useState } from 'react'

export const Overview = () => {
    const [value, setValue] = useState('')

    return (
        <div className="min-h-screen p-4">
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
