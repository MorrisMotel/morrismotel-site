---
layout: ../../components/layouts/post.astro
title: 'De-bloat JDownloader2'
mobiletitle: 'De-bloat JD2'
slug: debloat-jdownloader
date: 2022/03/04
author: Cain
desc: "JDownloader2 is a very common method for DDLing from a variety of sites, especially Google Drive. However, it's quite bloated out of the box. So, how can you remove the bloat?"
img: '/assets/debloat-jdownloader/thumb.png'
imgWidth: 800
imgHeight: 500
tags:
  - general-piracy
---

JDownloader2 (JD2) is a very common method for DDLing from a variety of sites, especially Google Drive. However, it's quite bloated out of the box. So, how can you remove the bloat?

## Installing JDownloader2

Of course you must have JDownloader2 installed already, and you can get it from [jdownloader.org](https://jdownloader.org/jdownloader2). Click on your operating system and go through the usual steps of installing the program.

## De-bloating

Open the settings panel. Click on Advanced Settings.  
![](/assets/debloat-jdownloader/image1.png)
In the search bar, type `Premium Alert` and disable all three of the options. They should be:

- `GraphicalUserInterfaceSettings: Premium Alert Task Column`
- `GraphicalUserInterfaceSettings: Premium Alert Speed Column`
- `GraphicalUserInterfaceSettings: Premium Alert ETA Column`

Next, type in `Oboom` and disable the value: `GraphicalUserInterfaceSettings: Special Deal Oboom Dialog Visible On Startup`.  
Then, type in `Special Deals` and disable the value: `GraphicalUserInterfaceSettings: Special Deals`.  
Then, type in `Donate` and switch the value: `GraphicalUserInterfaceSettings: Donate Button State` to `Hidden (usermode)`.  
Finally, type in `Banner` and disable `GraphicalUserInterfaceSettings: Banner`.

That's it! Your JD is now ad-free!
![](/assets/debloat-jdownloader/image2.png)
