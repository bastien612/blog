<?php
add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');
function my_theme_enqueue_styles()
{

    $parent_style = 'parent-style'; // This is 'twentyseventeen-style' for the Twenty Seventeen theme.

    wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css');
    wp_enqueue_style(
        'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array($parent_style),
        wp_get_theme()->get('Version')
    );

    wp_enqueue_script(
      'custom',
      get_bloginfo('stylesheet_directory') . '/assets/js/custom-1.js',
      array('jquery'),
      '',
      true
  );

  wp_register_script('gsap3', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js');
  wp_enqueue_script('gsap3');
}