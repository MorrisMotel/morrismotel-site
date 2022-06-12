---
layout: ../../components/layouts/post.astro
title: "Setting Up Usenet on Windows"
slug: usenet-on-windows
date: 2022-02-28
author: MrMeatBones
desc: "In this guide we're going to explain how to set up Usenet. If you do not know what Usenet is, you can learn more about it here but for our purposes all you need to know is that its essentially a DDL, or direct download service."
img: "/images/usenet-on-windows/thumb.jpg"
imgWidth: 800
imgHeight: 500
tags:
  - general-piracy
---

In this guide we're going to explain how to set up Usenet. If you do not know what Usenet is, you can learn more about it [here](https://en.wikipedia.org/wiki/Usenet) but for our purposes all you need to know is that its essentially a DDL, or direct download service. What you need to know about setting up this service is that setup is a little in depth, although this guide will walk you through everything. Its also has a monetary cost, although the amount depends on how much you want to put into it. With that all being said, lets begin!

## Step One: Choosing a Provider

Step one will be to find a Usenet provider. There are quite a few of these, and they're all relatively the same on the surface. The differences between them are beyond the scope of this guide, but if you wanna really want to learn the folks over at [r/Usenet](https://www.reddit.com/r/usenet/) will be glad to give you hand. All we care about is purchasing one. Essentially what we're purchasing is access to the network, and because of this we can go with the cheapest deal. [This graph here](https://www.reddit.com/r/usenet/wiki/providerdeals/) shows up to date deals on the most popular Usenet providers, and its updated by the r/Usenet community. Use it to find the best deal in the SUBSCRIPTIONS section, then sign up and come back here. Do not use the BLOCK section for this. Blocks are outside the scope of this guide. Personally, I use [Newsgroup Ninja](https://www.newsgroup.ninja/en) but that was simply because they were the best deal at the time. Your mileage my vary.

## Step Two: Choosing Indexers

If providers give us access to the network, then indexers provide us the decryption keys needed to read what's on the network. Essentially these sites, called NZB indexers, act as a key repository, where you search for a specific files decryption key. Its not quite like that, but its a decent analogy for why we need them.

Like torrent websites, there are NZB indexers where anyone can join, and NZB indexers you must be invited to. The most popular ones that are open sign up are [https://nzbgeek.info/](https://nzbgeek.info/) and [https://nzbplanet.net/](https://nzbplanet.net/). While they both cost, they both offer affordable lifetime plans and they have deals around Black Friday/midyear that drives the cost down further. If you can, I would join both of them. For the longest time I only used these two and had next to no issue finding content.

## Step Three: Setting Up your Downloader

So we have access to the network and the ability to read the network, lets get a way to pull data out of the network. This part (thankfully) is free, but is also the "hardest".

There are a few NZB downloaders, with the main two being [NZBGet](https://nzbget.net/download) and [SabNZB](https://sabnzbd.org/). For the purpose of this guide, we will be using NZBGet, but setup is fairly similar between the two of them if you would want to switch to SabNZB in the future. Follow the provided link for NZBGet, and download the lastest stable release for windows, which at the time of writing is 21.1.
![](/images/usenet-on-windows/image-20.png)
Open the setup.exe then click next, then I agree.
![](/images/usenet-on-windows/image-24.png)![](/images/usenet-on-windows/image-25.png)
The next screen we see will ask us to choose the install path for NZBGet. This can be wherever we want, so we're going to just leave this as is for now. Click install once you've picked your path.

The next screen we see should tell us that NZBGet has been installed and give us three tick boxes. We want to make sure that "Run NZBGet" and "Associate with NZB Files" is ticked. Then click finish.
![](/images/usenet-on-windows/image-26.png)
NZBGet's web UI should now open in your browser, but if it doesn't navigate to [http://127.0.0.1:6789/](http://127.0.0.1:6789/) and you should be greeted with this screen. If it asks for a login, the default username is `nzbget` and the password is `tegbzn6789`.
![](/images/usenet-on-windows/image-29.png)
Now that we have NZBGet installed, its time to configure the program. Click settings at the top of the screen then **paths **in the sidebar.
![](/images/usenet-on-windows/image-30.png)
The only thing we should change in this screen is the **MainDir** section. We *could* leave it as the default but generally its better to move it out of the Program Data folder, and honestly off of the C drive entirely if we can. For this tutorial we're going to move it to D:\Downloads\NZB. Next we move on to the **News-Servers** section by clicking on it in the side bar.
![](/images/usenet-on-windows/image-31.png)

Here is where we're going to enter our credentials we made in step one for the Usenet server provider. Fill in the details for Server1, making sure that it says "yes" is clicked for the active field. Give it a name, and leave everything else blank then scroll down to the **host** field. Here is where the hostname and login details go. You'll find the hostname in your profile on the website of whatever Usenet provider you're using. For example this is what it looks like on Ninja.
![](/images/usenet-on-windows/Screenshot_1-3.png)
With that in mind, our information in NZBGet should look like this.
![](/images/usenet-on-windows/Screenshot_1-4.png)
Next we're going to go to the **security** section on the sidebar
![](/images/usenet-on-windows/image-32.png)
The only fields that are important here are `ControlUsername` and `ControlPassword` fields. Set these to whatever you like, then move onto the Categories section on the sidebar.

![](/images/usenet-on-windows/Screenshot_1-5.png)
This Section isn't inherently useful on its own, but it is if we're going to use Sonarr and Radarr to manage our downloads. Change the name of Category 1 to Movies and the name of Category 2 to TV. After this, scroll to the bottom of the page and click "save all changes" then "Reload". NZBGet should be all set up now.

![](/images/usenet-on-windows/Screenshot_2-3.png)
There is plenty of other customization that can be done in NZBGet to speed up our downloading, but that customization is machine specific and beyond the scope of this guide. I'd recommend following the [guide](https://nzbget.net/performance-tips) put out by NZBGet themselves to tweak your settings.

Now, we can either add NZB's manually to NZBGet by downloading them off your indexers, or we can use Sonarr and Radarr to have it all be done for us. Let's explore how to do that now.
