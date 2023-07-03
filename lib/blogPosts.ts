import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), 'posts');


export const getPostsIds = () => {
    return readdirSync(postsDirectory).map(p => p.replace(/\.mdx$/, ''));
}

const getFileContent = (path: string) => {
    let fileContent: string | undefined;

    try {
        fileContent = readFileSync(path, 'utf8')
    } catch (_) { } finally {
        return fileContent;
    }
}


type frontMatterTypes = {
    title: string,
    date: string
}

export const getPostById = (slug: string) => {
    const fullPath = join(postsDirectory, `${slug}.mdx`);

    const fileContent = getFileContent(fullPath);
    if (!fileContent) return;

    const { data, content } = matter(fileContent);


    return {
        data: data as frontMatterTypes,
        content
    }
}

export const getAllPosts = () => {
    const ids = getPostsIds();
    const posts = ids.map(id => ({ ...getPostById(id)!, href: id })).sort((a, b) => a.data.date > b.data.date ? -1 : 1)

    return posts;
}

export const dateToString = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });
}