// Generated from /home/aliaksandr/dev/ratio/web/src/artling/ArtlingLexer.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0006\u001e\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t",
    "\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0006\u0002",
    "\u000e\n\u0002\r\u0002\u000e\u0002\u000f\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0006\u0004\u0017\n\u0004\r\u0004\u000e",
    "\u0004\u0018\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0002",
    "\u0006\u0004\u0003\u0006\u0004\b\u0005\n\u0006\u0004\u0002\u0003\u0004",
    "\u0005\u0002C\\aac|\u0003\u0002>>\u001e\u0002\u0004\u0003\u0002\u0002",
    "\u0002\u0002\u0006\u0003\u0002\u0002\u0002\u0002\b\u0003\u0002\u0002",
    "\u0002\u0003\n\u0003\u0002\u0002\u0002\u0004\r\u0003\u0002\u0002\u0002",
    "\u0006\u0011\u0003\u0002\u0002\u0002\b\u0016\u0003\u0002\u0002\u0002",
    "\n\u001a\u0003\u0002\u0002\u0002\f\u000e\t\u0002\u0002\u0002\r\f\u0003",
    "\u0002\u0002\u0002\u000e\u000f\u0003\u0002\u0002\u0002\u000f\r\u0003",
    "\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u0005\u0003",
    "\u0002\u0002\u0002\u0011\u0012\u0007>\u0002\u0002\u0012\u0013\u0003",
    "\u0002\u0002\u0002\u0013\u0014\b\u0003\u0002\u0002\u0014\u0007\u0003",
    "\u0002\u0002\u0002\u0015\u0017\n\u0003\u0002\u0002\u0016\u0015\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\t\u0003",
    "\u0002\u0002\u0002\u001a\u001b\u0007@\u0002\u0002\u001b\u001c\u0003",
    "\u0002\u0002\u0002\u001c\u001d\b\u0005\u0003\u0002\u001d\u000b\u0003",
    "\u0002\u0002\u0002\u0006\u0002\u0003\u000f\u0018\u0004\u0004\u0003\u0002",
    "\u0004\u0002\u0002"].join("");


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
ArtlingLexer.ID = 1;
ArtlingLexer.OPEN_TAG = 2;
ArtlingLexer.TEXT = 3;
ArtlingLexer.CLOSE = 4;

ArtlingLexer.TAG = 1;

ArtlingLexer.prototype.modeNames = [ "DEFAULT_MODE", "TAG" ];

ArtlingLexer.prototype.literalNames = [ null, null, "'<'", null, "'>'" ];

ArtlingLexer.prototype.symbolicNames = [ null, "ID", "OPEN_TAG", "TEXT", 
                                         "CLOSE" ];

ArtlingLexer.prototype.ruleNames = [ "ID", "OPEN_TAG", "TEXT", "CLOSE" ];

ArtlingLexer.prototype.grammarFileName = "ArtlingLexer.g4";



exports.ArtlingLexer = ArtlingLexer;

