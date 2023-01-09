import { Routers } from "../router/Routers"
import { Navbar } from "./Navbar"

export const Layout = () => {
    return (
        <div className="font-Boroto">
            <Navbar />
            <Routers />
        </div>
    )
}
