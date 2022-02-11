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

  const postsOverViewList = allPostsSlug.map(postSlug => {
    const slug = postSlug.replace(".md","");
    const markdownResult = matterPost(slug)
    const postOverView: MatterData = markdownResult.data as MatterData;
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
        isPublic,
        slug
    }
  }).filter(result => result.isPublic).sort((a,b) => {
    return a.date < b.date ? 1 : -1
  })
  return postsOverViewList;
}

const getPostsStaticPagePaths = (): { params: { slug: string } }[] => {
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
    return {
        title,
        tags,
        date,
        coverImage,
        content,
        slug
    }
}

export {getAllPosts, getPost, getPostsStaticPagePaths}