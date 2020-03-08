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


  <!-- <div class="custom-header-media">-->
    <?php //the_custom_header_markup(); ?>
    <!--<div class="call-to-action">
      <h1>BIMERS</h1> -->
      <!-- http://localhost:8080/wp-content/uploads/2020/02/cropped-01022020-adli-wahid-A87rz-MJN_E-unsplash-2.jpg -->
      <!-- <div class='img-title'>
      <img src="http://localhost:8080/wp-content/uploads/2020/02/bimers-police-blanc-png.png" onerror="console.log('fail')">
      </div> -->
      <!-- <span>La communauté du BIM en Nouvelle-Aquitaine</span>
      <div class="call-to-action-button">
        <button>S'inscrire</button>
      </div>
    </div>
  </div> -->

  <div class="custom-header-media">
    <?php the_custom_header_markup(); ?>
  </div>

  <?php //get_template_part('template-parts/header/site', 'branding'); ?>

</div><!-- .custom-header -->