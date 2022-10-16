export async function getAllPosts(archived) {
  const fetchedPosts = import.meta.globEager('/src/pages/posts/**/*.md');
  const items = await Object.keys(fetchedPosts).map(async (key) => {
    const post = fetchedPosts[key];
    const url = key.replace('../pages/posts/', '/').replace('.md', '/');
    const item = { ...post.frontmatter, url };
    return item;
  });
  if (archived) return items;
  return items.filter((item) => !item.archived);
}
