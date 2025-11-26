<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php 

$review_id = $attributes['reviewId'] ?? 0;

?>

<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Chaser Site Links – OMG I CAN DO IT OMG! ' . $review_id, 'chaser-site-links' ); ?>
</p>
