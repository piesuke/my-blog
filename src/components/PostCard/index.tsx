import { Box, styled } from "@chakra-ui/react";
import styles from "./index.module.scss"
import Image from 'next/image'

type Props= ({
    className?: string
    title: string
    coverImage: string
    date: string
    tags: string[]
    slug: string
    children?: never
})


const PostCard: React.FC<Props> = ({
    className,
    title,
    coverImage,
    date,
    tags,
    slug,
    children
}) => {
    return(
        <li className={styles.list}>
            <Box as={"a"} href={`/posts/${slug}`}>
                <Box display={"flex"} alignItems={"start"}>
                    <Box mr={"4"}>
                        <Image
                            src={coverImage}
                            alt={"カバー画像"}
                            width={200}
                            height={100}
                        />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}>
                        <h2>{title}</h2>
                        <time className={styles.date} dateTime={date}>{date.replaceAll("-", "/")}</time>
                    </Box>
                </Box>
            </Box>
        </li>
    )
}

export default PostCard;