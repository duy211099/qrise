import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { NProgressHandler } from '../../../components'

type Props = {}

export const MainLayout = (_props: Props) => {
    return (
        <div>
            <Header />
            <Outlet />
            <NProgressHandler />
        </div>
    )
}
