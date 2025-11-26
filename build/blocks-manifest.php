<?php
// This file is generated. Do not modify it manually.
return array(
	'chaser-site-links' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/chaser-site-links',
		'version' => '0.1.0',
		'title' => 'Chaser Site Links',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'reviewTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'reviewId' => array(
				'type' => 'number',
				'default' => 0
			)
		),
		'textdomain' => 'chaser-site-links',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
