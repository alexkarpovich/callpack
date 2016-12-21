// Generated from /home/aliaksandr/dev/ratio/web/src/artling/Artling.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArtlingListener = require('./ArtlingListener').ArtlingListener;
var grammarFileName = "Artling.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\n,\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0006\u0002\u0010\n\u0002\r\u0002\u000e\u0002\u0011\u0007\u0002",
    "\u0014\n\u0002\f\u0002\u000e\u0002\u0017\u000b\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0005\u0004\u001f",
    "\n\u0004\u0003\u0005\u0006\u0005\"\n\u0005\r\u0005\u000e\u0005#\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0003\u0003\u0003",
    "\b\b,\u0002\u0015\u0003\u0002\u0002\u0002\u0004\u0018\u0003\u0002\u0002",
    "\u0002\u0006\u001c\u0003\u0002\u0002\u0002\b!\u0003\u0002\u0002\u0002",
    "\n\'\u0003\u0002\u0002\u0002\f\u0014\u0005\u0004\u0003\u0002\r\u0014",
    "\u0005\n\u0006\u0002\u000e\u0010\u0007\b\u0002\u0002\u000f\u000e\u0003",
    "\u0002\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u000f\u0003",
    "\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0014\u0003",
    "\u0002\u0002\u0002\u0013\f\u0003\u0002\u0002\u0002\u0013\r\u0003\u0002",
    "\u0002\u0002\u0013\u000f\u0003\u0002\u0002\u0002\u0014\u0017\u0003\u0002",
    "\u0002\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002",
    "\u0002\u0002\u0016\u0003\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002",
    "\u0002\u0002\u0018\u0019\u0005\u0006\u0004\u0002\u0019\u001a\u0007\u0003",
    "\u0002\u0002\u001a\u001b\u0005\b\u0005\u0002\u001b\u0005\u0003\u0002",
    "\u0002\u0002\u001c\u001e\u0007\u0005\u0002\u0002\u001d\u001f\u0007\n",
    "\u0002\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002",
    "\u0002\u0002\u001f\u0007\u0003\u0002\u0002\u0002 \"\u0007\u0007\u0002",
    "\u0002! \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#!\u0003",
    "\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002",
    "%&\t\u0002\u0002\u0002&\t\u0003\u0002\u0002\u0002\'(\u0007\u0006\u0002",
    "\u0002()\u0007\u0004\u0002\u0002)*\u0007\u0006\u0002\u0002*\u000b\u0003",
    "\u0002\u0002\u0002\u0007\u0011\u0013\u0015\u001e#"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "' '", "'toc'", "'@'", "'*'" ];

var symbolicNames = [ null, null, null, "AT", "STAR", "ANY", "NEWLINE", 
                      "SPACETAB", "HEADING_SIZE" ];

var ruleNames =  [ "document", "heading", "headingMark", "headingText", 
                   "toc" ];

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
ArtlingParser.T__0 = 1;
ArtlingParser.T__1 = 2;
ArtlingParser.AT = 3;
ArtlingParser.STAR = 4;
ArtlingParser.ANY = 5;
ArtlingParser.NEWLINE = 6;
ArtlingParser.SPACETAB = 7;
ArtlingParser.HEADING_SIZE = 8;

ArtlingParser.RULE_document = 0;
ArtlingParser.RULE_heading = 1;
ArtlingParser.RULE_headingMark = 2;
ArtlingParser.RULE_headingText = 3;
ArtlingParser.RULE_toc = 4;

function DocumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_document;
    return this;
}

DocumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentContext.prototype.constructor = DocumentContext;

DocumentContext.prototype.heading = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HeadingContext);
    } else {
        return this.getTypedRuleContext(HeadingContext,i);
    }
};

DocumentContext.prototype.toc = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TocContext);
    } else {
        return this.getTypedRuleContext(TocContext,i);
    }
};

DocumentContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArtlingParser.NEWLINE);
    } else {
        return this.getToken(ArtlingParser.NEWLINE, i);
    }
};


DocumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.enterDocument(this);
	}
};

DocumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.exitDocument(this);
	}
};




ArtlingParser.DocumentContext = DocumentContext;

ArtlingParser.prototype.document = function() {

    var localctx = new DocumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ArtlingParser.RULE_document);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArtlingParser.AT) | (1 << ArtlingParser.STAR) | (1 << ArtlingParser.NEWLINE))) !== 0)) {
            this.state = 17;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ArtlingParser.AT:
                this.state = 10;
                this.heading();
                break;
            case ArtlingParser.STAR:
                this.state = 11;
                this.toc();
                break;
            case ArtlingParser.NEWLINE:
                this.state = 13; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 12;
                		this.match(ArtlingParser.NEWLINE);
                		break;
                	default:
                		throw new antlr4.error.NoViableAltException(this);
                	}
                	this.state = 15; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 21;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

HeadingContext.prototype.headingMark = function() {
    return this.getTypedRuleContext(HeadingMarkContext,0);
};

HeadingContext.prototype.headingText = function() {
    return this.getTypedRuleContext(HeadingTextContext,0);
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.headingMark();
        this.state = 23;
        this.match(ArtlingParser.T__0);
        this.state = 24;
        this.headingText();
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

function HeadingMarkContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_headingMark;
    return this;
}

HeadingMarkContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadingMarkContext.prototype.constructor = HeadingMarkContext;

HeadingMarkContext.prototype.AT = function() {
    return this.getToken(ArtlingParser.AT, 0);
};

HeadingMarkContext.prototype.HEADING_SIZE = function() {
    return this.getToken(ArtlingParser.HEADING_SIZE, 0);
};

HeadingMarkContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.enterHeadingMark(this);
	}
};

HeadingMarkContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.exitHeadingMark(this);
	}
};




ArtlingParser.HeadingMarkContext = HeadingMarkContext;

ArtlingParser.prototype.headingMark = function() {

    var localctx = new HeadingMarkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ArtlingParser.RULE_headingMark);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(ArtlingParser.AT);
        this.state = 28;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ArtlingParser.HEADING_SIZE) {
            this.state = 27;
            this.match(ArtlingParser.HEADING_SIZE);
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

function HeadingTextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_headingText;
    return this;
}

HeadingTextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadingTextContext.prototype.constructor = HeadingTextContext;

HeadingTextContext.prototype.NEWLINE = function() {
    return this.getToken(ArtlingParser.NEWLINE, 0);
};

HeadingTextContext.prototype.EOF = function() {
    return this.getToken(ArtlingParser.EOF, 0);
};

HeadingTextContext.prototype.ANY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArtlingParser.ANY);
    } else {
        return this.getToken(ArtlingParser.ANY, i);
    }
};


HeadingTextContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.enterHeadingText(this);
	}
};

HeadingTextContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.exitHeadingText(this);
	}
};




ArtlingParser.HeadingTextContext = HeadingTextContext;

ArtlingParser.prototype.headingText = function() {

    var localctx = new HeadingTextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ArtlingParser.RULE_headingText);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 30;
            this.match(ArtlingParser.ANY);
            this.state = 33; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ArtlingParser.ANY);
        this.state = 35;
        _la = this._input.LA(1);
        if(!(_la===ArtlingParser.EOF || _la===ArtlingParser.NEWLINE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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

function TocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_toc;
    return this;
}

TocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TocContext.prototype.constructor = TocContext;

TocContext.prototype.STAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArtlingParser.STAR);
    } else {
        return this.getToken(ArtlingParser.STAR, i);
    }
};


TocContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.enterToc(this);
	}
};

TocContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.exitToc(this);
	}
};




ArtlingParser.TocContext = TocContext;

ArtlingParser.prototype.toc = function() {

    var localctx = new TocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ArtlingParser.RULE_toc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.match(ArtlingParser.STAR);
        this.state = 38;
        this.match(ArtlingParser.T__1);
        this.state = 39;
        this.match(ArtlingParser.STAR);
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
