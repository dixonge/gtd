---
title: Adventures With IndieWeb
author: Glenn Dixon
layout: layouts/post.njk
date: 2017-07-13T21:56:09+00:00
permalink: /adventures-with-indieweb/
image: /img/2018/07/indieweb-logo-study-001.png
categories:
  - Indieweb
tags:
  - posts
---
[UPDATE: 2018-07-21 - after having initially given up on IndieWeb implementation, I'm back at it. I'm also moving from Kirby to <del>Grav CMS</del>. WordPress]

<!-- excerpt -->
Dan Gillmor wrote what may be [the defining piece on the IndieWeb movement][1] - so read those links for a good overview. Those thoughts resonated with me. It seems to be a good balance between having your own blog but no readers, and having lots of readers and interactions which are restricted to group membership, friend status, etc. but which is also arbitrarily restricted by an algorithm and/or advertisements. IndieWeb is all about bridging the gap and keeping the conversations alive across walled gardens.

Bastian Allgeier, the creator of Kirby CMS, is a big fan of the [IndieWeb][2]. He even [created a webmentions plugin][3] for Kirby. I [installed it][4], but it seems to be more of a prototype than an active, working plugin. Sebastiaan Andeweg, however, \*does\* have a [working webmentions plugin][5] for Kirby. He said he passed 20 of 21 endpoint discovery tests over at [Webmention.rocks][6] but I was not so fortunate, passing only maybe 30% of the tests. I will not blame the plugin for this, however. It is mostly likely my implementation of it or the other pieces of code I have added to this site, which is just the barebones [Kirby Starterkit][7] plus various plugins and code modifications, all done by me. I think it is much more likely that I did something wrong. I'm really just a hack when it comes to programming.

I guess I will know I have it all working when I get some form of comments and/or feedback showing up on this post, down below.

 [1]: http://dangillmor.com/2014/04/25/indie-web-important/
 [2]: http://indieweb.org
 [3]: https://bastianallgeier.com/notes/indie-web
 [4]: https://github.com/bastianallgeier/kirby-webmentions
 [5]: https://github.com/sebsel/seblog-kirby-webmentions
 [6]: https://webmention.rocks/
 [7]: https://github.com/getkirby/starterkit