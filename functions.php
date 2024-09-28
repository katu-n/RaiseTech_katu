<?php
function custom_theme_support(){
    add_theme_support('html5',array(
        'search-form',
        'archive',
        'archive-search',
        'gallery',
        'caption',
        'index',
        'page',
        'single',
    ));
    //テーマのサポート
    add_theme_support('menus');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(array(
        'footer_nav'=>esc_html__('footer navigation','rtbread'),
        'category_nav'=>esc_html__('category navigation','rtbread'),
    ));
    add_theme_support('editor-styles');
    add_editor_style();
}
add_action('after_setup_theme','custom_theme_support');

//タイトル出力
function RaiseTech_title($title){
    if(is_front_page()&& is_home()){
        $title=get_bloginfo('name','display');
    }elseif(is_singular()){
        $title=single_post_title('',false);
    }
        return $title;
}
add_filter('pre_get_document_title','RaiseTech_title');

//cssとjsの出力
function RaiseTech_script(){
    wp_enqueue_style('mplus1p','//fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap',array());
    wp_enqueue_style('Roboto','//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',array());
    wp_enqueue_style('ress','//unpkg.com/ress/dist/ress.min.css',array(),false,'all');
    wp_enqueue_style('style',get_theme_file_uri('style.css'),array('ress'),false,'all');
    if(is_front_page() || is_home()){
        wp_enqueue_script('script',get_theme_file_uri('js/main.js'),array(), null,true);
    }elseif(is_archive() || is_search()){
        wp_enqueue_script('achivescript',get_theme_file_uri('js/archive.js'),array(),null,true);
    }else {
        wp_enqueue_script('pageescript',get_theme_file_uri('js/single.js'),array(),null,true);
    }
}
add_action('wp_enqueue_scripts','RaiseTech_script');

function my_card_pre_get_posts($query){
    //achive
    if(is_page('archive')){
        $query->set('posts_per_page',3); //archive
    } elseif(is_page('archive_search')){
        $query->set('posts_per_page',5);
    }
}
add_action('per_get_posts','my_card_pre_get_posts');

//テーマのセット
function my_theme_setup(){
    register_nav_menus(array(
        'burger-menu' =>'バーガーメニュー',
        'side-menu' =>'サイドメニュー',
        'drink-menu' =>'ドリンクメニュー',
    ));
}
add_action('after_setup_theme','my_theme_setup');