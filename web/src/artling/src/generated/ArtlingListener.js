// Generated from /home/aliaksandr/dev/ratio/web/src/artling/Artling.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ArtlingParser.
function ArtlingListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ArtlingListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ArtlingListener.prototype.constructor = ArtlingListener;

// Enter a parse tree produced by ArtlingParser#document.
ArtlingListener.prototype.enterDocument = function(ctx) {
};

// Exit a parse tree produced by ArtlingParser#document.
ArtlingListener.prototype.exitDocument = function(ctx) {
};


// Enter a parse tree produced by ArtlingParser#section.
ArtlingListener.prototype.enterSection = function(ctx) {
};

// Exit a parse tree produced by ArtlingParser#section.
ArtlingListener.prototype.exitSection = function(ctx) {
};


// Enter a parse tree produced by ArtlingParser#toc.
ArtlingListener.prototype.enterToc = function(ctx) {
};

// Exit a parse tree produced by ArtlingParser#toc.
ArtlingListener.prototype.exitToc = function(ctx) {
};


// Enter a parse tree produced by ArtlingParser#heading.
ArtlingListener.prototype.enterHeading = function(ctx) {
};

// Exit a parse tree produced by ArtlingParser#heading.
ArtlingListener.prototype.exitHeading = function(ctx) {
};


// Enter a parse tree produced by ArtlingParser#headingKey.
ArtlingListener.prototype.enterHeadingKey = function(ctx) {
};

// Exit a parse tree produced by ArtlingParser#headingKey.
ArtlingListener.prototype.exitHeadingKey = function(ctx) {
};


// Enter a parse tree produced by ArtlingParser#headingValue.
ArtlingListener.prototype.enterHeadingValue = function(ctx) {
};

// Exit a parse tree produced by ArtlingParser#headingValue.
ArtlingListener.prototype.exitHeadingValue = function(ctx) {
};



exports.ArtlingListener = ArtlingListener;