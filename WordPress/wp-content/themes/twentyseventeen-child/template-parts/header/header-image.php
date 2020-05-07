<?php
/**
 * Displays header media
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since Twenty Seventeen 1.0
 * @version 1.0
 */

?>
<div class="custom-header">
		<div class="custom-header-media">
			<?php the_custom_header_markup(); ?>
    </div>

    <?php if ( is_front_page() ) : ?>
    <div class="floating-logo"></div>
    <div class="floating-brand-name"></div>
    <div class="floating-slogan"></div>
    <?php else : ?>
		<?php endif; ?>
	<?php get_template_part( 'template-parts/header/site', 'branding' ); ?>

</div><!-- .custom-header -->
