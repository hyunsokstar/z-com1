import React from 'react'
import Link from "next/link";
import style from "@/app/(afterLogin)/_component/post.module.css";
import cx from 'classnames';


// imageInfoArray: [
//     {
//         imageId: 1,
//         link: 'https://loremflickr.com/640/480?lock=8337601968734208'
//     },
//     {
//         imageId: 2,
//         link: 'https://loremflickr.com/640/480?lock=8894055542947840'
//     },
//     {
//         imageId: 3,
//         link: 'https://loremflickr.com/640/480?lock=4766751508135936'
//     },
//     {
//         imageId: 4,
//         link: 'https://loremflickr.com/640/480?lock=3598788138631168'
//     }
// ]

interface imageInfo {
    imageId: number
    link: string
}

type Props = {
    imageInfoArray: imageInfo[]
}

const MyPostImage = ({ imageInfoArray }: Props) => {

    console.log("imageInfoArray : ", imageInfoArray);


    // return (
    // <img src={imageInfoArray[0]?.link} alt="" />
    // <div>{imageInfoArray.length}</div>
    // )

    if (imageInfoArray.length === 0) return (
        <div>no images</div>
    )
    // if (imageInfoArray.length) return null;
    if (imageInfoArray.length === 1) {
        return (
            <Link
                className={cx(style.postImageSection, style.oneImage)}
                style={{ backgroundImage: `url(${imageInfoArray[0]?.link})`, backgroundSize: 'contain' }} href={''}            >
                <img src={imageInfoArray[0]?.link} alt="" />
            </Link>
        )
    }

    if (imageInfoArray.length === 2) {
        return (
            <div
                className={cx(style.postImageSection, style.twoImage)}
            >
                <Link
                    style={{ backgroundImage: `url(${imageInfoArray[0]?.link})`, backgroundSize: 'cover' }} href={''}>
                </Link>
                <Link
                    style={{ backgroundImage: `url(${imageInfoArray[1]?.link})`, backgroundSize: 'cover' }} href={''}>
                </Link>
            </div>
        )
    }
    if (imageInfoArray.length === 3) {
        return (
            <div
                className={cx(style.postImageSection, style.threeImage)}
            >
                <Link
                    style={{ backgroundImage: `url(${imageInfoArray[0]?.link})`, backgroundSize: 'cover' }} href={''}>
                </Link>
                <div>
                    <Link
                        style={{ backgroundImage: `url(${imageInfoArray[1]?.link})`, backgroundSize: 'cover' }} href={''}>
                    </Link>
                    <Link
                        style={{ backgroundImage: `url(${imageInfoArray[2]?.link})`, backgroundSize: 'cover' }} href={''}>
                    </Link>
                </div>
            </div>
        )
    }
    if (imageInfoArray.length === 4) {
        return (
            <div
                className={cx(style.postImageSection, style.fourImage)}
            >
                <Link
                    style={{ backgroundImage: `url(${imageInfoArray[0]?.link})`, backgroundSize: 'cover' }} href={''}>
                </Link>
                <Link
                    style={{ backgroundImage: `url(${imageInfoArray[1]?.link})`, backgroundSize: 'cover' }} href={''}>
                </Link>
                <Link
                    style={{ backgroundImage: `url(${imageInfoArray[2]?.link})`, backgroundSize: 'cover' }} href={''}>
                </Link>
                <Link
                    style={{ backgroundImage: `url(${imageInfoArray[3]?.link})`, backgroundSize: 'cover' }} href={''}>
                </Link>
            </div>
        )
    }

    return null;
}

export default MyPostImage