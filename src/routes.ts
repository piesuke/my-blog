export const routes = {
    top: '/',
    tags: (tagName: string): string => `/tags/${tagName}`,
    posts: (slug: string): string => `posts/${slug}`,
}