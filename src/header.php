<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title><?php echo get_bloginfo('title'); ?></title>
  <meta name="description" content="<?php echo get_bloginfo('description') ?>" />
  <link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>" media="screen" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  HEADER
