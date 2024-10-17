import { Outlet } from "react-router-dom"
import MainNavigaion from "../components/MainNavigation"
import classes from "./Root.module.css"

function RootLayOut() {
    return (
        <>
            <MainNavigaion />
            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayOut