---
layout: ../../components/layouts/post.astro
title: "Servarr Setup Pt. 0: Choosing Your Software"
slug: servarr-guide-pt0
date: 2022/03/13
author: MrMeatBones
desc: "So you're thinking of starting a media server, but you're not sure where to start. Truth is, there's half a dozen different ways to do it and they end up functionally the same."
tags:
  - servarr
img: "/assets/servarr-guide-pt0/thumb.jpg"
---

So you're thinking of starting a media server, but you're not sure where to start. Truth is, there's half a dozen different ways to do it and they end up functionally the same. From the streaming frontend to the operating system itself, we'll be going over some of the most popular choices and giving you a full how-to on each of them.

## Choosing your OS

The first choice might also be the most obvious for users, Which operating system will your machine run on? For users simply planning to use their daily machine as the media server, Windows is likely the default choice. For those planning to build their own machines, using a flavor of Linux, such as Ubuntu Server or Unraid, is heavily encouraged. Lets go over the pros and cons of each choice.

### Windows
#### PROS
Windows might feel like the obvious choice for a lot of users starting their journey here, and it's easy to see why. There's a [49.2%](https://www.zdnet.com/article/todays-most-popular-operating-systems/) chance you're on a Windows machine while reading this article, which presents its largest advantage: there's not much of a learning curve. It's most likely to be the operating system that people are familiar with and in my experience, its the easiest OS to use when installing everything needed for your media server. One other massive benefit is not needing a dedicated machine to run the server once its set up. And while that's technically true with other options as well, converting your daily driver machine to Linux just to have a media server is a non-option for most people.

#### CONS
When running Plex on your daily driver PC, however, it's not all sunshine and rainbows; there are some limitations. The biggest two are that:

1. your machine has to be online whenever you want to watch content
2. you could run into some rather unpleasant slowdowns, depending on what your machine is doing

But if you're only planning to stream content in your own home and not share with anyone outside of it, then neither of these cons will matter to you too much. But it should be noted that running a Windows PC 24/7 without restarts isn't a great idea, so I'd recommend??scheduling restarts every day or so.

### Ubuntu Server Pros

For the more tech inclined, Linux might be the compelling option. There are countless flavors of it, but the one we're going to be covering in this comparison is Ubuntu Server. Its a headless OS, meaning no GUI is rendered to waste resources. Like all Linux, **CLI is king**. Its powerful, and incredibly lightweight. For reference my Windows PC at idle is using around 4GB of ram whereas my server machine is using 2GB. That difference can matter a ton depending on what hardware your machine is running. Also, being a server OS means that its incredibly stable and meant to run forever 24/7. So if Linux is so wonderful what's the catch?

### Ubuntu Server Cons

There are a few large drawbacks. The biggest one, being the fact that it's Linux. Personally I love Linux and if I could daily drive it for gaming I would. But the truth is, Linux in *every* flavor is the lowest used operating system in the consumer space. Its also the hardest to learn. Even harder still, is that fact that Ubuntu Server has no GUI, meaning you **have** to use the command line. Don't get me wrong, its entirely possible to learn and a fantastic thing to know, but it definitely has a learning curve. Setting up my first Plex server on Linux was my first foray into it so when I tell you its possible, I promise its possible. The other major downside to this approach is that it *requires* a dedicated machine. If you an old laptop/gaming pc lying around or you wanna search for a [used machine](https://www.hardware-corner.net/refurbished-desktop-computers/), then awesome! Or if you wanna go full tilt and build a server rack, even better. All absolutely viable options. But a "main" machine and a server machine are required.

Once you've decided which OS you want to use, your next (and last) major choice is which video streaming frontend would you like to use.

## Choosing your Software

The 3 main ones are Plex, Emby and Jellyfin. Here is an at-a-glance comparison. Next we'll take a look at what this chart actually means.

| **Features**         | **Plex** | **Emby** | **Jellyfin** |
|----------------------|:--------:|:--------:|:------------:|
| Open Source          |    ???     |    ???     |      ???       |
| Hardware Transcoding |    ????    |    ????    |      ???       |
| Live TV/DVR          |    ????    |    ????    |      ???       |
| Multiple Users       |    ???     |    ???     |      ???       |
| Offline Viewing      |    ????    |    ????    |      ???       |
| Podcasts             |    ???     |    ???     |   w/Plugin   |
| Server Stats         |    ????    |    ???     |   w/Plugin   |

## Jellyfin

The most obvious difference at a glance is that Jellyfin has zero paid options. It offers everything right up front free of charge. It's also open source and appears to keep in line with the other two without losing features. So why ever choose another option? Well the answer I've found is that, much like Linux, Jellyfin comes with a learning curve. It's not massive, but if you're trying to onboard less tech-savvy people like family and friends, you might prefer Plex.

## Plex

Plex is by far the most popular choice out of the three, with its ease of setup and use being the main advantage. While it has the most paid features, they can either be entirely ignored depending on your use case or bypassed with better software that we will show you in this guide. But that's not to say there's no reason to buy it! Lets go over the paid features and explain when you may want them.

### Hardware transcoding

When at all possible, transcoding is something we want to avoid. Its the automatic process of converting your media into a different, and usually lower quality, format. This can happen for a few reasons, but the most common ones are that a) your internet is not fast enough to stream the full original file, something we're going to be basically eliminating later in this guide, or b) the device you are using simply doesn't support that file type presented to it. While less common, there is unfortunately nothing we can do about scenario b. And scenario a only gets more common if you intend to stream outside your home. The reality is, at some point you will need to transcode something you're viewing. With that, there are two types of transcoding, software and hardware. Software is free on Plex and uses your CPU to transcode the media. Hardware transcoding is paid and requires a GPU, either integrated or discreet. Depending on how often you'll be transcoding media, this can make either very little different or a huge difference. I share my media server with friends and family, and if I only had software transcoding, my machine would be cooked. This is because software transcoding is incredibly inefficient compared to hardware transcoding. As an anecdote, my media server has an i5-6500 in it. It can software transcode ~3 streams without starting to struggle. By contrast, when switching to hardware transcoding, I've had up to 6 streams going at once and the machine didn't even seem to notice, and this is all with the integrated graphics chip.

###????Apps

The other "big thing" about Plex, is that the mobile apps are locked behind a paywall. You can subscribe to Plex Pass (for a monthly, yearly or lifetime fee), or pay $5 for the app on one platform. Their desktop and TV apps are free though!

If you're planning to use Plex but aren't planning to use it on your phone or outside your home and share with users, there is very little reason to purchase the Plex Pass. I would recommend holding off on buying the Plex Pass even if you are planning to share it with others. It's worth the money if you need it, but its best to find out if you **do** need it first.

---

If you would like to use Plex on Windows, follow this link [here](/posts/servarr-guide-pt1/).  
Guides to Jellyfin on Windows and Plex/Jellyfin on Ubuntu are coming soon??????.