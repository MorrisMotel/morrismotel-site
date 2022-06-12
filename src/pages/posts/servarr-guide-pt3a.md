---
layout: ../../components/layouts/post.astro
title: "Servarr Setup Pt. 3a: Choosing Your Indexers"
slug: servarr-guide-pt3a
date: 2022-03-02
author: MrMeatBones
desc: "Now that we have Plex or Jellyfin set up for us to view content, Lets go ahead and start getting some content to watch! This part of the guide will cover setting up our indexers, which Sonarr and Radarr will use to find content for us."
tags:
  - servarr
img: "/images/servarr-guide-pt3a/thumb.jpg"
---

Now that we have Plex or Jellyfin set up for us to view content, Lets go ahead and start getting some content to watch! This part of the guide will cover setting up our indexers, which Sonarr and Radarr will use to find content for us.

## Choosing your Indexers

Before we download anything, we have another decision to make; which indexer type we're actually going to use. The most obvious answer for most people will be torrents, but there is also the option to use Usenet. We'll go over the pros and cons of both briefly.

## Torrent Pros

If you're here, you've most likely at least heard of torrenting. The p2p protocol is incredibly popular for media acquisition and for good reason. Its relatively fast, the content is nearly impossible to take down, and incredibly easy to set up. Its also free and as long as you're behind a VPN, it's almost entirely risk free.

## Torrent Cons

As with everything however, there are drawbacks. Unprotected torrenting can broadcast your IP to copyright trolls resulting in annoying letters, and the speed/availability is reliant on other users seeding the content which means depending on the content you're looking for, you might be out of luck. In the most extreme cases, users have seen legal action against them for torrenting. But this is *exceptionally *rare and unless you're planning to build your own Netflix based on torrenting, you shouldn't worry. We only bring it up as to give you all the details.

## Usenet Pros

UseNet, while around for far longer, is a far less known technology nowadays. If you'd like to learn more about it you can [here](https://en.wikipedia.org/wiki/Usenet), but for our purposes all you need to know is that its essentially a DDL, or direct download service. Anecdotally, it is far faster than torrents, easily maxing out our download speeds and the speed rarely fluctuates as it is not reliant on a set amount of p2p connections. There is also zero chance of any annoying letters from copyright trolls as long as you are using ssl, VPN or not. There are zero reported cases of users having any legal action against them at the time of writing.

## Usenet Cons

First the good, now the bad. First con, Usenet is a paid service. Yes there are technically free services, but they're crap and not worth using. Second con is that Usenet is a more involved setup. Certainly not any harder than the rest of this guide, but it is worth mentioning. Also, it is much more common for content to be taken down due to DMCA strikes. That honestly shouldn't affect our overall ability to acquire media too much, as there are many many duplicate uploads and the client will automatically pull a new one once the old one fails, but it can be a bit before a valid download is found depending on how many DMCA strikes there are. Anecdotally, the only content we have ever had trouble finding on Usenet is old reality tv shows, and those aren't easy to find on torrents either.

## Conclusion

Use whatever your heart desires! If you are more comfortable with torrenting and don't want to pay a cent, or you just want to cut out any unnecessary parts of this guide, then  sticking with torrenting is more than okay. If you want the fastest possible downloads and don't mind putting up some cash, then Usenet is for you. You can always set up both (as we do) and see which is more useful for you.
