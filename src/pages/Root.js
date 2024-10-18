import { Outlet } from "react-router-dom"
import MainNavigaion from "../components/MainNavigation"

function RootLayOut() {
    return (
        <>
            <MainNavigaion />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayOut