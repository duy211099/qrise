import React, { useEffect, useId, useRef } from 'react'
import qrcode, { QRCodeToDataURLOptions } from 'qrcode'

interface IProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
    value?: string
    option?: QRCodeToDataURLOptions
}

export const QRCode = ({
    value,
    option = {
        type: 'image/png',
        width: 250,
    },
    ...props
}: IProps) => {
    const id = useId()
    const ref = useRef<HTMLCanvasElement>(null)

    const generateQRCode = () => {
        if (value) {
            ref?.current &&
                qrcode.toCanvas(ref!.current, value, option, function (error) {
                    if (error) console.error('duy er', error)
                    console.log('success!')
                })
        } else {
            if (ref?.current) {
                const canvas = ref!.current
                const context = canvas.getContext('2d')
                context?.clearRect(0, 0, canvas.width, canvas.height)
            }
        }
    }

    useEffect(() => {
        generateQRCode()
    }, [value])

    return <canvas id={`qr-code-${id}`} ref={ref} {...props}></canvas>
}
