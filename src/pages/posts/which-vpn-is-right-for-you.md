---
layout: ../../components/layouts/post.astro
title: "Which VPN is Right for You?"
slug: which-vpn-is-right-for-you
date: 2022-02-28
author: Cain
desc: "Seems like everyone these days wants a VPN — whether it’s for circumventing network restrictions, hiding your internet activities from your ISP, or whatever else you might want it for."
img: "/images/which-vpn-is-right-for-you/thumb.jpeg"
tags:
  - licit-guides
---

Seems like everyone these days wants a VPN — whether it’s for circumventing network restrictions, hiding your internet activities from your ISP, or whatever else you might want it for.

There’s a few things we should get out of the way first, however.

First, despite what your favorite YouTuber might say, **a VPN does not protect you from most online threats**. It only reroutes your internet traffic through a server — which means you still have to trust your traffic going through said server, otherwise using a VPN will be futile.

Second, **there is no such thing as a good free unlimited VPN**. There is always a catch. Some VPN providers might offer a free trial or half a gig of data, etc, but any VPN that offers unlimited traffic without any limitations is stealing your data and selling it online... or worse. Free VPNs have been caught injecting malware (web tracking), replacing advertisements with their own, and not actually encrypting traffic, despite their claims. 

One great example of this is Betternet. Betternet has 4.5 stars on the App Store, offers unlimited free traffic, and claims to keep no logs. However, they've been caught not only logging user data, but also selling it to data brokers. They also leak IP addresses, and aren't at all transparent about their user encryption. They also offer a paid plan (like many others), which can make it difficult to distinguish the VPN scams from the legitimate VPNs. The fix is simple: do your research, and above all, pay for your VPN!

So, which VPN is best? There are a few different factors that you might want to consider. Your threat model (AKA tinfoil-hat-ness), price, speed, and locations are a few to start. We’re mainly going to be comparing NordVPN, ExpressVPN, Private Internet Access, Mullvad, Proton VPN, and IVPN, however you may see some other VPNs mentioned in this article. Please note that while IVPN provided me with a press demo, this in no way affects my review of their service. 

## Threat Model

Let’s dive in, starting with your personal threat model. Are you an activist or wanted by a government agency? Or are you just some random guy online trying to get a couple free movies? The VPN you choose will depend on this. If your threat levels are high, you’re going to want a VPN with a solid history of denying legal requests and proven no-log policies, that has never been compromised, and that has zero connections to data brokers or malware companies. (*cough* Kape Technologies *cough*) Anyway… you can decide whether or not these details matter to you, based on your threat model.

First off, Kape Technologies (formerly Crossrider) is an Israel-based company, which has a history of producing and distributing malware. While they say they are done with these illicit activities, you may consider not buying a VPN which is under their control. Kape Technologies owns CyberGhost, Private Internet Access (PIA), ExpressVPN, and ZenMate. Tesonet, a data mining company, also owns SurfShark and NordVPN, making those not an option for the data-conscious.

### VPN Log Policies

1. NordVPN has a no-log policy, and a third-party audit has “verified” this, but no legal battle has proven this in court. NordVPN is based out of Lithuania.
2. ExpressVPN keeps a log of non-identifiable connections but no other details, has completed a third-party audit, and [a court case proved this policy true](https://www.expressvpn.com/blog/expressvpn-statement-andrey-karlov-investigation/). ExpressVPN is based out of British Virgin Islands.
3. PIA has a no-log policy, releases transparency reports, and [a court case has confirmed this](https://www.scribd.com/doc/303226103/Fake-bomb-threat-arrest). PIA is based out of the US.
4. Mullvad has a no-log policy, and [is transparent about their OpenVPN setup](https://mullvad.net/en/help/no-logging-data-policy/). Mullvad is based out of Sweden.
5. Proton VPN has a no-log policy, is third-party audited, releases transparency reports, and a court case proved the policy is accurate. Proton VPN is based out of Switzerland.
6. IVPN has a no-log policy, is third-party audited, and releases transparency reports. IVPN is based out of Gibraltar. 

You may find a list of VPNs and their log policies here, but keep in mind that it may not always be accurate. Companies sometimes lie about their policies, as is the case with PureVPN — a VPN provider which said that they didn’t keep any logs, and yet logs were released in court. [See the court documents here.](https://www.justice.gov/opa/press-release/file/1001841/download)

## Price

Many VPN companies will show “$X per month,” when they are referring to a two or three year plan divided into 24/36 months, so keep that in mind. NordVPN does this often with their $3.50/mo banners, when in reality the month-by-month pricing is $11.99. In this section, we’ll be comparing the month-by-month pricing for convenience of purchase, but if you’re able to buy in bulk, you may be able to get a discount.

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

\* My testing was done using http://ratemyvpn.org/

## Locations

NordVPN has **5342 servers** in **60 countries**.  
ExpressVPN has **3000+ servers** and **160 server locations** in **94 countries**.  
Private Internet Access has servers in **84 countries**.  
Mullvad has **780 servers** and **68 server locations** in **38 countries**.  
Proton VPN has **1758 servers** in **63 countries**.  
IVPN has **79 total servers** (64 openvpn, 79 wireguard) and **45 server locations** in **32 countries** on **18 different server providers**. 

\* I reached out to each of these companies individually if information was unavailable, this is what I was able to retrieve.

## Conclusion

The VPN you choose will probably depend on what's most important to you. Personally, I would recommend Proton, IVPN, or Mullvad. Proton is fast and offers a free plan, but it requires an account with email, etc. Mullvad uses an account ID number and the prices are stable, but the bandwidth might limit you if you have a fast connection. IVPN is fast and is very trustworthy, but it doesn't have many servers.

As a daily driver, I use Proton VPN. That being said, if you don't care too much about the number of server options, IVPN is probably your best option. IVPN is arguably the most transparent VPN provider out there, and that makes it the top choice in my opinion. (They quite literally have a blog post entitled "Why you don't need a VPN." If that's not transparency, I don't know what is.) IVPN is also completely open-source on GitHub. For these reasons, I recommend getting IVPN if you're looking for a solid VPN option. 

*Updated 05/31/2022: updated Proton VPN's pricing and server count, and added IVPN.*