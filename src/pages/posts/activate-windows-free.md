---
layout: ../../components/layouts/post.astro
title: "Activate Windows for Free"
slug: activate-windows-free
date: 2022-05-30
author: "Cain"
desc: "Microsoft Windows is probably the most popular desktop operating system out there. A license, however, can be quite pricey. Here's how to crack Windows 10/11/Server."
img: "/images/activate-windows-free/thumb.jpg"
tags:
  - general-piracy
---

The price for a new Windows activation license is usually around $140. There's almost always a way to get around that price tag though. There are three working methods to activate Windows. Refer to the chart below to find which method will work best for your system.

| **Activation Type** | **Supported Product** | **Activation Period** |
|---------------------|:---------------------:|:---------------------:|
| HWID                |     Windows 10/11     |       Permanent       |
| KMS38               |  Windows 10/11/Server |       Until 2038      |
| Online KMS          |    Windows / Office   |        180 days       |

The vast majority of users are going to want a HWID activation. With that in mind, let's continue.

I've created a fresh install of Windows 10 to show this process. First off, here's the activation page to confirm that my license is not yet activated. 

![](/images/activate-windows-free/image1.png)

Now the first thing you'll need to do is install a program like 7Zip (if you haven't already) to unzip the `.7z` file which the activation script is packaged in. You can do this by navigating to https://7zip.org/ and downloading the correct file (most likely, you're looking for 64-bit x64). Then open the downloader, hit install, and in a few seconds 7Zip will be good to go. 

Next thing to do is to go to the GitHub/GitLab repository for the Microsoft Activation Scripts (MAS). You can find this at https://github.com/massgravel/Microsoft-Activation-Scripts/releases, or https://gitlab.com/massgrave/microsoft-activation-scripts/-/releases if the GitHub isn't available. 

![](/images/activate-windows-free/image2.png)

Click on the .7z file. It should begin downloading. Once finished, open it with 7Zip. If you're asked for a password, type in `1234` and continue. Click on the folder in 7Zip and hit the blue extract button. Select a folder and hit OK.

![](/images/activate-windows-free/image3.png)

Navigate to the folder you extracted it to. Open the folder (it should be named MAS_1.5 or something like that), and then open the All-in-One-Version folder. There should be a windows command file. Double-click it. It will open the command prompt. If you get a popup asking if you'd like to allow command prompt to make changes to your device, click Yes. 

![](/images/activate-windows-free/image4.png)

Now type the number on your keyboard of the corresponding activation method you chose from before. Most likely, you're going to want HWID, which is option 1. **If for any reason you'd like to be able to de-activate your license, do not choose HWID.** Otherwise, continue with the activation. 

![](/images/activate-windows-free/image5.png)

If you chose HWID, you'll see a second screen which asks if you'd like to continue with activation. Type 1 to continue. The process from here will be automatic.

![](/images/activate-windows-free/image6.png)

Once finished, you can press any key to go back and then press 8 to close the window. 

![](/images/activate-windows-free/image7.png)

That's it! You're activated.