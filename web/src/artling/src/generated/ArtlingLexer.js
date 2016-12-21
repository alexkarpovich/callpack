// Generated from /home/aliaksandr/dev/ratio/web/src/artling/Artling.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\t7\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005+\n\u0005\u0003\u0006\u0005\u0006",
    ".\n\u0006\u0003\u0006\u0003\u0006\u0005\u00062\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0002\u0002\t\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0003\u0002\u0004\u0004\u0002\f\f\u000f",
    "\u000f\u0003\u0002389\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0003\u0011",
    "\u0003\u0002\u0002\u0002\u0005\u0013\u0003\u0002\u0002\u0002\u0007\u0015",
    "\u0003\u0002\u0002\u0002\t*\u0003\u0002\u0002\u0002\u000b1\u0003\u0002",
    "\u0002\u0002\r3\u0003\u0002\u0002\u0002\u000f5\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0007B\u0002\u0002\u0012\u0004\u0003\u0002\u0002\u0002",
    "\u0013\u0014\u0007,\u0002\u0002\u0014\u0006\u0003\u0002\u0002\u0002",
    "\u0015\u0016\u0007\"\u0002\u0002\u0016\b\u0003\u0002\u0002\u0002\u0017",
    "\u0018\u0007v\u0002\u0002\u0018\u0019\u0007q\u0002\u0002\u0019+\u0007",
    "e\u0002\u0002\u001a\u001b\u0007v\u0002\u0002\u001b\u001c\u0007c\u0002",
    "\u0002\u001c\u001d\u0007d\u0002\u0002\u001d\u001e\u0007n\u0002\u0002",
    "\u001e\u001f\u0007g\u0002\u0002\u001f \u0007\"\u0002\u0002 !\u0007q",
    "\u0002\u0002!\"\u0007h\u0002\u0002\"#\u0007\"\u0002\u0002#$\u0007e\u0002",
    "\u0002$%\u0007q\u0002\u0002%&\u0007p\u0002\u0002&\'\u0007v\u0002\u0002",
    "\'(\u0007g\u0002\u0002()\u0007p\u0002\u0002)+\u0007v\u0002\u0002*\u0017",
    "\u0003\u0002\u0002\u0002*\u001a\u0003\u0002\u0002\u0002+\n\u0003\u0002",
    "\u0002\u0002,.\u0007\u000f\u0002\u0002-,\u0003\u0002\u0002\u0002-.\u0003",
    "\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/2\u0007\f\u0002\u00020",
    "2\u0007\u000f\u0002\u00021-\u0003\u0002\u0002\u000210\u0003\u0002\u0002",
    "\u00022\f\u0003\u0002\u0002\u000234\n\u0002\u0002\u00024\u000e\u0003",
    "\u0002\u0002\u000256\t\u0003\u0002\u00026\u0010\u0003\u0002\u0002\u0002",
    "\u0006\u0002*-1\u0002"].join("");


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
ArtlingLexer.AT = 1;
ArtlingLexer.STAR = 2;
ArtlingLexer.SPACE = 3;
ArtlingLexer.TOC = 4;
ArtlingLexer.NEWLINE = 5;
ArtlingLexer.NOT_NEWLINE_CHAR = 6;
ArtlingLexer.HEADING_SIZE = 7;


ArtlingLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ArtlingLexer.prototype.literalNames = [ null, "'@'", "'*'", "' '" ];

ArtlingLexer.prototype.symbolicNames = [ null, "AT", "STAR", "SPACE", "TOC", 
                                         "NEWLINE", "NOT_NEWLINE_CHAR", 
                                         "HEADING_SIZE" ];

ArtlingLexer.prototype.ruleNames = [ "AT", "STAR", "SPACE", "TOC", "NEWLINE", 
                                     "NOT_NEWLINE_CHAR", "HEADING_SIZE" ];

ArtlingLexer.prototype.grammarFileName = "Artling.g4";



exports.ArtlingLexer = ArtlingLexer;

