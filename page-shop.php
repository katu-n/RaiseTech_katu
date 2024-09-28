<?php get_header();?>
                <article class="l-common__four-img c-top__single">
                    <div class="c-top__inner">
                        <h1 class="c-top__title u-m-1p-bold u-color-white u-img-title"><?php the_title();?></h1>
                    </div>
                </article>

                <article class="common-wrapper">
                    <?php 
                        if(have_posts()):
                            while(have_posts()):the_post();
                    ?>
                 <?php the_content();endwhile;?>
                 <?php else:?>
                    <p>投稿が見つかりませんでした。</p>
                    <?php endif;?>

                </article>

        </div>
    
        <div class="l-humberger__overlay"></div>

    <?php get_sidebar();?>
    </div>
<?php get_footer();?>