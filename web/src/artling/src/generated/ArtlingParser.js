// Generated from Artling.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArtlingListener = require('./ArtlingListener').ArtlingListener;
var grammarFileName = "Artling.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0006\u0011\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0005\u0002\t\n\u0002\u0003\u0003\u0003\u0003\u0005\u0003",
    "\r\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0002\u0002\u0004\u0002",
    "\u0004\u0002\u0002\u0010\u0002\b\u0003\u0002\u0002\u0002\u0004\n\u0003",
    "\u0002\u0002\u0002\u0006\t\u0005\u0004\u0003\u0002\u0007\t\u0007\u0005",
    "\u0002\u0002\b\u0006\u0003\u0002\u0002\u0002\b\u0007\u0003\u0002\u0002",
    "\u0002\t\u0003\u0003\u0002\u0002\u0002\n\f\u0007\u0003\u0002\u0002\u000b",
    "\r\u0007\u0004\u0002\u0002\f\u000b\u0003\u0002\u0002\u0002\f\r\u0003",
    "\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e\u000f\u0007",
    "\u0006\u0002\u0002\u000f\u0005\u0003\u0002\u0002\u0002\u0004\b\f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'@'" ];

var symbolicNames = [ null, "AT", "INT", "WS", "LINE" ];

var ruleNames =  [ "content", "heading" ];

function ArtlingParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ArtlingParser.prototype = Object.create(antlr4.Parser.prototype);
ArtlingParser.prototype.constructor = ArtlingParser;

Object.defineProperty(ArtlingParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ArtlingParser.EOF = antlr4.Token.EOF;
ArtlingParser.AT = 1;
ArtlingParser.INT = 2;
ArtlingParser.WS = 3;
ArtlingParser.LINE = 4;

ArtlingParser.RULE_content = 0;
ArtlingParser.RULE_heading = 1;

function ContentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_content;
    return this;
}

ContentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentContext.prototype.constructor = ContentContext;

ContentContext.prototype.heading = function() {
    return this.getTypedRuleContext(HeadingContext,0);
};

ContentContext.prototype.WS = function() {
    return this.getToken(ArtlingParser.WS, 0);
};

ContentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.enterContent(this);
	}
};

ContentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.exitContent(this);
	}
};




ArtlingParser.ContentContext = ContentContext;

ArtlingParser.prototype.content = function() {

    var localctx = new ContentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ArtlingParser.RULE_content);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        switch(this._input.LA(1)) {
        case ArtlingParser.AT:
            this.state = 4;
            this.heading();
            break;
        case ArtlingParser.WS:
            this.state = 5;
            this.match(ArtlingParser.WS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HeadingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_heading;
    return this;
}

HeadingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadingContext.prototype.constructor = HeadingContext;

HeadingContext.prototype.AT = function() {
    return this.getToken(ArtlingParser.AT, 0);
};

HeadingContext.prototype.LINE = function() {
    return this.getToken(ArtlingParser.LINE, 0);
};

HeadingContext.prototype.INT = function() {
    return this.getToken(ArtlingParser.INT, 0);
};

HeadingContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.enterHeading(this);
	}
};

HeadingContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.exitHeading(this);
	}
};




ArtlingParser.HeadingContext = HeadingContext;

ArtlingParser.prototype.heading = function() {

    var localctx = new HeadingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ArtlingParser.RULE_heading);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.match(ArtlingParser.AT);
        this.state = 10;
        _la = this._input.LA(1);
        if(_la===ArtlingParser.INT) {
            this.state = 9;
            this.match(ArtlingParser.INT);
        }

        this.state = 12;
        this.match(ArtlingParser.LINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ArtlingParser = ArtlingParser;
