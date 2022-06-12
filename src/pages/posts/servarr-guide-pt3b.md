---
layout: ../../components/layouts/post.astro
title: "Servarr Setup Pt. 3b: Prowlarr/Sonarr/Radarr"
slug: servarr-guide-pt3b
date: 2022-03-05
author: MrMeatBones
desc: "Now that you've decided which indexers to use, Its time to start putting those decisions to use. In this section we're going to set up three programs; Sonarr, Radarr and Prowlarr."
tags:
  - servarr
img: "/images/servarr-guide-pt3b/thumb.jpg"
---

Now that you've decided which indexers to use, Its time to start putting those decisions to use. In this section we're going to set up three programs; Sonarr, Radarr and Prowlarr. Sonarr and Radarr are DVR programs, and Prowlarr is an indexer aggregate. Basically, Sonarr and Radarr will facilitate the acquisition of your media, and Prowlarr will be where you feed them your indexers. Let's get started.

## Installation

First we're going to install all three programs. The order you do this is doesn't matter, but I'm going to do Sonarr first. Click [here](https://sonarr.tv/#download) to download Sonarr, and grab the Windows installer.
![](/images/servarr-guide-pt3b/image-29.png)
Then, click [here](https://radarr.video/#download) to download Radarr, and grab the Windows x64 installer.
![](/images/servarr-guide-pt3b/image-30.png)
Lastly, click [here](https://wiki.servarr.com/prowlarr/installation) to download Prowlarr, and grab the windows x64 installer.
Double click the Sonarr setup exe, and click next. On the next screen, select "install Windows Service" and uncheck the desktop icon if you want. Click Next.

![](/images/servarr-guide-pt3b/image-31.png)
Sonarr will install and open a browser window. You might have to refresh the page a few times for it to show up, but you will see this screen here.
![](/images/servarr-guide-pt3b/image-32.png)
Leave this open and repeat these same steps for Radarr and Prowlarr. If you get an error saying "Epic fail! Access to path /path/to/config.xml is denied" then close the prompt and start the service as an administrator from the start menu.
![](/images/servarr-guide-pt3b/image-33.png)
If done properly, you should see these two screens along with the Sonarr one from earlier
![](/images/servarr-guide-pt3b/image-34.png)
Now onto configuration.

## Configuring Prowlarr

We're going to open the Prowlarr web page, and click on the "add new Indexer" button in the middle of the screen. You'll see a long list of both torrent and NZB sites. Depending on the choices you made in the previous part, your indexer list may look different than mine. For this, we're going to pick a mix. Simply type the name of the site you want into the search bar at the top and it should come up. Select it and you'll see the setup screen for that specific indexer. Each one is a little different but as long as you read you should have no problem setting it up. For Nyaa.si for instance, the only parameter we need is to set the base URL.
![](/images/servarr-guide-pt3b/image-35.png)
For NZBGeek however, we need our API key from the website. This would be in your profile.
![](/images/servarr-guide-pt3b/image-36.png)
Once we've added the indexers we want to use, it should look something like this. You can always add or remove indexers from this page so don't sweat it if you only have public trackers for instance.
![](/images/servarr-guide-pt3b/image-37.png)
Next, we're going to hook these indexers into Sonarr and Radarr. Click on Settings, then apps.
![](/images/servarr-guide-pt3b/image-38.png)
Select the Plus under applications and select Sonarr.
![](/images/servarr-guide-pt3b/image-39.png)
Now, we need a few things. From your address bar, copy the host:ip for both Prowlarr and Sonarr into their respective fields and change "sync level" to "full sync". Then, you're going to open the Sonarr webpage and click settings, then general.
![](/images/servarr-guide-pt3b/image-41.png)
Copy the API key into the correct field and hit test. You should see a green checkmark.
![](/images/servarr-guide-pt3b/image-42.png)
Click save, and follow the same steps for Radarr. You should see both in Prowlarr like this.
![](/images/servarr-guide-pt3b/image-43.png)
After a few minutes, Open both the Sonarr and Radarr pages. Click on settings, then indexers. Our Indexers have populated now.
![](/images/servarr-guide-pt3b/image-44.png)
Now that we have our indexers set up, last step is to set up Sonarr and Radarr.

## Configuring Sonarr/Radarr

Our next step is to set up our downloaders. Depending on your indexers, you'll want either one or two. Since we're using both usenet and torrents, we're going to be using NZBGet and qBitTorrent. If you haven't set either of those up, you can find guides on how to do so [here](/posts/usenet-on-windows/) for NZBGet and [here](/posts/qbittorrent-guide/) for Qbittorrent. In qBitTorrent, you must also enable the WebUI. If you haven't done this yet, then you can open your qBitTorrent and open your settings menu. Then, select WebUI and check the box to enable it. Don't worry about changing anything other than the password, we won't be opening this up to the internet so security doesn't matter for it.
![](/images/servarr-guide-pt3b/image-47.png)
As we've said before, Radarr and Sonarr are very similar. So the configuration we're going to do is the exact same for both. We're going to use Sonarr as the example but the configuration is the same for Radarr as well. Let's get started.

Navigate to the Sonarr page, and click settings, then download clients. Click the plus icon, then select NZBGet.
![](/images/servarr-guide-pt3b/image-45.png)
Fill in the correct information, using the login info you set up in the previous guide.
![](/images/servarr-guide-pt3b/image-46.png)
Click test, and you should see a green check mark. Repeat this process, but select qBitTorrent this time. If all goes well, you should see this afterwards.
![](/images/servarr-guide-pt3b/image-48.png)
Repeat this process for Radarr.

The last two steps are entirely subjective. The first one is quality settings, and the second is quality profiles. I will post my quality settings, and I will tell you that I just use the "any" quality profile. What you do is entirely up to you.
![](/images/servarr-guide-pt3b/image-49.png)
![](/images/servarr-guide-pt3b/image-50.png)
After you've set up your quality settings, the only thing left to do is grab content! Go to the Sonarr home screen, and  click add new series. Search for whatever you want, and select it. You should see a screen like this.
![](/images/servarr-guide-pt3b/image-51.png)
Select the quality profile you want, then its time to set the root folder. We want to choose the same folder we set back in part one, the same folder that Plex is viewing for movies. For us its D:\Plex\Movies. Yours may vary. From there, simply hit add movie and within a few minutes your new content should be sitting on your Plex server. Repeat the same steps in Sonarr, but point the root folder to your TV folder. And you're all done!
