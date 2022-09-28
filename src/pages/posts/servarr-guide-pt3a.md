---
layout: ../../components/layouts/post.astro
title: "Servarr Setup Pt. 3a: Downloaders"
slug: servarr-guide-pt3a
date: 2022/03/02
author: MrMeatBones
desc: "Now that we have Plex or Jellyfin set up for us to view content, Lets go ahead and start getting some content to watch! This part of the guide will cover setting up our indexers, which Sonarr and Radarr will use to find content for us."
tags:
  - servarr
img: "/images/servarr-guide-pt3a/thumb.jpg"
---

Now that we have Plex or Jellyfin set up for us to view content, Lets go ahead and start getting some content to watch! Before we download anything, we have another decision to make: which downloader type we're going to use. The most common answer for most people will be torrents, but there is also the option to use Usenet. We'll go over the pros and cons of both briefly.

## Torrent Pros

If you're here, you've most likely at least heard of torrenting. The P2P (peer-2-peer) protocol is incredibly popular for media acquisition and for good reason. It's relatively fast, the content is nearly impossible to take down, and incredibly easy to set up. Its also free and relatively risk-free as long as you're behind a VPN.

## Torrent Cons

As with everything however, there are drawbacks. Unprotected torrenting can broadcast your IP to copyright trolls resulting in annoying letters (or after repeated violations, the cancellation of your internet service), and the speed/availability is reliant on other users seeding the content which means depending on the content you're looking for, you might be out of luck. In the most extreme cases, users have seen legal action against them for torrenting. But this is **exceptionally** rare and unless you're planning to build your own Netflix based on torrenting, you shouldn't worry. We only bring it up as to give you all the details.

## Usenet Pros

Usenet, while around for far longer, is a far less known technology nowadays. If you'd like to learn more about it you can [here](https://en.wikipedia.org/wiki/Usenet), but for our purposes all you need to know is that its essentially a DDL, or direct download service. In my experience, it is far faster than torrents, easily maxing out our download speeds and the speed rarely fluctuates as it is not reliant on a set amount of P2P connections. There is also zero chance of any annoying letters from copyright trolls as long as you are using SSL, VPN or not. There are zero reported cases of users having any legal action against them at the time of writing.

## Usenet Cons

First the good, now the bad. First off, Usenet is a paid service. Yes there are technically free services, but they're crap and not worth using. Second is that Usenet is a more involved setup. Certainly not any harder than the rest of this guide, but it is worth mentioning. Also, it is much more common for content to be taken down due to DMCA strikes. That honestly shouldn't affect our overall ability to acquire media too much, as there are many many duplicate uploads and the client will automatically pull a new one once the old one fails, but it can be a bit before a valid download is found depending on how many DMCA strikes there are. In my experience, the only content we have ever had trouble finding on Usenet is old reality tv shows, and even then, you're more likely to find them on Usenet than torrents.

## Conclusion

Use whatever your heart desires! If you aren't as comfortable with torrenting or live in a harsh copyright country, then you'll want to use Usenet -- as long as you can afford it. Otherwise, torrenting will work great! You can always set up both and see which one works best for you.

[Click here](/posts/usenet-guide) for a guide on Usenet.\
[Click here](/posts/qbittorrent-guide) for a guide on qBitTorrent, a torrent client.