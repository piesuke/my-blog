import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import markdownToHtml from './markdownToHtml'

const postsDirectory = join(process.cwd(), 'src/_posts')
const  getPostSlugs = () =>  {
    return fs.readdirSync(postsDirectory)
}

const getAllPosts = (): PostOverview[] => {
  const allPostsSlug = getPostSlugs();

  allPostsSlug.map(postSlug => {
    const markdownResult = matterPost(postSlug)
  })
}

const getPostsPagePaths = (): { params: { slug: string } }[] => {
    const dirNames = getPostSlugs()
    return dirNames.map(dirName => ({
      params: {
        slug: dirName.replace(".md",""),
      },
    }))
  }

const matterPost = (slug: string): matter.GrayMatterFile<string> => {
    const fullPath = join(postsDirectory, `${slug}.md`)
    const postMarkdown = fs.readFileSync(fullPath, 'utf8')
    return matter(postMarkdown)
}

const getPost = async (slug: string): Promise<Post> => {
    const markdownResult = matterPost(slug)
    const postOverView: MatterData = markdownResult.data as MatterData;
    const content = await markdownToHtml(markdownResult.content)
    const title = postOverView.title
    const tags = postOverView.tags.split(',')
    const date = JSON.parse(JSON.stringify(postOverView.date));
    const coverImage = postOverView.coverImage
    const isPublic = postOverView.isPublic
    return {
        title,
        tags,
        date,
        coverImage,
        content
    }
}

export {getAllPosts, getPost, getPostsPagePaths}