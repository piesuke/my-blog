export type PostOverview = {
  title: string;
  date: string;
  coverImage: string | null;
  tags: string[];
  isPublic: boolean;
  isDraft: boolean;
  slug: string;
  pageId: string;
};

export type Post = Omit<PostOverview, 'isPublic' | 'slug'> & {
  content: string;
};

export type RelatedPostLink = {
  title: string;
  slug: string;
};

export type PreviewAndNextLink = {
  preview:
    | {
        title: string;
        slug: string;
      }
    | { [key: string]: never };
  next:
    | {
        title: string;
        slug: string;
      }
    | { [key: string]: never };
};
