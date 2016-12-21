// Generated from Artling.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ArtlingParser.
function ArtlingListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ArtlingListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ArtlingListener.prototype.constructor = ArtlingListener;

// Enter a parse tree produced by ArtlingParser#content.
ArtlingListener.prototype.enterContent = function(ctx) {
};

// Exit a parse tree produced by ArtlingParser#content.
ArtlingListener.prototype.exitContent = function(ctx) {
};


// Enter a parse tree produced by ArtlingParser#heading.
ArtlingListener.prototype.enterHeading = function(ctx) {
};

// Exit a parse tree produced by ArtlingParser#heading.
ArtlingListener.prototype.exitHeading = function(ctx) {
};



exports.ArtlingListener = ArtlingListener;