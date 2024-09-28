<?php get_header();?>
                <article class="c-backimg">
                    <div class="c-backimg__black"></div>
                    <dl class="c-backimg__content">
                        <div class="c-backimg__wrapper">
                            <dt class="c-backimg__title u-robot-bold u-color-white">Menu&#58;</dt>
                            <!-- カテゴリー名の取得-->
                             <?php
                                $cat = get_the_category();
                                $cat = $cat[0];
                             ?>
                            <dd class="c-backimg__topic">
                                <!-- カテゴリー名の出力 -->
                                <?php echo $cat->name;?>
                            </dd>
                        </div>
                    </dl>
                </article>

                <article class="common-wrapper">

                    <section class="c-subtext">
                        <h2 class="c-subtext__title u-m-1p-bold u-color-brown"><?php echo $cat->name;?></h2>
                        <p class="c-subtext__content u-m-1p-regular u-color-brown">
                            <?php
                        if(is_category() && category_description()){
                            echo category_description();
                        }
                        ?>
                        </p>
                    </section>
                   <?php if(have_posts()):?>
                    <?php
                    while(have_posts()): the_post();
                        get_template_part('template-parts/card'); 
                   endwhile;
                   ?>
                   <?php else:?>
                    <p>記事はありません。</p>
                    <?php endif;?>
                    <!-- プラグインのページネーション -->
                <?php wp_pagenavi();?>
                </article>

            </div>
        <div class="l-humberger__overlay"></div>

    <?php get_sidebar();?>
    </div>
<?php get_footer();?>