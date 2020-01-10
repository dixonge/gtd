---
title: Code Snippets
author: Glenn Dixon
type: page
date: 2018-07-21T22:05:25+00:00
layout: layouts/latest.njk
tags:
  - nav
navtitle: Code Snippets
---
Accessible from anywhere, public (because, why not?), easy to copy/reuse. Perfect.

#### Download articles from Medium (without a subscription, even if you exceed free article allowance)

    wget -m -np --page-requisites --adjust-extension --convert-links <medium link>

#### VS Code Regex to find line beginning with specific text and append to end of line

    ^(find-this.*)
    
    $1append-this

#### Rename folders by moving date from end to beginning of folder name

    rename -v -- 's/^(.*)-(\d{4})-(\d{2})-(\d{2})/$2-$3-$4-$1/' *

#### Rename photos with name followed by original file date/timestamp

    exiftool '-filename<file-name-text-goes-here-$CreateDate' -d %Y-%m-%d_%H-%M-%S%%-c.%%le *.jpg
    

#### Set photo title and description with exiftool

    exiftool -title='Title goes here' -description='Description goes here' .
    

#### Kernel customization to enable Elan touchpad on Lenovo Ideapad 330 w/ Ubuntu 18.04:

      #ifdef CONFIG_ACPI static const struct acpi_device_id elan_acpi_id[] = {
    { "ELAN0000", 0 },
    { "ELAN0100", 0 },
    { "ELAN0600", 0 },
    { "ELAN0602", 0 },
    { "ELAN0605", 0 },
    { "ELAN0608", 0 },
    { "ELAN0609", 0 },
    { "ELAN060B", 0 },
    { "ELAN060C", 0 },
    { "ELAN0611", 0 },
    { "ELAN0612", 0 },
    { "ELAN0618", 0 },
    { "ELAN061C", 0 },      <-add this 
    { "ELAN061D", 0 },      <- and this for the lenovo 330 with the core i3
    { "ELAN1000", 0 },
    { } }; MODULE_DEVICE_TABLE(acpi, elan_acpi_id);
    #endif
    

#### Extract Title and Description from json file and write it to jpg file after downloading from Flickr using Flickr Downloadr

    for jpg in *.jpg; do exiftool -json=$jpg.json $jpg; done 
    

#### Rename files in all subdirectories

    find . -iname pattern.ext -exec rename 's/oldname/newname/' '{}' \;
    

If the file name is the same, just use filename instead of 'pattern.ext' - if the file names are different, use a pattern like '*.md'

#### Delete line X only if blank in all files in a folder

    find ./ -type f -exec sed '1{/^$/d}' {} \; 
    

#### Delete a line if it matches a pattern in all files in a folder

    sudo find ./ -type f -exec sed -i '/pattern-to-match/d' {} \;  
    

#### Delete lines &#42;after&#42; a pattern match in all files in a folder

    find ./ -type f -exec sed -e '/pattern/{n;N;N;N;N;d}' {} \;  
    

#### Add line of text to the beginning of all files in a folder

    find ./ -type f -exec sed -i '1s/^/ \n/' {} \;  
    

#### Make a folder for each file, then move files to their matching folder If you need to rename the file, add that at the end of the mv command line

    #!/bin/bash  dir="/somedir/" for i in "$dir"*; do if [ -f "$i" ]; then filename="${i%%.*}" if [ ! -d "$filename" ]; then sudo mkdir "$filename" fi sudo mv "$i" "$filename" fi done  
    

#### Match line and do a search/replace for multiple characters on all files

    sudo sed -i '/match:/s/to-replace/replace-with/g' *  
    

#### Use find and sed to search/replace in all files in all subdirectories

    find ./ -type f -exec sed -i -e 's/find-this/replace-with-this/g' {} \; 
    

#### Find text inside files in all subdirectories

    grep -rwl “search-string” /path/to/serch/dir
