// Generated from Artling.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0006\u001e\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0006\u0003\u000f\n\u0003\r\u0003\u000e\u0003\u0010\u0003\u0004\u0006",
    "\u0004\u0014\n\u0004\r\u0004\u000e\u0004\u0015\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0006\u0005\u001b\n\u0005\r\u0005\u000e\u0005\u001c\u0002",
    "\u0002\u0006\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u0003\u0002",
    "\u0004\u0005\u0002\u000b\f\u000f\u000f\"\"\u0005\u0002\f\f\u000f\u000f",
    "`` \u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0003\u000b\u0003\u0002\u0002\u0002\u0005\u000e\u0003\u0002\u0002",
    "\u0002\u0007\u0013\u0003\u0002\u0002\u0002\t\u001a\u0003\u0002\u0002",
    "\u0002\u000b\f\u0007B\u0002\u0002\f\u0004\u0003\u0002\u0002\u0002\r",
    "\u000f\u00042;\u0002\u000e\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003",
    "\u0002\u0002\u0002\u0010\u000e\u0003\u0002\u0002\u0002\u0010\u0011\u0003",
    "\u0002\u0002\u0002\u0011\u0006\u0003\u0002\u0002\u0002\u0012\u0014\t",
    "\u0002\u0002\u0002\u0013\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003",
    "\u0002\u0002\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003",
    "\u0002\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0018\b",
    "\u0004\u0002\u0002\u0018\b\u0003\u0002\u0002\u0002\u0019\u001b\t\u0003",
    "\u0002\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002",
    "\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002",
    "\u0002\u0002\u001d\n\u0003\u0002\u0002\u0002\u0006\u0002\u0010\u0015",
    "\u001c\u0003\b\u0002\u0002"].join("");


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
ArtlingLexer.INT = 2;
ArtlingLexer.WS = 3;
ArtlingLexer.LINE = 4;


ArtlingLexer.modeNames = [ "DEFAULT_MODE" ];

ArtlingLexer.literalNames = [ null, "'@'" ];

ArtlingLexer.symbolicNames = [ null, "AT", "INT", "WS", "LINE" ];

ArtlingLexer.ruleNames = [ "AT", "INT", "WS", "LINE" ];

ArtlingLexer.grammarFileName = "Artling.g4";



exports.ArtlingLexer = ArtlingLexer;

