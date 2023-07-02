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
    title: string
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