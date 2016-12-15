function createSprite( inputs, exits ) {
	var $spriteDocument = cheerio.load( '<svg><defs></defs></svg>', { xmlMode: true } );
	var $spriteSvg = $spriteDocument( 'svg' );
	var $spriteDefs = $spriteDocument( 'defs' ).first();

	inputs.svgs.forEach( function ( svg ) {
var $svgDocument = cheerio.load( svg.content, {
	normalizeWhitespace: true,
	xmlMode:             true
} );

removeEmptyElements( $svgDocument );

var $svg = $svgDocument( 'svg' );
var $svgTitle = $svgDocument( 'title' );
var $svgDescription = $svgDocument( 'desc' );
var $svgDefs = $svgDocument( 'defs' ).first();

$spriteDefs.append( $svgDefs.html() );
$svgDefs.remove();

var title = $svgTitle.first().html();
var description = $svgDescription.first().html();

// remove title and description as we will re-add them when
// generating the symbol
$svgTitle.remove();
$svgDescription.remove();

// if there is no title, use the provided id
title = title || svg.id;

$symbolDocument = generateSymbol( svg.id, $svg, title, description );

// append the generated <symbol> to the SVG sprite
$spriteSvg.append( $symbolDocument.html() );
	} );

	return exits.success( $spriteDocument.html() );
}