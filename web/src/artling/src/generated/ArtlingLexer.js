// Generated from /home/aliaksandr/dev/ratio/web/src/artling/Artling.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\n(\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0005\u0007!\n\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0002\u0002\n\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0003",
    "\u0002\u0004\u0004\u0002\u000b\u000b\"\"\u0003\u000228(\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0003\u0013",
    "\u0003\u0002\u0002\u0002\u0005\u0015\u0003\u0002\u0002\u0002\u0007\u0019",
    "\u0003\u0002\u0002\u0002\t\u001b\u0003\u0002\u0002\u0002\u000b\u001d",
    "\u0003\u0002\u0002\u0002\r \u0003\u0002\u0002\u0002\u000f$\u0003\u0002",
    "\u0002\u0002\u0011&\u0003\u0002\u0002\u0002\u0013\u0014\u0007\"\u0002",
    "\u0002\u0014\u0004\u0003\u0002\u0002\u0002\u0015\u0016\u0007v\u0002",
    "\u0002\u0016\u0017\u0007q\u0002\u0002\u0017\u0018\u0007e\u0002\u0002",
    "\u0018\u0006\u0003\u0002\u0002\u0002\u0019\u001a\u0007B\u0002\u0002",
    "\u001a\b\u0003\u0002\u0002\u0002\u001b\u001c\u0007,\u0002\u0002\u001c",
    "\n\u0003\u0002\u0002\u0002\u001d\u001e\u000b\u0002\u0002\u0002\u001e",
    "\f\u0003\u0002\u0002\u0002\u001f!\u0007\u000f\u0002\u0002 \u001f\u0003",
    "\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002",
    "\"#\u0007\f\u0002\u0002#\u000e\u0003\u0002\u0002\u0002$%\t\u0002\u0002",
    "\u0002%\u0010\u0003\u0002\u0002\u0002&\'\t\u0003\u0002\u0002\'\u0012",
    "\u0003\u0002\u0002\u0002\u0004\u0002 \u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ArtlingLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ArtlingLexer.prototype = Object.create(antlr4.Lexer.prototype);
ArtlingLexer.prototype.constructor = ArtlingLexer;

ArtlingLexer.EOF = antlr4.Token.EOF;
ArtlingLexer.T__0 = 1;
ArtlingLexer.T__1 = 2;
ArtlingLexer.AT = 3;
ArtlingLexer.STAR = 4;
ArtlingLexer.ANY = 5;
ArtlingLexer.NEWLINE = 6;
ArtlingLexer.SPACETAB = 7;
ArtlingLexer.HEADING_SIZE = 8;


ArtlingLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ArtlingLexer.prototype.literalNames = [ null, "' '", "'toc'", "'@'", "'*'" ];

ArtlingLexer.prototype.symbolicNames = [ null, null, null, "AT", "STAR", 
                                         "ANY", "NEWLINE", "SPACETAB", "HEADING_SIZE" ];

ArtlingLexer.prototype.ruleNames = [ "T__0", "T__1", "AT", "STAR", "ANY", 
                                     "NEWLINE", "SPACETAB", "HEADING_SIZE" ];

ArtlingLexer.prototype.grammarFileName = "Artling.g4";



exports.ArtlingLexer = ArtlingLexer;

