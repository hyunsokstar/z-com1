"use client"
import Image from "next/image";
import style from './followRecommend.module.css';
import zcom_logo from "../../../../public/zcom_logo.jpg"

export default function FollowRecommend() {
    const onFollow = () => { };

    const user = {
        id: 'elonmusk',
        nickname: 'Elon Musk',
        image: zcom_logo
    };

    return (
        <div className={style.container}>
            <div className={style.userLogoSection}>
                <div className={style.userLogo}>
                    <Image src={zcom_logo} alt={user.id} />
                </div>
            </div>
            <div className={style.userInfo}>
                <div className={style.title}>{user.nickname}</div>
                <div className={style.count}>@{user.id}</div>
            </div>
            <div className={style.followButtonSection}>
                <button onClick={onFollow}>팔로우</button>
            </div>
        </div>
    )
}