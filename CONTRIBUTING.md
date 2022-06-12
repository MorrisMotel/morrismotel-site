If you've never written a post for Morris Motel, you can become an author by adding your information to the `authors.json` file, and then write a post. 
The format for the `authors.json` is as follows:
```json
"Authorname": {
      "name": "Authorname",
      "image": "/src/data/authors/authorname.jpeg",
      "desc": "A brief description of yourself."
    }
```
Make sure to add a comma after the last author in the file before you add your own, or else it'll produce an error.
Then, write a post. 

How do you write a post, you ask?

Navigate to [this link](https://gitlab.com/morrismotel/morrismotel-site/-/new/main/src%2Fpages%2Fposts) to create a new post file. 
At the top, insert this text:
```yaml
---
layout: ../../components/layouts/post.astro
title: "YOUR POST TITLE"
slug: your-post-title
date: YYYY-MM-DD
author: "AUTHOR"
desc: "DESCRIPTION"
img: "/images/your-post-title/thumb.jpg"
tags:
  - TAG-ONE
  - TAG-TWO
  - ETC
---
```

Of course, replace each of those with the information that fits your post.  Do not modify the `layout` line, though. Slug is the url suffix, like this... `morrismotel.com/posts/the-slug-goes-here`. The `img` property is your post thumbnail. Your post **must** have a thumbnail. You can add one by uploading an image to the `images` directory, under the corresponding folder -- if it's a new post, you'll have to create a new folder. The folder name under `images` MUST match the post slug. For example, if your post is entitled "Activate Windows for Free," and has the slug "activate-windows-free," then your images subfolder will be `/images/activate-windows-free/thumb.jpg`. Finally, the tags property is a list, which means you can add multiple tags, but the vast majority of the time you're going to want to keep this to one tag, so it doesn't show up twice on the home page. 
