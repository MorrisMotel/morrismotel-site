---
layout: ../../components/layouts/post.astro
title: "How to Use qBitTorrent"
slug: qbittorrent-guide
date: 2022-02-22
author: EgoDeer
desc: "qBitTorrent is one of the most popular torrent downloaders. But how do you use it properly?"
img: "/images/qbittorrent-guide/thumb.png"
imgWidth: 800
imgHeight: 500
tags:
  - general-piracy
---

## Table of Contents:
- [**Why use qBittorrent?**](#why-use-qbittorrent)
- [**Installation Process**](#installation-process)
- [**Setting qBittorrent Up**](#setting-qbittorrent-up)
- [**How to Download a Torrent File**](#how-to-download-a-torrent-file)
- [**How to Seed a Torrent File**](#how-to-seed-a-torrent-file)
- [**How to Change the UI Theme**](#how-to-change-the-ui-theme)
- [How To Add Plug-ins to qBittorrent](#how-to-add-plug-ins-to-qbittorrent)

## Why use qBittorrent?

First of all: Why use qBittorrent, instead of µTorrent or any other torrent manager?

The answer is simple: qBittorrent is a much cleaner and reliable option in comparison to µTorrent. It is completely **free**, and does not have **any ads or malware inside**.

---

## Installation Process

Commencing with the guide, the first thing we need to do is [**download**](https://www.qbittorrent.org/download.php) the latest version at the official site of qBittorrent. We select our OS, and it will redirect us to the next page.

![](/images/qbittorrent-guide/downloadqb-1.png)

In my case, I select Windows.
In this page we can select the version depending our OS architecture.

![](/images/qbittorrent-guide/Downloadqb-2.png)

Just click in the version. In my case, Windows x64.
Once we have the installer, we select our language, click on next, accept the terms of the License Agreement, and click on next again.

Up here, we can select the file association and well as other options. I always suggest to leave the last four options this way so we avoid some headaches later...

![](/images/qbittorrent-guide/image-9.png)

Then, click on next, and select the installation path and it will begin to install qBittorent.

![](/images/qbittorrent-guide/image-10.png)

---

## Setting qBittorrent Up

After the installation process, we can begin setting up our qBittorrent so it can run at 100% when we start to download/seed our torrents.

For this, we go to the options panel.

![](/images/qbittorrent-guide/qBittorrentUI.png)

Here we go to the connection. And select these options if they are disabled or changed.

![](/images/qbittorrent-guide/qBittorrent-Options.png)

In the "port used for incoming connections" option I recommend to enter a number between 45000 and 52000.
Now, the next step is to set up our downloads. So we need to go to the BitTorrent section, and mark this option. These options will depend on how many downloads/uploads you want actively.

![](/images/qbittorrent-guide/qBittorrent-Options-2.png)

---

## How to Download a Torrent File

At the moment we finish our configuration, we begin the easiest part: downloading a torrent.

For this, we need the torrent file that we want to download (of course). I will be downloading Night of the Living Dead **[**be **really** careful with the **clone sites**].

![](/images/qbittorrent-guide/qBittorrent-Download-1.png)

Once we have our torrent, just click it. And because of we mark the file association, it will immediately recognize it.

In this window, at the left section, we can select the download path, and, at right section, we can see the inside of the torrent and select what we want to download. Then we select OK, and it will start to download the torrent file.

![](/images/qbittorrent-guide/qBittorrent-Download-2-1.png)

Now, sometimes, the torrent will not initiate or download. This may be, because it doesn't have **Seeders** or have too many **Leechers** (Peers). That's why we need to **always** check out how many Seeders the torrents have, and how many Leechers, in proportion to the seeders, the torrent has.

![](/images/qbittorrent-guide/qBittorrent-Download-3.png)

And that's it for the download guide.

---

## How to Seed a Torrent File

Sometimes, there will be some trackers that requires to seed a torrent before or after downloading one. qBittorrent activates this function right after we finish the torrent, but what if we want to seed a file that we don't have in qBittorrent?

The zero step is having the downloaded files in our PC.

Then, we need to find the torrent download file we want to seed. I will be seeding Night of the Living Dead.

Now, we open the torrent file and we are going to look at the **root folder** (not the file folder). Notice that you will need **all** the **same files and folder name**. Otherwise, it won't recognize the torrent as downloaded.

![](/images/qbittorrent-guide/qBittorrent-seed-1.png)

And that's all. It will begin to check the files and re-download the damaged blocks if there's one. After the summary check, it will be appearing as "seeding".

![](/images/qbittorrent-guide/qBittorrent-seed-2.png)

---

## How to Change the UI Theme

First thing we need to do is download a compatible theme. I will be using [**this one**](https://github.com/jagannatharjun/qbt-theme). After that, go to the options at the Behavior section. Then, mark "Use custom UI Theme" and select the downloaded .qbtheme file.

![](/images/qbittorrent-guide/qBittorrent-theme.png)

Restart qBittorrent, and that should be for it.

![](/images/qbittorrent-guide/image-19.png)

---

## How To Add Plug-ins to qBittorrent

Another useful option for qBittorrent is the build-in search engine with which we can use to search specific torrents instead of visiting the site through our navigator. Thanks to Pope Sidious for bringing up this tutorial.

![](/images/qbittorrent-guide/qBittorrent-plugin.png)

Before we proceed, it will ask us if we have Pythom installed if we don't have it.

![](/images/qbittorrent-guide/qBittorrent-plugin-2.png)
![](/images/qbittorrent-guide/image-34.png)

Then, after the Pythom installation, we need to add the specific plugin of the sites like 1337x, limetorrents, among others to get it working.

By doing this, in our qBittorrent, there will be a new window section. We click on the second one and then we click on "Search Plugins..."

![](/images/qbittorrent-guide/qBittorrent-plugin-3.png)

After this, it will pop-up the search plugin. On "install a new one" we can add manually a .py qBittorrent search plugin, like [the one we are going to use](https://github.com/v1k45/1337x-qBittorrent-search-plugin), for [1337x.to](https://1337x.to/) or we can do an auto-search clicking in the "Check for updates" option (If you get an error, it's the qBittorrent server. You will need to search the plugin manually).

![](/images/qbittorrent-guide/qBittorrent-plugin-4.png)

There are two ways to add an engine manually. The first one, as we said, is downloading a compatible .py, but, the second way, it's more easy to set up and does not requires to download anything.

First, click on the .py file

![](/images/qbittorrent-guide/qBittorrent-plugin-5.png)

Then, select the Raw option and copy the link of the new window

![](/images/qbittorrent-guide/qBittorrent-plugin-6.png)

Go to qBittorrent and paste it on the "web link" option from the "install a new one" and click Ok.

![](/images/qbittorrent-guide/image-1.png)

After this, we can search from the trackers we added before.

![](/images/qbittorrent-guide/image-3.png)

You can also see how many Seeders/Leechers the Torrent has.
Be careful with the downloads because you can not see who upload the link and you may be dowloading a dangerous file. **You are at your own risk**.