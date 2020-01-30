---
eleventyNavigation:
  parent: Tools
  key: Fun with exiftool!
author: Glenn Dixon
layout: layouts/post.njk
date: 2018-08-01T21:23:54+00:00
permalink: /posts/fun-with-exiftool/
categories:
  - Tools
tags:
  - posts
  - notes
---
So I'm moving some files from one Flickr account to another, and since there is no existing tool to do this directly, I have to download them and re-upload them. Unfortunately all the work I did adding titles and descriptions will be lost if I simply download the albums using Flickr's download button, because they don't write that data to the exif or iptc metadata in the image file.

So - I use [Flickr Downloadr][1] to handle the downloads, but it copies the title and description into a separate json file. I got to spend several hours beating my head against a brick wall until I finally found the correct syntax and a bash for-loop to extract this metadata from the json files and insert it into the image files. Now when I upload them, Flickr sees the metadata in the correct fields and auto-populates the Title and Description and all is well in the world.

Code has been added to my [Code Snippets][2] page, if you ever find yourself in a similar place&#8230;

[1]: https://flickrdownloadr.com/
[2]: https://glenn.thedixons.net/code-snippets/