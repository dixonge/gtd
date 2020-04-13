---
eleventyNavigation:
  parent: HowTo
  key: Setting Up Wallabag on the Raspberry Pi
author: Glenn Dixon
layout: layouts/home.njk
date: 2017-06-14T22:15:07+00:00
permalink: /posts/setting-up-wallabag-on-the-raspberry-pi/
categories:
  - HowTo
tags:
  - posts
---
![](/img/2018/07/wallabag-logo.jpg)

In my recent flurry of [indieweb-style activity][1] I decided to go cold turkey with my dependency on certain major service silos. In addition to the general motivation to dump the monolithic, monopolistic mega-corp silos, there was a more practical motivation. Before our big move back to Mexico we are upgrading the laptops. Three years old and upgraded to Windows 10 had me a bit nervous. Also, spinning hard drives. So [our new laptops][2] are straight-from-China cheap with eMMC drives of only 64gb.

![](/img/2018/07/chuwi-768x768.png)

MS Office and even LibreOffice take up a \*lot\* of room. So I cancelled my Office365 subscription (got a full refund, surprisingly) but this had the side effect of reducing my OneDrive space allocation down to about 5GB. In cleaning up the space a bit I managed to accidentally trash the folder which held some of my OneNote folders.

Oops.

And yes, I also emptied the trash. Gone. Forever.

But wait! I found a backup copy, except you can't export or import it without an Office365 subscription! Huh? Well fuck.

So obviously, I needed a new solution for web clipping, one of the things I used OneNote for extensively. Enter [Wallabag][3].

When it comes to self-hosted read-it-later services this seems to be the only thing that comes up on Google searches. And frankly it was a bit of a pain to get set up. But I did, somehow, manage to get it up and running. Here are some of my fuzzy memories of problems I ran into along the way, and the solutions.

First, make sure you have the [requirements in place][4]. Most of the instructions mention Composer as a default install procedure, but it does seem to have some higher memory requirements. I had to reboot the Pi at one point which seems to have cleared the path and allowed for the install to complete successfully. [Basic instructions are here][5].

At the end of the install it will ask for user name and password, etc.

DOCUMENT ROOT: This one is important, otherwise you'll just get a blank page:

\`/var/www/wallabag/web\`

(in my case, it was /var/www/html/wallabag/web)

The important part is that you have to point your virtual host or other setup to the \`/web\` subdirectory.

Once you have that working and can log in via the web interface then you need to add some content! The two main ways I'm doing that are:

- Firefox add-on extension
  
- Android app

For the Firefox (or Chrome) extensions to work you have to set up a client in Wallabag. In the main menu, click on \*API Clients Management\*, click \*Create a New Client\*. Give it a name (this is just for your own internal reference) and click the \*Create a New Client\* button. This will give you the two main pieces of information you will need for the extension.

![](/img/2018/07/wallabag1-768x585.png)

Next, download the extension. Most Google searches point to the old one, which links you to the new one, although it goes to the French version.

[English version of the extension download][6].

Go to the browser extension options and enter the URL for your wallabag installation and click \*Check URL\*. Once that verifies, enter the \*Client ID\*, \*Client secret\*, \*user login\* and \*password\*.

\*\*THIS IS IMPORTANT\*\* - you have to click on \*Get token\*. After that you can just exit the page. You don't have to save anything to a file, that's optional.

[Detailed setup instructions][7] for the Chrome (and Firefox) add-on.

And it auto-saves. Once you set a tag, just walk away!

The Android app is simpler to configure - just provide the URL, user name and password. Once it successfully connects, it will automatically create a client on the server!

[1]: http://indieweb.org/
[2]: http://en.chuwi.com/pc.html
[3]: http://wallabag.org
[4]: https://doc.wallabag.org/en/admin/installation/requirements.html
[5]: https://doc.wallabag.org/en/admin/installation/installation.html
[6]: https://addons.mozilla.org/en-US/firefox/addon/wallabagger/
[7]: https://wallabag.org/en/news/wallabagger-howto