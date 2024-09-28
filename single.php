<?php get_header();?>
                <article class="l-common__third-img c-top__single" style="background-image: url(<?php echo wp_get_attachment_url(get_post_thumbnail_id());?>);">
                    <div class="c-top__inner">
                        <h1 class="c-top__title u-m-1p-bold u-color-white u-img-title"><?php the_title();?></h1>
                    </div>
                </article>

                
                <article class="common-wrapper">
                    <?php if(have_posts()):?>
                    <?php while(have_posts()): the_post();?>
                        <?php the_content();?>
                        <?php endwhile;?>
                        <?php endif;?>
                </article>

        </div>
    
        <div class="l-humberger__overlay"></div>
    <?php get_sidebar();?>
    </div>
<?php get_footer();?>