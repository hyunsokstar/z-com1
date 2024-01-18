import { ReactNode } from "react";
import style from "@/app/(afterLogin)/layout.module.css"

export default function afterLoginLayout({ children }: { children: ReactNode }) {
    return (
        <div className={style.container} >
            hi
        </div>
    )
}