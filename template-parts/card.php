<section class="c-card">
    <div class="c-card__img">
        <?php if(has_post_thumbnail()):?>
            <?php the_post_thumbnail();?>
            <?php else:?>
            <img src="<?php echo get_template_directory_uri();?>/imgs/archive_content.png" alt="デフォルト画像">
        <?php endif;?>
    </div>
    <div class="c-card__text">
        <h2 class="u-m-1p-bold u-color-white"><?php the_title();?></h2>
        <h3 class="u-m-1p-bold u-color-white"><?php echo get_the_excerpt();?></h3>
        <a href="<?php the_permalink();?>" class="c-btn__archive u-m-1p-bold u-7070">詳しく見る</a>
    </div>
</section>