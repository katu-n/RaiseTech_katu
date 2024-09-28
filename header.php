<!DOCTYPE html>
<html lang="<?php language_attributes();?>">
<head>
    <meta charset="<?php bloginfo('charset');?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head();?>
</head>
<body <?php body_class();?>>
    <div class="l-main__wrapper l-humberger__fixed">
        <div class="l-main__colum">
            <header class="l-header__box u-header__back">
                <h1 class="l-header__title u-roboto-bold"><a href="<?php echo esc_url(home_url());?>"><?php bloginfo('name');?></a></h1>
                    <?php get_search_form();?>
                    <h2 class="l-humberger__btn u-roboto-bold u-menu toggle__btn">Menu</h2>
                </header>