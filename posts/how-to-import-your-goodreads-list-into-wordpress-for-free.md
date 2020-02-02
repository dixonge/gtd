---
eleventyNavigation:
  parent: HowTo
  key: How to Import Your GoodReads List Into WordPress, for free
author: Glenn Dixon
layout: layouts/home.njk
date: 2018-07-28T03:39:57+00:00
permalink: /posts/how-to-import-your-goodreads-list-into-wordpress-for-free/
categories:
  - GoodReads
  - HowTo
tags:
  - posts
---
![](/img/2018/07/goodreads.jpg)

Here are the steps I took in order to get all of my GoodReads books/reviews over into my IndieWeb-ified Wordpress:

Prerequisites:

  * A GoodReads account with a decent amount of books reviewed and/or starred 
  * A self-hosted WordPress site 
      * Twenty Seventeen theme (could work with others)
      * [Advanced Custom Fields][1] plugin to work with extra data
      * I am using the [post-kinds][2] plugin - not required
  * Export from GoodReads > csv file 
      * My Books > Import/Export > Export Library 
      * Clean up CSV file - spreadsheet is good, be sure to save it back as text/csv (not xls or odt) 
          * remove un-needed/unwanted columns 
          * relabel columns to match WordPress fields (**Important!**) 
              * post_type column - all should be set to _post_ 
              * post_title column - for book titles 
              * post_content column - for the actual content of your review 
              * post_excerpt column - for the actual content of your review excerpt (if any) 
              * Add column for post_kind - set it to _read_ (not sure if this will work) 
              * Change any additional column headers to whatever you want - _these will become custom fields on import_ 
  * Install [Really Simple CSV Importer][3] plugin 
      * Yes, it's old, but it still works! 
      * Run import (Tools > Import > CSV-Run Importer) 
      * The posts should automatically be set to draft status
      * On import, it seems to take the post date from the 'date read' column, which is ideal 
      * Once you hit publish, the date is reset to the current day and is irretrievably lost! 
          * Possible workaround is to use SQL to copy the date from the date-read custom field back to the publish date (haven't done this yet) 
      * If the post kind isn't set you'll need to use an SQL query in PHPMyAdmin

After import you'll need to add some PHP and CSS to display the new custom fields, most likely inside the_loop - where this is will depend on your theme. For Twenty Seventeen I did the officially recommended child theme and am inserting my code there under Template Parts > Post > content.php - here is my code, just to give you an example. This php statement pulls in the number of pages, which is one of the columns I imported:

    <?php
    $pages = get_post_meta($post->ID, 'pages', true);
    ?>


Your pages will now be assigned to the '$pages' variable, which you can use to display that number like this:

    <?php 
    if ($pages) { ?>
    <p class="book-meta">Pages: <? echo $pages; ?></p>
    <?php } 
    else 
    { 
    // do nothing; } 
    ?> 


One thing that does _not_ get imported from GoodReads is book cover images. However, if you have the isbn or isbn13 number, I found a way to hotlink to book cover images using [Open Library][4]. They are specifically set up for just that purpose. Here is my code to assign the isbn to a variable:

    $isbn13 = get_post_meta($post->ID, 'isbn13', true);


And here is how to structure the html to display a medium-sized book cover image:

    <?php 
    if ($isbn13) { ?>
    <a href="http://openlibrary.org/isbn/<?php echo $isbn13; ?>
    "><img align="right" src="http://covers.openlibrary.org/b/isbn/
    <?php echo $isbn13; ?>-M.jpg"></a>
    <?php
    } 
    else { 
    // do nothing; 
    }
    ?>

[1]: https://wordpress.org/plugins/advanced-custom-fields/
[2]: https://wordpress.org/plugins/indieweb-post-kinds/
[3]: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjIm9e8rc7cAhVE4qwKHc_6BDcQFjAAegQIAxAC&url=https%3A%2F%2Fwordpress.org%2Fplugins%2Freally-simple-csv-importer%2F&usg=AOvVaw0oJgAp4p5VTMFAzwDJmhhE
[4]: https://blog.openlibrary.org/2018/05/06/turn-your-website-into-a-library/