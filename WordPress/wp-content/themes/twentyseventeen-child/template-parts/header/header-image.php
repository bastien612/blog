<?php

/**
 * Displays header media
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?>
<div class="custom-header">

  <div class="custom-header-media">
    <div class="main-cover-logo"></div>
    <!-- <div class="mon-slogan"></div> -->
    <div class="piece1"></div>
    <div class="piece2"></div>
    <div class="piece3"></div>
    <div class="piece4"></div>
    <div class="piece5"></div>
    <?php the_custom_header_markup(); ?>
  </div>

  <?php //get_template_part('template-parts/header/site', 'branding'); ?>

</div><!-- .custom-header -->