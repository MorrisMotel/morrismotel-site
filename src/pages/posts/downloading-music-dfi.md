---
layout: ../../components/layouts/post.astro
title: "Downloading Music: D-fi"
slug: downloading-music-dfi
date: 2022-03-02
author: MrMeatBones
desc: "D-fi is Deemix's CLI only cousin. They're both built from the ground up to download from Deezer's servers and ultimately serve the same purpose."
img: "/images/downloading-music-dfi/thumb.png"
imgWidth: 800
imgHeight: 500
tags:
  - music-piracy
---

## What is D-fi?

D-fi is Deemix's CLI-only cousin. They're both built from the ground up to download from Deezer's servers and ultimately serve the same purpose. Where they differ is the method of use and some under the hood coding. Anecdotally, we've found evidence that D-fi is far more reliable when it comes to using your ARL. Blocks seem to be less frequent and the sharing of ARLs seems to be far less of a problem when using D-fi compared to Deemix. While we do not have definitive proof of this, we do know of cases where an ARL will fail on Deemix but function on D-fi.

## Setting up D-fi

Setting up D-fi is actually very simple. All you have to do is download the latest windows release from [here](https://github.com/d-fi/releases/releases).

![](/images/downloading-music-dfi/image-53.png)
![](/images/downloading-music-dfi/image-54.png)

Next we're going to make a folder somewhere and call it D-fI. Then, we're going to place the .zip file we just downloaded into that folder and extract it using the "extract here" option.

![](/images/downloading-music-dfi/image-55.png)
![](/images/downloading-music-dfi/image-56.png)
![](/images/downloading-music-dfi/image-57.png)

Now, D-fi is installed. Next we have to actually use it.

## Using D-fi
![](/images/downloading-music-dfi/image-58.png)

Since D-fi is a command line tool, we'll have to open the command line to do that. Doing so is very simple. Open the folder you placed the D-fi.exe in then click on the file path bar. Then type CMD and hit enter.

![](/images/downloading-music-dfi/image-59.png)
![](/images/downloading-music-dfi/image-60.png)

A command line prompt should now show up.

![](/images/downloading-music-dfi/image-61.png)

Now, lets set up D-fi. For this step you will need your ARL. If you do not have an ARL, follow the guide [here](/posts/generate-a-deezer-arl/)to create one.

Now enter the following command:

```d-fi -a PASTEARLHERE```

Make sure to replace the last bit with your ARL. It should look like this once you hit enter.

![](/images/downloading-music-dfi/image-62.png)

Now with that set up, type the following command:

```d-fi```

You should now see this.

![](/images/downloading-music-dfi/image-63.png)

Select your music quality by using the arrow keys then hitting enter.

![](/images/downloading-music-dfi/image-64.png)

Now you're all setup! You only have to set your arl once, until said arl expires. Then you will have to do it again. From here you can either paste links directly from deezer's website, or type an artists name and hit enter.

![](/images/downloading-music-dfi/image-65.png)

You will see a list like this if you type an artists name to search. Use the up and down arrow keys to navigate the list, and the left and right arrow keys to select/deselect entries. Then simply hit enter and your selections will download into a folder titled "music" in the folder itself.

![](/images/downloading-music-dfi/image-66.png)

And there you have it! D-fi is all set up.