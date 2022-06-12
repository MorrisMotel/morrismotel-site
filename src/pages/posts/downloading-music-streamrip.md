---
layout: ../../components/layouts/post.astro
title: "Downloading Music: Streamrip"
slug: downloading-music-streamrip
date: 2022-02-22
author: Cain
desc: "There are quite a few methods to rip music from streaming services. Streamrip is arguably the best one out there. It supports Qobuz, Deezer, TIDAL, Soundcloud, and YouTube."
img: "/images/downloading-music-streamrip/thumb.jpg"
tags:
  - music-piracy
---


There are quite a few methods to rip music from streaming services. Streamrip is arguably the best one out there. It supports Qobuz, Deezer, TIDAL, Soundcloud, and YouTube. Streamrip is a CLI tool, which means it is run from the command line, not a program.

## Installation & Setup

#### Prerequisites:

- [Python](https://www.python.org/downloads/) v3.8+ and [pip](https://pip.pypa.io/en/stable/installing/)
- [Microsoft Visual C++ Tools](https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) **(Windows Only)**
- [ffmpeg](https://ffmpeg.org/download.html) (Necessary for conversions, TIDAL videos, and SoundCloud)
- [youtube-dl](https://github.com/ytdl-org/youtube-dl#installation) (Necessary for YouTube downloading)

**To open your command line:**

On Windows, hit Ctrl+R and type in `cmd`, then hit enter.  
On Mac, hit Cmd+Space and type in `terminal`, then hit enter. Alternatively you can use [iTerm](https://iterm2.com/).  
On Linux, press Ctrl+Alt+T.

Then, run `pip3 install streamrip --upgrade`. You should then be able to run `rip` and see the help page. If you do not see the help page, [visit the detailed installation instructions](https://github.com/nathom/streamrip/wiki#detailed-installation-instructions) on the GitHub repository.

Next is the setup. To set up a service, type in `rip config --service`, for example `rip config --tidal`. Once you've signed into your service(s), time to rip!

### Ripping

You can rip a URL by using `rip url URL`. The URL does not need to be in quotations. You can also provide multiple urls by separating the links with a space, or provide a text files of links using `--file urls.txt`. Alternatively, you can search for music using `rip search "query"`.

### Command Flags

You can also pass a few different flags.

First is `--max-quality`, and then a quality ID. Here are the available qualities:

| **Quality ID** | **Audio Quality**     | **Available Sources**                        |
|----------------|-----------------------|----------------------------------------------|
| 0              | 128 kbps MP3 or AAC   | Deezer, Tidal, SoundCloud (most of the time) |
| 1              | 320 kbps MP3 or AAC   | Deezer, Tidal, Qobuz, SoundCloud (rarely)    |
| 2              | 16 bit, 44.1 kHz (CD) | Deezer, Tidal, Qobuz, SoundCloud (rarely)    |
| 3              | 24 bit, ≤ 96 kHz      | Tidal (MQA), Qobuz, SoundCloud (rarely)      |
| 4              | 24 bit, ≤ 192 kHz     | Qobuz                                        |

Second is `--source`, which allows you to specify the source of the content, especially when searching for music. For example: `rip search --source tidal "song name here"`

If you installed ffmpeg earlier, you can also convert the music to a different format using `--codec`, like mp3 or flac, etc.

Note that for TIDAL and Qobuz, you'll **need** a premium subscription to use Streamrip. Deezer, Soundcloud, and YouTube all have free versions. For HiFi with Deezer, you'll also need a HiFi account.

If you have any questions feel free to drop them in the comment section below or visit our Discord/Matrix through the buttons at the bottom of the page.
