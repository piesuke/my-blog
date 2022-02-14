import { Link } from "@chakra-ui/react"

type Props = ({
    className?: string
    relatedPostLink: RelatedPostLink
})

const RelatedPostLink: React.FC<Props> = ({
    className,
    relatedPostLink,
}) => {
    return(
        <>
            <Link color={"#0bd"} href={`/posts/${relatedPostLink.slug}`}>{relatedPostLink.title}</Link>
        </>
    )
}

export default RelatedPostLink;