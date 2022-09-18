---
layout: '../../components/layouts/post.astro'
title: Which VPN is Right for You?
slug: which-vpn-is-right-for-you
date: '2022-02-28'
author: Cain
desc:
  Seems like everyone these days wants a VPN — whether it’s for circumventing
  network restrictions, hiding your internet activities from your ISP, or whatever
  else you might want it for.
img: '/images/which-vpn-is-right-for-you/thumb.jpeg'
tags:
  - licit-guides
---

Seems like everyone these days wants a VPN — whether it’s for circumventing network restrictions, hiding your internet activities from your ISP, or whatever else you might want it for. There’s a few things we should get out of the way first, however.

First, despite what your favorite YouTuber might say, **a VPN does not protect you from malware or other online threats**. It only reroutes your internet traffic through a server — which means you still have to trust your traffic going through said server, otherwise using a VPN will be futile. It also won't protect you from cyberattacks, data breaches, or most other vulnerabilities.

Second, **there is no such thing as a good free unlimited VPN**. There is always a catch. Some VPN providers might offer a free trial or half a gig of data, etc, but any VPN that offers unlimited traffic without any limitations is stealing your data and selling it online... or worse. Free VPNs have been caught injecting malware (web tracking), replacing advertisements with their own, and not actually encrypting traffic, despite their claims. Proton VPN's free plan, for example, provides access to 100-ish servers in three countries, moderate bandwidth, one simultaneous conection, and no P2P/Torrent support -- **it's not free**.

One great example of this is Betternet. Betternet has 4.5 stars on the App Store, offers unlimited free traffic, and claims to keep no logs. However, they've been caught not only logging user data, but also selling it to data brokers. They also leak IP addresses, and aren't at all transparent about their user encryption. Their website even claims to protect you from hackers, by securing internet connection with "military-grade encryption." "Browse with confidence," they say. They also offer a paid plan for faster speeds, but don't let that trick you -- their main feature is a "totally free" VPN. Betternet's parent company (Pango Group) also owns Hotspot Shield, VPN 360, and Ultra VPN, all of which are incredibly popular on the App Store.

So, which VPN is best? There are a few different factors that you might want to consider. Your threat model (AKA your level of tinfoil-hat), price, speed, and locations are a few to start. We’re mainly going to be comparing [NordVPN](https://nordvpn.com/product-site/), [ExpressVPN](https://www.expressvpn.com/), [Private Internet Access](https://www.privateinternetaccess.com/), [Mullvad](https://mullvad.net/en/), [Proton VPN](https://protonvpn.com/), and [IVPN](https://www.ivpn.net/), however you may see some other VPNs mentioned in this article. Note that while IVPN has provided me with a press demo, this does not affect my review of their service in the slightest.

## Do you need a VPN though?

Before we jump in, perhaps decide if you need a VPN in the first place. IVPN has graciously created DoINeedAVPN.com, in order to "challenge aggressive marketing practices in the VPN industry." This site is not for marketing, but rather part of IVPN's transparency initiative to help you decide if you **actually** need a VPN. I would absolutely recommend visiting their site before continuing. [Link here.](https://www.doineedavpn.com)

## Threat Model

Let’s dive in, starting with your personal threat model. Are you an activist or wanted by a government agency? Or are you just some random guy online trying to get a couple free movies? The VPN you choose will depend on this. If your threat levels are high, you’re going to want a VPN with a solid history of denying legal requests and proven no-log policies, that has never been compromised, and that has zero connections to data brokers or malware companies. (cough Kape Technologies cough) Anyway… you can decide whether or not these details matter to you, based on your threat model.

First off, Kape Technologies (formerly Crossrider) is an Israel-based company, which has a history of producing and distributing malware. While they say they are done with these illicit activities, you may consider not buying a VPN which is under their control. Kape Technologies owns CyberGhost, Private Internet Access (PIA), ExpressVPN, and ZenMate. Tesonet, a data mining company, also owns SurfShark and NordVPN, making those not an option for the data-conscious.

### VPN Log Policies

|                         | Country                | No-log Policy | 3rd Party Audited | Transparency Reports | Open Source  | Proved in Court |
| ----------------------- | ---------------------- | ------------- | ----------------- | -------------------- | ------------ | --------------- |
| NordVPN                 | Lithuania              | ✅            | ✅                | ❌                   | ❌           | ❌              |
| ExpressVPN              | British Virgin Islands | ✅            | ✅                | ❌                   | Extensions ₁ | ✅ ₅            |
| Private Internet Access | United States          | ✅            | ✅                | ❌                   | Android ₂    | ✅ ₆            |
| Mullvad                 | Sweden                 | ✅            | ✅                | ❌                   | ✅ ₃         | ❌              |
| Proton VPN              | Switzerland            | ✅            | ✅                | ✅                   | Apps ₄       | ✅ ₇            |
| IVPN                    | Gibraltar              | ✅            | ✅                | ✅                   | Apps         | ❌              |

₁ [expressvpn.com/blog/browser-extension-audit-and-open-sourcing/](https://www.expressvpn.com/blog/browser-extension-audit-and-open-sourcing/)\
₂ [privateinternetaccess.com/blog/the-private-internet-access-android-app-is-being-open-sourced/](https://www.privateinternetaccess.com/blog/the-private-internet-access-android-app-is-being-open-sourced/)\
₃ [protonvpn.com/blog/open-source/](https://protonvpn.com/blog/open-source/)\
₄ [mullvad.net/en/help/no-logging-data-policy/](https://mullvad.net/en/help/no-logging-data-policy/)

₅ [expressvpn.com/blog/expressvpn-statement-andrey-karlov-investigation/](https://www.expressvpn.com/blog/expressvpn-statement-andrey-karlov-investigation/)\
₆ [scribd.com/doc/303226103/Fake-bomb-threat-arrest](https://www.scribd.com/doc/303226103/Fake-bomb-threat-arrest)\
₇ [protonvpn.com/blog/transparency-report/](https://protonvpn.com/blog/transparency-report/)

Note that smaller VPN providers' policies (such as Mullvad or IVPN), while they are trusted to not keep logs, haven't been proven in court simply because they are not used on the same scale as some of the other, more popular providers like NordVPN or ExpressVPN.

Keep in mind that the claimed policies may not always be accurate. Some VPN providers have been caught lying about their policies, as is the case with [PureVPN](https://www.justice.gov/opa/press-release/file/1001841/download), [IPVanish](https://www.courtlistener.com/recap/gov.uscourts.insd.67065.2.0.pdf) and [HideMyAss](https://archives.fbi.gov/archives/losangeles/press-releases/2011/member-of-hacking-group-lulzsec-arrested-for-june-2011-intrusion-of-sony-pictures-computer-systems). All of them claimed that they didn’t keep any logs, and yet logs were released in court.

## Price

Many VPN companies will show “$X per month,” when they are referring to a two or three year plan divided into 24/36 months, so keep that in mind. NordVPN does this often with their $3.50/mo banners, when the month-by-month pricing is $11.99. In this section, we’ll be comparing the month-by-month pricing for convenience of purchase, but if you’re able to buy years at a time, you may be able to get a discount.

1. As stated earlier, **NordVPN** offers only one tier, which is $11.99 per month.
2. **ExpressVPN** offers one tier as well, coming in at $12.95 per month.
3. **Private Internet Access** offers one tier, which is $9.95 per month.
4. **Mullvad** offers one tier, coming in at $5.60/mo. (5 euros, converted at the time of writing.) Mullvad only offers month-by-month pricing, never has discounts, and has had the same price since its inception — so you’re getting the most dependable pricing model here.
5. **Proton VPN** offers two VPN tiers: free and plus. The free tier offers 100+ servers in 3 countries, 1 VPN connection, and medium speeds. The plus tier offers 1700+ servers in 60+ countries, 10 VPN connections, and the highest speed (up to 10Gbps). The plus plan is also required if you wish to torrent or stream, and includes NetShield and Secure Core servers.
6. **IVPN** offers two tiers: standard and pro. The standard tier offers 2 connections, and costs $6/mo (or $2/wk). The pro tier offers 7 connections, includes port forwarding and multi-hop, and comes in at $10/mo (or $4/wk). IVPN also offers special pricing for companies (20+ seats) and nonprofits (5+ seats).

## Speed

With NordVPN, there was a **28% download loss and a 24% upload loss.** (via PCMag)  
With ExpressVPN, there was a **60% download loss and a 74% upload loss.** (via PCMag)  
With PIA, there was an **11% download loss and a 19% upload loss.** (via PCMag)  
With Mullvad, there was a **19% download loss and a 47% upload loss.** (via PCMag)  
With Proton VPN, there was a **15% download loss and a 1% upload loss** (via PCMag), and in my own testing, I had a **0% overall speed loss.**  
With IVPN, there was a **23% download loss and a 27% upload loss** (via PCMag), and in my own testing, I had a **0% overall speed loss.**

\* My testing was done using [Rate My VPN](http://ratemyvpn.org/)

## Locations

NordVPN has **5342 servers** in **60 countries**.  
ExpressVPN has **3000+ servers** and **160 server locations** in **94 countries**.  
Private Internet Access has servers in **84 countries**.  
Mullvad has **780 servers** and **68 server locations** in **38 countries**.  
Proton VPN has **1758 servers** in **63 countries**.  
IVPN has **79 total servers** (64 openvpn, 79 wireguard) and **45 server locations** in **32 countries** on **18 different server providers**.

\* I reached out to each of these companies individually if information was unavailable. This is all the location information I was able to gather.

## Conclusion

The VPN you choose will most likely depend on what's important to you. I would recommend IVPN, Mullvad or Proton VPN. IVPN and Mullvad only use account IDs and no identifiable information (emails, etc). IVPN is more feature-rich than Mullvad though, which is why I use IVPN. Proton VPN is also a good alternative for a (limited) free VPN, but keep in mind that the free tier doesn't allow torrenting. Additionally, the logging track record for Proton's other service, Proton Mail, might deter you. Proton VPN also requires an email address for registration.

As a daily driver, I use IVPN, due to their next-level transparency. That being said, if you require more servers, you might choose Mullvad or Proton VPN instead.

Updated 05/31/2022: updated Proton VPN's pricing/locations/name and added IVPN.
