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