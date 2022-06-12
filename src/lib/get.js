export async function get() {
  let posts = await import.meta.globEager("/src/pages/posts/**/*.md");
  let ary = [];
  for (let postkey in posts) {
    if (posts[postkey].frontmatter.published && posts[postkey].frontmatter.title) {
      let post = posts[postkey];
      let awaitedPost = await post.default();
      ary.push({
        title: post.frontmatter.title,
        summary: post.frontmatter.summary,
        tags: post.frontmatter.tags.join(" "),
        appCode: "roc",
        published: post.frontmatter.published,
        slug: post.url,
        image: post.frontmatter.og.basic.image,
        content: awaitedPost.metadata.source,
      });
    }
  }
  let body = { entries: ary };
  return {
    body: JSON.stringify(body, false, 2),
  };
}
