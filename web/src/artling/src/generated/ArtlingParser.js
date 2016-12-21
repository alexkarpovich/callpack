// Generated from /home/aliaksandr/dev/ratio/web/src/artling/Artling.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArtlingListener = require('./ArtlingListener').ArtlingListener;
var grammarFileName = "Artling.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\t0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003\u0002",
    "\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0018\n\u0003\u0003\u0004",
    "\u0003\u0004\u0005\u0004\u001c\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006\'\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0006",
    "\u0007,\n\u0007\r\u0007\u000e\u0007-\u0003\u0007\u0003-\u0002\b\u0002",
    "\u0004\u0006\b\n\f\u0002\u0002/\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0004\u0017\u0003\u0002\u0002\u0002\u0006\u0019\u0003\u0002\u0002\u0002",
    "\b \u0003\u0002\u0002\u0002\n$\u0003\u0002\u0002\u0002\f+\u0003\u0002",
    "\u0002\u0002\u000e\u0010\u0005\u0004\u0003\u0002\u000f\u000e\u0003\u0002",
    "\u0002\u0002\u0010\u0013\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002",
    "\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0003\u0003\u0002",
    "\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0014\u0018\u0005\u0006",
    "\u0004\u0002\u0015\u0018\u0005\b\u0005\u0002\u0016\u0018\u0007\u0007",
    "\u0002\u0002\u0017\u0014\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002",
    "\u0002\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u0005\u0003\u0002",
    "\u0002\u0002\u0019\u001b\u0007\u0004\u0002\u0002\u001a\u001c\u0007\u0006",
    "\u0002\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002",
    "\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u0004",
    "\u0002\u0002\u001e\u001f\u0007\u0007\u0002\u0002\u001f\u0007\u0003\u0002",
    "\u0002\u0002 !\u0005\n\u0006\u0002!\"\u0005\f\u0007\u0002\"#\u0007\u0007",
    "\u0002\u0002#\t\u0003\u0002\u0002\u0002$&\u0007\u0003\u0002\u0002%\'",
    "\u0007\t\u0002\u0002&%\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002",
    "\u0002\'(\u0003\u0002\u0002\u0002()\u0007\u0005\u0002\u0002)\u000b\u0003",
    "\u0002\u0002\u0002*,\u0007\b\u0002\u0002+*\u0003\u0002\u0002\u0002,",
    "-\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002",
    "\u0002.\r\u0003\u0002\u0002\u0002\u0007\u0011\u0017\u001b&-"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'@'", "'*'", "' '" ];

var symbolicNames = [ null, "AT", "STAR", "SPACE", "TOC", "NEWLINE", "NOT_NEWLINE_CHAR", 
                      "HEADING_SIZE" ];

var ruleNames =  [ "document", "section", "toc", "heading", "headingKey", 
                   "headingValue" ];

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
ArtlingParser.STAR = 2;
ArtlingParser.SPACE = 3;
ArtlingParser.TOC = 4;
ArtlingParser.NEWLINE = 5;
ArtlingParser.NOT_NEWLINE_CHAR = 6;
ArtlingParser.HEADING_SIZE = 7;

ArtlingParser.RULE_document = 0;
ArtlingParser.RULE_section = 1;
ArtlingParser.RULE_toc = 2;
ArtlingParser.RULE_heading = 3;
ArtlingParser.RULE_headingKey = 4;
ArtlingParser.RULE_headingValue = 5;

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

DocumentContext.prototype.section = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SectionContext);
    } else {
        return this.getTypedRuleContext(SectionContext,i);
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
        this.state = 15;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArtlingParser.AT) | (1 << ArtlingParser.STAR) | (1 << ArtlingParser.NEWLINE))) !== 0)) {
            this.state = 12;
            this.section();
            this.state = 17;
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

function SectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_section;
    return this;
}

SectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SectionContext.prototype.constructor = SectionContext;

SectionContext.prototype.toc = function() {
    return this.getTypedRuleContext(TocContext,0);
};

SectionContext.prototype.heading = function() {
    return this.getTypedRuleContext(HeadingContext,0);
};

SectionContext.prototype.NEWLINE = function() {
    return this.getToken(ArtlingParser.NEWLINE, 0);
};

SectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.enterSection(this);
	}
};

SectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.exitSection(this);
	}
};




ArtlingParser.SectionContext = SectionContext;

ArtlingParser.prototype.section = function() {

    var localctx = new SectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ArtlingParser.RULE_section);
    try {
        this.state = 21;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ArtlingParser.STAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 18;
            this.toc();
            break;
        case ArtlingParser.AT:
            this.enterOuterAlt(localctx, 2);
            this.state = 19;
            this.heading();
            break;
        case ArtlingParser.NEWLINE:
            this.enterOuterAlt(localctx, 3);
            this.state = 20;
            this.match(ArtlingParser.NEWLINE);
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


TocContext.prototype.NEWLINE = function() {
    return this.getToken(ArtlingParser.NEWLINE, 0);
};

TocContext.prototype.TOC = function() {
    return this.getToken(ArtlingParser.TOC, 0);
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
    this.enterRule(localctx, 4, ArtlingParser.RULE_toc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.match(ArtlingParser.STAR);
        this.state = 25;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ArtlingParser.TOC) {
            this.state = 24;
            this.match(ArtlingParser.TOC);
        }

        this.state = 27;
        this.match(ArtlingParser.STAR);
        this.state = 28;
        this.match(ArtlingParser.NEWLINE);
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

HeadingContext.prototype.headingKey = function() {
    return this.getTypedRuleContext(HeadingKeyContext,0);
};

HeadingContext.prototype.headingValue = function() {
    return this.getTypedRuleContext(HeadingValueContext,0);
};

HeadingContext.prototype.NEWLINE = function() {
    return this.getToken(ArtlingParser.NEWLINE, 0);
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
    this.enterRule(localctx, 6, ArtlingParser.RULE_heading);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this.headingKey();
        this.state = 31;
        this.headingValue();
        this.state = 32;
        this.match(ArtlingParser.NEWLINE);
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

function HeadingKeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_headingKey;
    return this;
}

HeadingKeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadingKeyContext.prototype.constructor = HeadingKeyContext;

HeadingKeyContext.prototype.AT = function() {
    return this.getToken(ArtlingParser.AT, 0);
};

HeadingKeyContext.prototype.SPACE = function() {
    return this.getToken(ArtlingParser.SPACE, 0);
};

HeadingKeyContext.prototype.HEADING_SIZE = function() {
    return this.getToken(ArtlingParser.HEADING_SIZE, 0);
};

HeadingKeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.enterHeadingKey(this);
	}
};

HeadingKeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.exitHeadingKey(this);
	}
};




ArtlingParser.HeadingKeyContext = HeadingKeyContext;

ArtlingParser.prototype.headingKey = function() {

    var localctx = new HeadingKeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ArtlingParser.RULE_headingKey);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(ArtlingParser.AT);
        this.state = 36;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ArtlingParser.HEADING_SIZE) {
            this.state = 35;
            this.match(ArtlingParser.HEADING_SIZE);
        }

        this.state = 38;
        this.match(ArtlingParser.SPACE);
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

function HeadingValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_headingValue;
    return this;
}

HeadingValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadingValueContext.prototype.constructor = HeadingValueContext;

HeadingValueContext.prototype.NOT_NEWLINE_CHAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArtlingParser.NOT_NEWLINE_CHAR);
    } else {
        return this.getToken(ArtlingParser.NOT_NEWLINE_CHAR, i);
    }
};


HeadingValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.enterHeadingValue(this);
	}
};

HeadingValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.exitHeadingValue(this);
	}
};




ArtlingParser.HeadingValueContext = HeadingValueContext;

ArtlingParser.prototype.headingValue = function() {

    var localctx = new HeadingValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ArtlingParser.RULE_headingValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41; 
        this._errHandler.sync(this);
        var _alt = 1+1;
        do {
        	switch (_alt) {
        	case 1+1:
        		this.state = 40;
        		this.match(ArtlingParser.NOT_NEWLINE_CHAR);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 43; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
        } while ( _alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
