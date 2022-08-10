export async function getAllPosts() {
  const fetchedPosts = import.meta.globEager('/src/pages/posts/**/*.md');
  const items = await Object.keys(fetchedPosts).map(async (key) => {
    const post = fetchedPosts[key];
    const url = key.replace('../pages/posts/', '/').replace('.md', '/');
    const item = { ...post.frontmatter, url };
    return item;
  });
  return items;
}
