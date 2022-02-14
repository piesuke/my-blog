type PostOverview = {
    title: string;
    date: string;
    coverImage: string;
    tags: string[];
    isPublic: boolean
    slug: string
}

type MatterData = Omit<PostOverview, "tags"> & {
    tags: string
}
type Post = Omit<PostOverview, 'isPublic', "slug"> & {
    content: string;
}

type RelatedPostLink = {
    title: string;
    slug: string;
}

type PreviewAndNextLink = {
    "preview":{
        title: string;
        slug: string;
    } | {[key: string]: never},
    "next":{
        title: string;
        slug: string;
    } | {[key: string]: never},
}