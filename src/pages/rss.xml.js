import rss from '@astrojs/rss';
import { getAllPosts } from '../lib/posts';
const posts = await getAllPosts();

export const get = () =>
  rss({
    title: 'Morris Motel',
    description: 'Sail the Seven Seas.',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.title,
      author: post.author,
      description: post.desc,
      pubDate: post.date,
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/stylesheets/rss-style.xsl',
  });
