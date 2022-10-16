---
layout: ../../components/layouts/post.astro
title: "Guide to Servarr Alerts"
slug: servarr-notifications
date: 2022/09/26
author: Cain
desc: "Pushover: the easiest way to be notified when your automated *arr setup completes a task."
tags:
  - servarr
img: "/assets/servarr-notifications/thumb.jpg"
offset: center 20%
---

Recently, I began the process of deleting my Discord account. I had been receiving all my Servarr notifications via Discord webhook, so part of this process was to find a proper alert system replacement. I found Pushover, and it's incredible.

For my Servarr, I'm running an HP rack server loaded with Ubuntu Server, hosting Plex. In the \*Arr department, I run [Overseerr](https://overseerr.dev/), [Sonarr](https://sonarr.tv/) and [Radarr](https://radarr.video/). I use Usenet with [NZBGet](https://nzbget.net/) as my downloader, [NZBGeek](https://nzbgeek.info/) as my indexer, and [NewsgroupNinja](https://www.newsgroup.ninja/en) alongside [ViperNews](https://www.vipernews.com/) for my newsgroups. I also have Tautulli for statistics, though I don't use it much. In this guide, I'll be showing you how to add Pushover to your Servarr and configure it to deliver notifications from the \*Arrs.

Before we begin, please note that each Pushover client has a $5 one-time fee, after a 30-day trial. 

In the process of searching for a Discord alert replacement, I looked at quite a few services. I went with Pushover because they've been around for over 10 years and maintenance is still steady. In fact, they're still adding new features, like custom alert sounds or support for the new notification options in iOS. They also aren't going anywhere -- one of their articles even said, **"Many of Pushover’s earliest users are still using it today after paying $4.99 ten years ago, and I hope those users will still be using it in 2032 on their iPhone 26."**

Anyway, let's begin.

## Configuring Pushover

[Click here](https://pushover.net/signup) for the sign-up page. You can also go to pushover.net, click `Login or Signup` and then `create a new account`, but the hyperlink is probably easier. Once you create an account (and verify your email), you'll see the dashboard.

You'll want to save your User Key somewhere, like a password manager. Once that's done, go to the device you want the notifications to be delivered to (like your phone), and download the Pushover app. Log in there, and refresh the Pushover dashboard -- your device should show up there. 

![](/assets/servarr-notifications/image-1.png)

## Enabling Notifications

The other key that you'll need is an API/Application Token. Next to the `Your Applications` header, you'll find a button to create one.

![](/assets/servarr-notifications/image-2.png)

Click that button, and add a name for the applications. The other fields are optional, but I recommend adding an icon for easy recognition in the app. If you're using any of the apps in the screenshot above and you'd like to have icons, I uploaded all my icons to a zip file, [found here](/assets/servarr-notifications/pushover_icons.zip). While it seems Pushover replaces image transparency with a black background, it looks fine with dark mode enabled. 

Once you've created your application, copy the API token/key. Then, open your Servarr software. The UI is going to look different based on what you're using, but generally it'll be easy to find. In Overseerr, there's a `Notifications` tab in settings. In Sonarr and Radarr, you'll find notification settings under Settings > Connect. In Tautulli, it's under Settings > Notification Agents. In NZBGet, [there's a script you'll have to install](https://forum.nzbget.net/viewtopic.php?t=782#p22709). 

![](/assets/servarr-notifications/image-3.png)

In all of these, it'll ask for your User Key and API Key. While they look similar, one identifies your Pushover account and the other identifies the app you're sending notifications from. 

Once finished, be sure to hit the "test" button (unless there isn't one) to ensure everything is working properly. Once you've confirmed that it's working, you're good to go! Notifications will come in whenever something is triggered that you've enabled in the Servarr software. 