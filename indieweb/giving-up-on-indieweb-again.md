---
eleventyNavigation:
  parent: IndieWeb
  key: Giving Up On IndieWeb - Again!
author: Glenn Dixon
permalink: /indieweb/giving-up-on-indieweb-again/
categories:
  - IndieWeb
tags:
  - posts
  - notes
---
I have a [long, tortured history](https://glenn.thedixons.net/giving-up-on-indieweb) with the IndieWeb. It's like social media - each time I think I'm over it I rage-quit and then I later return. I forget all the bad things and remember only the good and I tell myself *this time it will be different.* In other words, I never learn.

Once again I have spent countless hours setting up #IndieWeb things on my site - microformats, webmentions, etc. - and connected to IndieAuth and set up tokens. This time I even added a newsreader connection via Together and/or [Monocle](https://monocle.p3k.io) clients and Baffle and NewsBlur and Aperture services so I could ... well, evidently so I could do what I was already doing with Feedly and Reeder -- read RSS subscriptions! For some reason I thought I was going to end up with something like what Aaron Parecki seems to have, which is an all-in-one reader which also allows him to reply and share, etc. 

But no, I need micropub. Micropub is the magic key that unlocks options in my IndieWeb Reader client so I can favorite and reply right there. It seemed like I was getting close. But micropub seems to be really hard to set up for static sites. So I found a possible solution on Github and deployed it to Heroku and tried to configure it and it built successfully and I ran it and..............ERRORS. Always with the errors. Not helpful errors, just things like "cannot get" and "sorry that didn't work" sort of errors. And I have been unable to find or get solutions.

And it seems like I am learning this lesson all over again. Multiple lessons. First, IndieWeb is being created by enthusiasts who are generally programmers. They create tools, but they create them for other programmers. Second, this means that even if I *did* get everything set up and working seamlessly, it would only be useful for communicating with other fellow IndieWeb enthusiasts, almost all of whom are programmers. We could talk about, well, programming all things IndieWeb. So all this work for niche subject communications with fellow niche tribe members using extremely niche protocols and apps. Third, the primary means of doing this is by reading their web sites then copying the link of a post, returning to your own web site, and then typing out a reply to it. If your IndieWeb setup is strong, the two posts will be connected and replies will synchronize to both sites. This the pain point that the Monocle/Aperture reader setup is supposed to streamline. But it requires micropub. Fourth, as a summary, a lot of hours to enable talking to a few people about obscure things using obscure tech that is extremely difficult if not impossible to set up. 

THIS. This is why people put up with all the bullshit and surveillance of 'silo' communities. Because they're not programmers! Even enthusiasts like myself (who happens to have front end web dev experience) are only willing to go so far to move away from said silos. For enthusiasts such as us, the IndieWeb is really going to have to develop one-click install solutions. Hell, even in the programmer community IndieWeb is extremely niche! If you can't get better adoption there, why expect it to happen with people who can not, in fact, write programs in javascript?

But I do have to stop and think -- what if someone drops a solution in my lap in the next few days. Things are fixed and working. I can read through IndieWeb feeds and just hit reply right in my reader. Replies and comments just flow back and forth as intended. Would I forget my frustrations and settle in and be happy? Six months from now, would I be excited about my growing web of IndieWeb friends networked replies?

Frankly, probably not. My reasons for implementing IndieWeb is mainly one of philosophy and theory. I wouldn't want to do it just so I could then talk about it. I didn't migrate my blog from Hugo to [Eleventy](https://11ty.io) just so I could stop hanging out with Hugo developers and instead start hanging out with Eleventy developers! I did it to make my blogging workflow easier! And so far it seems to be a big success. I can actually figure out how the hell the templating system works and make changes that have predictable results. But my goal wasn't to write about the tech, it was to write about *everything else.* So why implement IndieWeb if the only way to use it is in interactions with other users? What if by using Eleventy the only people who could comment on my posts were other people who use Eleventy? Wouldn't that just be a self-hosted topical silo? I thought the whole purpose was to break *free* of those!

So now I am faced with the fact that my one shot at micropub has failed and there *are* no other solutions available to me. And without micropub and the interactivity it promises (as limited as that is) I'm stuck with clunky workflows. And that means I probably won't use it, since it's a royal pain in the ass. So why am I bothering at all? Wouldn't my time be better spent doing other useful things on my sites? I have a to-do list already. I need search and commenting (I guess) and lots of CSS formatting and style fixes to implement. Hell, if I hadn't lost my mind and tried all of this IndieWeb configuration again, I might have already had those things done!

So yeah, I'm giving up on IndieWeb again. Now if you'll excuse me, I have a lot of code to start deleting...