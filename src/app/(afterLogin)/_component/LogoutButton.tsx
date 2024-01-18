"use client"

import style from "./logoutButton.module.css";
import zcom_logo from "../../../../public/zcom_logo.jpg"
import Image from "next/image";

export default function LogoutButton() {
    const me = { // 임시로 내 정보 있는것처럼
        id: 'zerohch0',
        nickname: '제로초',
        image: zcom_logo,
    }

    const onLogout = () => { };

    return (
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                <Image src={zcom_logo} alt={"zlogo"} width={40} height={40} />
            </div>
            <div className={style.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    )
}