---
layout: ../../components/layouts/post.astro
title: 'Deezer ARL: Revisited'
mobiletitle: 'Deezer ARL Revisited'
slug: deezer-arl-revisited
date: 2022-09-22
author: Cain
desc: "The process for generating a Deezer ARL has changed a bit. We'll tell you how to generate one, but... should we still be using them?"
img: '/images/deezer-arl-revisited/thumb.jpg'
imgWidth: 800
imgHeight: 500
tags:
  - music-piracy
featured: true
---

There have been tons of reports of people who were unable to generate a Deezer ARL by following the old methods. In this article, we'll show you how to correctly generate a Deezer ARL, with the highest success rate -- a couple things have changed from the original methods. We'll also tell you about some other ways to rip your music, and why you might want to switch.

# Deezer ARLs

As a refresher, the three methods used before were IBAN, BIN, and VCC. The **best** method to use is still VCC, as it works 100% of the time unless there's an issue with your provider. We officially do not recommend using the BIN method anymore, since the success rate is quite low (unless you find a reliable source), and it's way more sketchy than the previous methods. IBAN still works, but we've made some changes to the steps used to generate an ARL using IBAN in order to have a higher success rate.

This is using the IBAN method. The ARL I generated while writing this guide will be available on the [Matrix server](https://matrix.to/#/#morrismotel:morrismotel.com), by the way -- alongside other community ARLs, and people who can help you generate your own. 

Before we begin, please be sure that you're writing down all the account information, to ensure that you don't lose access by accident -- browsers have cleared caches/cookies before, resulting in lost accounts. We also recommend that you take note of the steps you do/don't take, and share them with us. Your community input on what works or doesn't work will help us improve our guides! If you use a password manager, creating an entry for your ARL works fantastic.

## Generate an ARL

1. **VPN:** Enable your VPN, set to Germany. If you do not have a VPN yet, [Windscribe](https://windscribe.com/) offers a free plan with access to their Germany servers. We do not recommend using Windscribe for permanent use, but it'll do just fine if you don't have one yet. Read about our VPN recommendations [here](/posts/which-vpn-should-you-get).

2. **CREATE AN ACCOUNT:** Go to Deezer's website, and sign up for a Premium account. On the sign up page, it should ask for an email, username, password, age, and gender. For the email address, use one that ends with `@gmail.com` or `@hotmail.com`. If you do not have a spare Google account to use, you can use [Tempmail](https://tempmail.dev/en/Gmail). If Tempmail doesn't load for you, [Emailnator](https://www.emailnator.com/) should also work. It hasn't asked for any verification in the past, so you may be able to make up a random email address. For the other required fields, you can find randomized information at [Outputter](https://outputter.io/full-identity/germany/). If Outputter doesn't load for you, [MyFakeInfo](https://www.myfakeinfo.com/identity/de-identity-info-generator.php) will work fine too. 
![full size image of the account phase of arl generation](/images/deezer-arl-revisited/generate-arl-1.png)

3. **PAYMENT:** It should then lead you to a payment page. If you've followed the previous directions, it should give you the option for Direct Debit. Select Direct Debit and fill in the information, again from Outputter. Confirm the Terms and Conditions, and begin your free trial. Enter the IBAN from Outputter (or alternatively, [RandomIBAN](http://randomiban.com/?country=Germany)). For the email address, use the same address you used previously. Hit Continue. 
![full size image of the payment phase of arl generation](/images/deezer-arl-revisited/generate-arl-2.png)

4. **VERIFICATION:** Change the country code on Deezer from +49 to +1, and go to [recieve-sms-free.cc](https://receive-sms-free.cc/Free-USA-Phone-Number/) for a temporary phone number. Click Send Code, and wait a minute or two for the text to be received by receive-sms-free, refreshing often. If the text hasn't come through after a few minutes, go back and try another phone number. You're looking for a text which says the following: `Code:XXXX. Allow (Deezer SA) to debit your account. One time password, expires in 15mn.`

![full size image of the verification phase of arl generation](/images/deezer-arl-revisited/generate-arl-3.png)


## Grabbing the ARL

The ARL will be listed in your cookies. Here's how to access your cookies on the most common browsers:

On **Chrome**, go to the icon next to the website URL, usually a padlock. Hit the arrow next to Cookies, and then click the arrow next to deezer.com. Under Cookies, there should be a row with the key `arl`. Click it and the value (ARL) will appear below the dropdown.

On **Firefox**, right click on the screen and click Inspect. Go to the Storage tab, and click Cookies on the left-hand side. Then click on deezer.com and arl will be in the list of cookies. Double click on the value to select the entire thing.

On **Safari**, you'll need to go to preferences and enable "Show Develop menu in menu bar" under the Advanced tab. Then you can click Develop in the menu bar and click "Show Web Inspector." Then go to the Storage tab, hit Cookies (and then deezer.com if necessary), and the ARL will be in the list of cookies.

If the `arl` cookie doesn't appear, first ensure that you're logged in. Go through the account initiation process (select some random artists, etc). Reloading the page or logging out/back in may help. If it still won't show, try another browser. 

![](/images/deezer-arl-revisited/grab-arl.png)

## Using an ARL

I recommend Streamrip (which is a command line program) to rip your music, since it supports many platforms, including Deezer, TIDAL, Qobuz, etc. The full guide to Streamrip (including installation) is [available on our site](/posts/downloading-music-streamrip) as well. To add your Deezer ARL to Streamrip...

```
% rip config --deezer
Follow the instructions at https://github.com/nathom/streamrip/wiki/Finding-your-Deezer-ARL-Cookie
Paste your ARL here: 
Validating arl...
Sucessfully logged in!
```

# Alternatives to Deezer

While Deezer offers lossless music, it also caps at CD quality. By contrast, both TIDAL and Qobuz can reach up to 192 kHz.

|            | **128kbps** | **320 kbps** | **16-bit, 44.1 kHz** | **24-bit, 96 kHz** | **24-bit, 192 kHz** |
|------------|:-----------:|:------------:|:--------------------:|:------------------:|:-------------------:|
| **Deezer** |      ✅      |      ✅       |          ✅           |         ❌          |          ❌          |
| **TIDAL**  |      ✅      |      ✅       |          ✅           |        MQA         |         MQA         |
| **Qobuz**  |      ✅      |      ✅       |          ✅           |         ✅          |          ✅          |

Audio quality in lossless formats are defined in four aspects: bit depth, sample rate, and channel count. Lossy formats such as MP3 or AAC are typically defined by data rate, since they can highly depend based on format and compression method. 

As for Master Quality Audio (MQA) with TIDAL, it can reach 24-bit 352 kHz -- but the MQA format is closed-source, lossy, and its benefits are far from proven. That being said, the quality of an MQA track typically depends on the track and the quality of the master. Here's a [Reddit post](https://www.reddit.com/r/TIdaL/comments/r901i8/clearing_misconceptions_about_mqa_codecs_and/) on the matter. The format is highly criticized, but the general consensus in the audiophile community is that it may *sound* good, but the on-paper specification of a "lossy" format is not preferred over a standard like FLAC.

The idea with MQA is that artists can make their tracks sound as intended, and then put the music in a format which won't hog your bandwidth. The first part is great (though some producers end up botching their master), but the same can be done with FLAC, with files that are only slightly larger... so why is TIDAL pushing this format? (Pssst, it's because of the money.) To support the playing of MQA, developers have to pay up to TIDAL. 

Regardless, the point is that Deezer doesn't serve the highest quality music out there. But... are other services exploitable?

## Exploiting Other Services

I attempted to exploit both TIDAL and Qobuz with IBAN, but neither of these services have an option for Direct Debit, so IBAN isn't an option here. And since BIN isn't (or shouldn't be) an option... what can we do?

### Virtual Credit Cards

**If you can get ahold of a VCC, get one!** For those based in the United States, [Privacy.com](https://privacy.com/) is free for up to 12 cards/mo -- plenty for generating accounts. [Abine Blur](https://www.abine.com/) is another option, which probably offers more privacy than others (though paid), and [Revolut](https://www.revolut.com/revolut-shopper/) is a great option for those in the UK. Your credit card provider may also offer a similar service. The age minimum for these services vary, as do the documents (or lack thereof) required for verification to sign up. 

The process for generating accounts is 100x easier with a VCC, plus it's still fully anonymous to the streaming service, as you can use any address and name with the card.

### Slav Art

If you can't get a VCC, some folks over at Slav Art have whipped up a system which will let you rip from Qobuz in seconds, without the need for ARLs or anything of the like. We recommend using their site ([slavart.gamesdrive.net](https://slavart.gamesdrive.net/)), but they also have a [server on Divolt](https://slavart.divolt.xyz) with capabilities to rip from Spotify, TIDAL, etc. The accounts used by Slav Art are typically contributed by the community, so it's a win-win situation with this program. 

# Conclusion

If you'd like to continue using Deezer for music ripping, you can still generate ARLs fairly easily. If you'd prefer TIDAL or Qobuz, you can get a VCC or use Slav Art. If you have any questions or had success with generating an ARL using these methods, let us know!