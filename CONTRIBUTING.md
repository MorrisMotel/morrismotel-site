First off, you're going to need an account on GitLab. If you don't have one already, go ahead and create one.  
Next, make a fork of the repository. On the home page for the project, there's a fork button next to the star button in the top right.  
In that fork, you can make any edits to the code (including posts) that you'd like, without modifying the live website.  
Once you're done, create a merge request. Cain will then review the modifications, make corrections, and/or merge your edits to the main repository.

For code contributions, you probably know what you're doing so... go at it.  
For ARTICLE contributions, here's a guide...

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

Below that, you can begin writing your article. You can attach images by uploading a picture to the corresponding `images` folder that you created earlier, and then simply write `![](/images/your-post-title/image.jpg)` and the image will be added to the post. It won't show up in the GitLab preview, but it'll show up on the site, I promise!

If you have any other questions, feel free to reach out via Matrix, Discord, or email -- all of which are available in the footer of our site.

Thanks for your interest in contributing!