---
title: Webmentions Revisited
author: Glenn Dixon
layout: layouts/post.njk
date: 2019-05-29T13:40:00+00:00
permalink: /webmentions-revisited/
categories:
  - IndieWeb
tags:
  - posts
  - notes
---
During my recent WordPress to Hugo conversion (re-conversion?) the export/convert tools pulled in a *TON* of metadata. Some posts have things like this in the frontmatter:

<!-- excerpt -->
```
micropub_auth_response:
  - 'a:8:{s:10:"token_type";s:6:"Bearer";s:5:"scope";s:6:"create";s:2:"me";s:28:"https://glenn.thedixons.net/";s:9:"issued_by";s:55:"https://glenn.thedixons.net/wp-json/indieauth/1.0/token";s:9:"client_id";s:24:"https://ownyourgram.com/";s:9:"issued_at";i:1540737877;s:4:"user";i:1;s:13:"last_accessed";i:1542589884;}'
mf2_type:
  - 'a:1:{i:0;s:7:"h-entry";}'
title: "Brown Ale and pizza!";}'
mf2_published:
  - 'a:1:{i:0;s:25:"2018-11-18T01:32:24+00:00";}'
mf2_syndication:
  - 'a:1:{i:0;s:40:"https://www.instagram.com/p/BqTajaQj3mr/";}'
image: /img/2018/11/43023957_276523406539611_5649908873021746940_n.jpg
```

That's an Instagram photo which was pulled into the site using OwnYourGram, a service which I find myself currently unable to log in to. But for it to be a useful post in Hugo, I need to strip probably 80% of that cruft, and I am not sure if it can be done with a search and replace. In other words, a big fat pain in the ass!

All I really want is the photo and content (comment) - The rest is rather useless.

Speaking of which, I'm beginning to rethink a lot of this whole Indieweb stuff. If I want to save a photo, I'll save it, probably on Flickr. If I also post it to Instagram, I get interactions there. Having the photo copied here, with or without the accompanying interactions, doesn't really do anything but clutter up my site. It feels the same way for webmentions, replies, reposts, trackback/pingback, etc. I'm beginning to think I'll implement a nice staticy comment system and just leave it at that. Leave interaction to the silos. 

Having said that, I spend less and less time on those silos, but that's really a good reason to break any link with my site. I just don't *care* if that content is mirrored here. 

So a good portion of the existing content here is about to disappear. Don't worry, you won't miss it! I know I won't...
