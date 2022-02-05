type PostOverview = {
    title: string;
    date: string;
    coverImage: string;
    tags: string[];
    isPublic: boolean
}

type MatterData = Omit<PostOverview, "tags"> & {
    tags: string
}
type Post = Omit<PostOverview, 'isPublic'> & {
    content: string;
}