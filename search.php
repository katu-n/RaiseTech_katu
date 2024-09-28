<?php get_header();?>
                <article class="c-backimg">
                    <div class="c-backimg__black"></div>
                    <dl class="c-backimg__content">
                        <div class="c-backimg__wrapper">
                            <dt class="c-backimg__title u-robot-bold u-color-white">Search&#58;</dt>
                            <dd class="c-backimg__topic"><?php the_search_query();?></dd>
                        </div>
                    </dl>
                </article>

                <article class="common-wrapper">

                    <section class="c-subtext">
                        <h2 class="c-subtext__title u-m-1p-bold u-color-brown"><?php the_search_query();?>一覧</h2>
                        <p class="c-subtext__content u-m-1p-regular u-color-brown">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                    </section>

                    <?php 
                    $args = array(
                        'post_type' => 'post' //投稿タイプを「post」に限定する
                    );
                    $query = new WP_Query($args);
                    if($query->have_posts()):?>
                    <?php while($query->have_posts()) : $query->the_post();
                        get_template_part('template-parts/card');
                        endwhile;
                    ?>
                    <?php else:?>
                        <p>投稿が見つかりませんでした。</p>
                        <?php endif;wp_reset_postdata();?>
                    <!-- プラグインのページネーション -->
                <?php wp_pagenavi();?>
                </article>

            </div>
        <div class="l-humberger__overlay"></div>

    <?php get_sidebar();?>
    </div>
<?php get_footer();?>