<?php

include_once 'TestBlockController.php';

if (function_exists('acf_add_local_field_group')):

    acf_register_block(array(
        'name' => 'g-test-block',
        'title' => __('TestBlock'),
        'description' => __('TestBlock'),
        'render_callback' => 'gutenberg_render',
        'category' => 'formatting',
        'mode' => 'edit',
        'keywords' => array('TestBlock'),
    ));

endif;
