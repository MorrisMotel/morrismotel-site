---
layout: ../../components/layouts/post.astro
title: "Servarr Setup Pt. 1: Plex"
slug: servarr-guide-pt1
date: 2022-02-21
author: MrMeatBones
desc: "So you're ready to take the plunge and build an automated media server? Fantastic! By the end of this, you will have the following: a fully automated media search/download stack for movies, tv and music as well as the ability to stream it all from your home pc to any device you own using Plex."
img: "/images/servarr-guide-pt1/thumb.jpg"
tags:
  - servarr
---

## Setting up Servarr on Windows

So you're ready to take the plunge and build an automated media server? Fantastic! This guide will take you through every required step, as well as some optional steps that I personally find to be quite useful. By the end of this, you will have the following: a fully automated media search/download stack for movies, tv and music as well as the ability to stream it all from your home pc to any device you own using Plex. Parts of this guide will be objective fact, and some will be subjective, such as when we get to quality profiles. I will denote what is subjective when we get there.

Some may look at this and be immediately disgusted that we’re using Plex instead of Jellyfin. And to those people I would simply say, click this link here. We have a Jellyfin side to this guide as well! Ain't that great.

The requirements for this guide are pretty basic and are as follows:

1. A Windows 7/10/11 PC, either your main pc or a spare
2. An internet connection (duh)
3. An understanding of how to port forward (Required for streaming outside of home)
4. An understanding of how to use torrents if using torrents
5. Relative confidence with the Windows platform

Windows 7 is technically supported, but it is STRONGLY recommended to upgrade to windows 10 before starting this.

With that out of the way, let’s begin!

## Installing Plex Media Server/Player

First step is to create a plex account then install Plex as a media server, and the player if you plan to watch content from the same machine. Do **_not_** use the Plex web player if at all possible, it's total crap and we've had nothing but issues with it.

We want to click this link [here](https://www.plex.tv/media-server-downloads/#plex-media-server) and select the latest PMS build for windows. Download and install that.

![](/images/servarr-guide-pt1/image0.png)

While that is downloading and installing, go to the top of the page and click sign up, then complete sign up.

If you are planning to watch content on the same machine you’re installing all this one, click this link [here](https://www.plex.tv/media-server-downloads/#plex-app) and download “Plex for Windows”. Run and install that. Sign into the account you made earlier after the install is done.

Once PMS is installed, click Launch. It will open up a browser window. Sign in to your account and begin configuration. First, name your server, then make sure you check “Allow me to access my media outside my home”. Click Next. It'll think for a bit then bring you to this screen.
![](/images/servarr-guide-pt1/image0-2.png)
This is where you’re going to create your libraries. Click Add Library and select the media type you want. In this guide we’re adding TV, Music, and Movies so we’ll select TV first.
![](/images/servarr-guide-pt1/image0-3.png)
Name the library if you want then click next.
![](/images/servarr-guide-pt1/image0-4.png)
Now, open file explorer and create the actual folders where you’re going to store the media. Ours sit under D:\Plex but they can be wherever we want.

![](/images/servarr-guide-pt1/image0-5.png)

Next go back into your web browser and select “Browse For Media Folder”. Navigate to the correct folder and select it then select add folder.

![](/images/servarr-guide-pt1/image0-6.png)

Select “add” then select “add library”. Your screen will look like this.

![](/images/servarr-guide-pt1/image0-7.png)

Repeat the steps above for Movies and Music, making sure to select the correct media type and folder. At the end it should look like this. If it does, select next, then finish setup.
![](/images/servarr-guide-pt1/image0-8.png)

Click “Next” on the following pages until you reach a screen that looks like this.
![](/images/servarr-guide-pt1/image0-9.png)
The first thing you’ll notice is a bunch of content on the home page that isn’t yours. Plex has a bunch of add supported stuff, which (in my opinion) sucks. If you want to only show what you add to the server, simply click More > at the bottom of the sidebar then the pin icons underneath the Plex Categories to unpin them from your home page. Do the reverse for folders in your server name to pin those to the homepage.
![](/images/servarr-guide-pt1/image0-10.png)
Now your homepage will be empty with your folders on the left hand side.

![](/images/servarr-guide-pt1/image0-11.png)

Now that we have a base for media, let's move onto filling it with media.
