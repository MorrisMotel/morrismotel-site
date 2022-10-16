---
layout: ../../components/layouts/post.astro
title: "Guide to qBitTorrent"
slug: qbittorrent-guide
date: 2022/02/22
author: EgoDeer
desc: "qBitTorrent is one of the most popular torrent downloaders. But how do you use it properly?"
img: "/assets/qbittorrent-guide/thumb.png"
imgWidth: 800
imgHeight: 500
tags:
  - general-piracy
---

## Table of Contents:
- [Why use qBitTorrent?](#why-use-qbittorrent)
- [Installation Process](#installation-process)
- [Setting qBitTorrent Up](#setting-qbittorrent-up)
- [How to Download a Torrent File](#how-to-download-a-torrent-file)
- [How to Seed a Torrent File](#how-to-seed-a-torrent-file)
- [How to Change the UI Theme](#how-to-change-the-ui-theme)
- [How To Add Plug-ins to qBitTorrent](#how-to-add-plug-ins-to-qbittorrent)

## Why use qBitTorrent?

First of all: Why use qBitTorrent, instead of µTorrent or any other torrent manager?  
The answer is simple: qBitTorrent is one of the most reliable options out there. It is completely **free**, and does not have any ads or malware.


## Installation Process

Commencing with the guide, the first thing we need to do is [download](https://www.qbittorrent.org/download.php) the latest version at the official site of qBitTorrent. We select our OS, and it will redirect us to the next page.

![](/assets/qbittorrent-guide/downloadqb-1.png)

In my case, I select Windows.
In this page we can select the version depending our OS architecture.

![](/assets/qbittorrent-guide/Downloadqb-2.png)

Just click in the version. In my case, Windows x64.
Once we have the installer, we select our language, click on next, accept the terms of the License Agreement, and click on next again.

Up here, we can select the file association and well as other options. I always suggest to leave the last four options this way so we avoid some headaches later...

![](/assets/qbittorrent-guide/image-9.png)

Then, click on next, and select the installation path and it will begin to install qBittorent.

![](/assets/qbittorrent-guide/image-10.png)


## Setting qBitTorrent Up

After the installation process, we can begin setting up our qBitTorrent so it can run at 100% when we start to download/seed our torrents. For this, we go to the options panel.

![](/assets/qbittorrent-guide/qBitTorrentUI.png)

Here we go to the connection. And select these options if they are disabled or changed.

![](/assets/qbittorrent-guide/qBitTorrent-Options.png)

In the "port used for incoming connections" option I recommend to enter a number between 45000 and 52000. Now, the next step is to set up our downloads. So we need to go to the BitTorrent section, and mark this option. These options will depend on how many downloads/uploads you want actively.

![](/assets/qbittorrent-guide/qBitTorrent-Options-2.png)

## How to Download a Torrent File

At the moment we finish our configuration, we begin the easiest part: downloading a torrent. For this, we need the torrent file that we want to download (of course). I will be downloading Night of the Living Dead -- but be careful with the clone sites!

![](/assets/qbittorrent-guide/qBitTorrent-Download-1.png)

Once we have our torrent, just click it. And because of we mark the file association, it will immediately recognize it. In the left section of this window, we can select the download path, and in the right section, we can see the contents of the torrent file and select what we want to download. Then we select OK, and it will start to download the torrent file.

![](/assets/qbittorrent-guide/qBitTorrent-Download-2-1.png)

Now sometimes, the torrent will not initiate or download. This may be because it doesn't have any seeders or it has too many leechers. That's why we always need to check out the ratio of seeders to leechers that the torrent has.

![](/assets/qbittorrent-guide/qBitTorrent-Download-3.png)

## How to Seed a Torrent File

Sometimes, there will be some trackers that requires to seed a torrent before or after downloading one. qBitTorrent activates this function right after we finish the torrent, but what if we want to seed a file that we don't have in qBitTorrent?

The zero step is having the downloaded files in our PC. Then, we need to find the torrent download file we want to seed. I will be seeding Night of the Living Dead. Now, we open the torrent file and we are going to look at the **root folder** (not the file folder). Notice that you will need all the same files and folder name. Otherwise, it won't recognize the torrent as downloaded. 

It will begin to check the files and re-download the damaged blocks if there's one. After the summary check, it will be appearing as "seeding".

![](/assets/qbittorrent-guide/qBitTorrent-seed-2.png)

## How to Change the UI Theme

First thing we need to do is download a compatible theme. I will be using [this one](https://github.com/jagannatharjun/qbt-theme). After that, go to the options at the Behavior section. Then, mark "Use custom UI Theme" and select the downloaded `.qbtheme` file.

![](/assets/qbittorrent-guide/qBitTorrent-theme.png)

Restart qBitTorrent, and that should be for it.

![](/assets/qbittorrent-guide/image-19.png)

## How To Add Plug-ins to qBitTorrent

Another useful option for qBitTorrent is the build-in search engine with which we can use to search specific torrents instead of visiting the site through our navigator. Thanks to Pope Sidious for bringing up this tutorial.

![](/assets/qbittorrent-guide/qBitTorrent-plugin.png)

Before we proceed, it will ask us if we have Pythom installed if we don't have it.

![](/assets/qbittorrent-guide/qBitTorrent-plugin-2.png)
![](/assets/qbittorrent-guide/image-34.png)

Then, after the Python installation, we need to add the specific plugin of the sites like 1337x, limetorrents, among others to get it working. By doing this, in our qBitTorrent, there will be a new window section. We click on the second one and then we click on "Search Plugins..."

![](/assets/qbittorrent-guide/qBitTorrent-plugin-3.png)

After this, it will pop-up the search plugin. On "install a new one" we can add manually a python qBitTorrent search plugin, like [the one we are going to use](https://github.com/v1k45/1337x-qBitTorrent-search-plugin), for the torrent site -- or we can do an auto-search clicking in the "Check for updates" option (If you get an error, it's the qBitTorrent server. You will need to search the plugin manually).

![](/assets/qbittorrent-guide/qBitTorrent-plugin-4.png)

There are two ways to add an engine manually. The first one is downloading a compatible .py, but the second way, it's more easy to set up and does not require a download. First, click on the .py file.

![](/assets/qbittorrent-guide/qBitTorrent-plugin-5.png)

Then, select the Raw option and copy the link of the new window

![](/assets/qbittorrent-guide/qBitTorrent-plugin-6.png)

Go to qBitTorrent and paste it on the "web link" option from the "install a new one" and click OK.

![](/assets/qbittorrent-guide/image-1.png)

After this, we can search from the trackers we added before.

![](/assets/qbittorrent-guide/image-3.png)

You can also see how many Seeders/Leechers the Torrent has.
Be careful with what you download! Malware is common on sketchy torrent sites. **You are at your own risk**.