// Generated from /home/akarpovich/dev/ratio/web/src/artling/ArtlingParser.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArtlingParserListener = require('./ArtlingParserListener').ArtlingParserListener;
var grammarFileName = "ArtlingParser.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001a\\\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0007\u0002\u001a\n\u0002\f\u0002\u000e\u0002\u001d\u000b\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003#\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0005\u0006/\n\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0007\u00077\n\u0007\f\u0007\u000e\u0007:\u000b\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0007\tF\n\t\f\t\u000e\tI\u000b\t\u0003\t\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0006\u000bT\n",
    "\u000b\r\u000b\u000e\u000bU\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0002\u0002\r\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0002\u0003\u0004\u0003\u0003\u0003\u0015\u0015X\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u0006$\u0003\u0002",
    "\u0002\u0002\b(\u0003\u0002\u0002\u0002\n.\u0003\u0002\u0002\u0002\f",
    "8\u0003\u0002\u0002\u0002\u000e>\u0003\u0002\u0002\u0002\u0010G\u0003",
    "\u0002\u0002\u0002\u0012M\u0003\u0002\u0002\u0002\u0014S\u0003\u0002",
    "\u0002\u0002\u0016W\u0003\u0002\u0002\u0002\u0018\u001a\u0005\u0004",
    "\u0003\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u001d\u0003\u0002",
    "\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002",
    "\u0002\u0002\u001c\u0003\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002",
    "\u0002\u0002\u001e#\u0005\b\u0005\u0002\u001f#\u0005\u0006\u0004\u0002",
    " #\u0005\n\u0006\u0002!#\u0005\u0014\u000b\u0002\"\u001e\u0003\u0002",
    "\u0002\u0002\"\u001f\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002",
    "\"!\u0003\u0002\u0002\u0002#\u0005\u0003\u0002\u0002\u0002$%\u0007\u0017",
    "\u0002\u0002%&\t\u0002\u0002\u0002&\'\b\u0004\u0001\u0002\'\u0007\u0003",
    "\u0002\u0002\u0002()\u0007\u0016\u0002\u0002)*\t\u0002\u0002\u0002*",
    "+\b\u0005\u0001\u0002+\t\u0003\u0002\u0002\u0002,/\u0005\f\u0007\u0002",
    "-/\u0005\u0010\t\u0002.,\u0003\u0002\u0002\u0002.-\u0003\u0002\u0002",
    "\u0002/0\u0003\u0002\u0002\u000201\t\u0002\u0002\u00021\u000b\u0003",
    "\u0002\u0002\u000223\u0005\u000e\b\u000234\u0007\u0003\u0002\u00024",
    "5\b\u0007\u0001\u000257\u0003\u0002\u0002\u000262\u0003\u0002\u0002",
    "\u00027:\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002",
    "\u0002\u00029;\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002;<\u0005",
    "\u000e\b\u0002<=\b\u0007\u0001\u0002=\r\u0003\u0002\u0002\u0002>?\u0007",
    "\u0018\u0002\u0002?@\b\b\u0001\u0002@\u000f\u0003\u0002\u0002\u0002",
    "AB\u0005\u0012\n\u0002BC\u0007\u0003\u0002\u0002CD\b\t\u0001\u0002D",
    "F\u0003\u0002\u0002\u0002EA\u0003\u0002\u0002\u0002FI\u0003\u0002\u0002",
    "\u0002GE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002HJ\u0003\u0002",
    "\u0002\u0002IG\u0003\u0002\u0002\u0002JK\u0005\u0012\n\u0002KL\b\t\u0001",
    "\u0002L\u0011\u0003\u0002\u0002\u0002MN\u0007\u0019\u0002\u0002NO\b",
    "\n\u0001\u0002O\u0013\u0003\u0002\u0002\u0002PQ\u0005\u0016\f\u0002",
    "QR\b\u000b\u0001\u0002RT\u0003\u0002\u0002\u0002SP\u0003\u0002\u0002",
    "\u0002TU\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002",
    "\u0002\u0002V\u0015\u0003\u0002\u0002\u0002WX\u0007\u001a\u0002\u0002",
    "XY\t\u0002\u0002\u0002YZ\b\f\u0001\u0002Z\u0017\u0003\u0002\u0002\u0002",
    "\b\u001b\".8GU"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'\t'", "'*'", "' '", "'-'", "'+'", "'- '", 
                     "'+ '", "'(( '", "' ))'", null, null, "'* '", "'** '", 
                     "'*** '", "'**** '", "'***** '", "'****** '" ];

var symbolicNames = [ null, "NL", "TAB", "STAR", "SPACE", "MINUS", "PLUS", 
                      "ULI_START", "OLI_START", "OPEN_GEN", "CLOSE_GEN", 
                      "GEN_ID", "HEADING_SIZE", "H1_START", "H2_START", 
                      "H3_START", "H4_START", "H5_START", "H6_START", "NL_OR_EOF", 
                      "HEADING_LINE", "GEN", "UL_ITEM", "OL_ITEM", "PARA_LINE" ];

var ruleNames =  [ "document", "section", "generator", "heading", "bulletedList", 
                   "ul", "ulItem", "ol", "olItem", "paragraph", "row" ];

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
ArtlingParser.NL = 1;
ArtlingParser.TAB = 2;
ArtlingParser.STAR = 3;
ArtlingParser.SPACE = 4;
ArtlingParser.MINUS = 5;
ArtlingParser.PLUS = 6;
ArtlingParser.ULI_START = 7;
ArtlingParser.OLI_START = 8;
ArtlingParser.OPEN_GEN = 9;
ArtlingParser.CLOSE_GEN = 10;
ArtlingParser.GEN_ID = 11;
ArtlingParser.HEADING_SIZE = 12;
ArtlingParser.H1_START = 13;
ArtlingParser.H2_START = 14;
ArtlingParser.H3_START = 15;
ArtlingParser.H4_START = 16;
ArtlingParser.H5_START = 17;
ArtlingParser.H6_START = 18;
ArtlingParser.NL_OR_EOF = 19;
ArtlingParser.HEADING_LINE = 20;
ArtlingParser.GEN = 21;
ArtlingParser.UL_ITEM = 22;
ArtlingParser.OL_ITEM = 23;
ArtlingParser.PARA_LINE = 24;

ArtlingParser.RULE_document = 0;
ArtlingParser.RULE_section = 1;
ArtlingParser.RULE_generator = 2;
ArtlingParser.RULE_heading = 3;
ArtlingParser.RULE_bulletedList = 4;
ArtlingParser.RULE_ul = 5;
ArtlingParser.RULE_ulItem = 6;
ArtlingParser.RULE_ol = 7;
ArtlingParser.RULE_olItem = 8;
ArtlingParser.RULE_paragraph = 9;
ArtlingParser.RULE_row = 10;

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
    if(listener instanceof ArtlingParserListener ) {
        listener.enterDocument(this);
	}
};

DocumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
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
        this.state = 25;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ArtlingParser.HEADING_LINE) | (1 << ArtlingParser.GEN) | (1 << ArtlingParser.UL_ITEM) | (1 << ArtlingParser.OL_ITEM) | (1 << ArtlingParser.PARA_LINE))) !== 0)) {
            this.state = 22;
            this.section();
            this.state = 27;
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

SectionContext.prototype.heading = function() {
    return this.getTypedRuleContext(HeadingContext,0);
};

SectionContext.prototype.generator = function() {
    return this.getTypedRuleContext(GeneratorContext,0);
};

SectionContext.prototype.bulletedList = function() {
    return this.getTypedRuleContext(BulletedListContext,0);
};

SectionContext.prototype.paragraph = function() {
    return this.getTypedRuleContext(ParagraphContext,0);
};

SectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.enterSection(this);
	}
};

SectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.exitSection(this);
	}
};




ArtlingParser.SectionContext = SectionContext;

ArtlingParser.prototype.section = function() {

    var localctx = new SectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ArtlingParser.RULE_section);
    try {
        this.state = 32;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ArtlingParser.HEADING_LINE:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.heading();
            break;
        case ArtlingParser.GEN:
            this.enterOuterAlt(localctx, 2);
            this.state = 29;
            this.generator();
            break;
        case ArtlingParser.UL_ITEM:
        case ArtlingParser.OL_ITEM:
            this.enterOuterAlt(localctx, 3);
            this.state = 30;
            this.bulletedList();
            break;
        case ArtlingParser.PARA_LINE:
            this.enterOuterAlt(localctx, 4);
            this.state = 31;
            this.paragraph();
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

function GeneratorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_generator;
    this.genId = null
    this._GEN = null; // Token
    return this;
}

GeneratorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GeneratorContext.prototype.constructor = GeneratorContext;

GeneratorContext.prototype.GEN = function() {
    return this.getToken(ArtlingParser.GEN, 0);
};

GeneratorContext.prototype.NL = function() {
    return this.getToken(ArtlingParser.NL, 0);
};

GeneratorContext.prototype.NL_OR_EOF = function() {
    return this.getToken(ArtlingParser.NL_OR_EOF, 0);
};

GeneratorContext.prototype.EOF = function() {
    return this.getToken(ArtlingParser.EOF, 0);
};

GeneratorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.enterGenerator(this);
	}
};

GeneratorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.exitGenerator(this);
	}
};




ArtlingParser.GeneratorContext = GeneratorContext;

ArtlingParser.prototype.generator = function() {

    var localctx = new GeneratorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ArtlingParser.RULE_generator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        localctx._GEN = this.match(ArtlingParser.GEN);
        this.state = 35;
        _la = this._input.LA(1);
        if(!(((((_la - -1)) & ~0x1f) == 0 && ((1 << (_la - -1)) & ((1 << (ArtlingParser.EOF - -1)) | (1 << (ArtlingParser.NL - -1)) | (1 << (ArtlingParser.NL_OR_EOF - -1)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        localctx.genId =  (localctx._GEN===null ? null : localctx._GEN.text)
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
    this.headingText = null
    this._HEADING_LINE = null; // Token
    return this;
}

HeadingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadingContext.prototype.constructor = HeadingContext;

HeadingContext.prototype.HEADING_LINE = function() {
    return this.getToken(ArtlingParser.HEADING_LINE, 0);
};

HeadingContext.prototype.NL = function() {
    return this.getToken(ArtlingParser.NL, 0);
};

HeadingContext.prototype.NL_OR_EOF = function() {
    return this.getToken(ArtlingParser.NL_OR_EOF, 0);
};

HeadingContext.prototype.EOF = function() {
    return this.getToken(ArtlingParser.EOF, 0);
};

HeadingContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.enterHeading(this);
	}
};

HeadingContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.exitHeading(this);
	}
};




ArtlingParser.HeadingContext = HeadingContext;

ArtlingParser.prototype.heading = function() {

    var localctx = new HeadingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ArtlingParser.RULE_heading);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        localctx._HEADING_LINE = this.match(ArtlingParser.HEADING_LINE);
        this.state = 39;
        _la = this._input.LA(1);
        if(!(((((_la - -1)) & ~0x1f) == 0 && ((1 << (_la - -1)) & ((1 << (ArtlingParser.EOF - -1)) | (1 << (ArtlingParser.NL - -1)) | (1 << (ArtlingParser.NL_OR_EOF - -1)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        localctx.headingText =  (localctx._HEADING_LINE===null ? null : localctx._HEADING_LINE.text)
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

function BulletedListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_bulletedList;
    this.list = null
    return this;
}

BulletedListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BulletedListContext.prototype.constructor = BulletedListContext;

BulletedListContext.prototype.NL = function() {
    return this.getToken(ArtlingParser.NL, 0);
};

BulletedListContext.prototype.NL_OR_EOF = function() {
    return this.getToken(ArtlingParser.NL_OR_EOF, 0);
};

BulletedListContext.prototype.EOF = function() {
    return this.getToken(ArtlingParser.EOF, 0);
};

BulletedListContext.prototype.ul = function() {
    return this.getTypedRuleContext(UlContext,0);
};

BulletedListContext.prototype.ol = function() {
    return this.getTypedRuleContext(OlContext,0);
};

BulletedListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.enterBulletedList(this);
	}
};

BulletedListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.exitBulletedList(this);
	}
};




ArtlingParser.BulletedListContext = BulletedListContext;

ArtlingParser.prototype.bulletedList = function() {

    var localctx = new BulletedListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ArtlingParser.RULE_bulletedList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ArtlingParser.UL_ITEM:
            this.state = 42;
            this.ul();
            break;
        case ArtlingParser.OL_ITEM:
            this.state = 43;
            this.ol();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 46;
        _la = this._input.LA(1);
        if(!(((((_la - -1)) & ~0x1f) == 0 && ((1 << (_la - -1)) & ((1 << (ArtlingParser.EOF - -1)) | (1 << (ArtlingParser.NL - -1)) | (1 << (ArtlingParser.NL_OR_EOF - -1)))) !== 0))) {
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

function UlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_ul;
    this.ulist = null
    this.uli = null; // UlItemContext
    return this;
}

UlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UlContext.prototype.constructor = UlContext;

UlContext.prototype.ulItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UlItemContext);
    } else {
        return this.getTypedRuleContext(UlItemContext,i);
    }
};

UlContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArtlingParser.NL);
    } else {
        return this.getToken(ArtlingParser.NL, i);
    }
};


UlContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.enterUl(this);
	}
};

UlContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.exitUl(this);
	}
};




ArtlingParser.UlContext = UlContext;

ArtlingParser.prototype.ul = function() {

    var localctx = new UlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ArtlingParser.RULE_ul);
    localctx.ulist =  []
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 48;
                localctx.uli = this.ulItem();
                this.state = 49;
                this.match(ArtlingParser.NL);
                localctx.ulist.push((localctx.uli===null ? null : this._input.getText(new antlr4.Interval(localctx.uli.start,localctx.uli.stop)))); 
            }
            this.state = 56;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

        this.state = 57;
        localctx.uli = this.ulItem();
        localctx.ulist.push((localctx.uli===null ? null : this._input.getText(new antlr4.Interval(localctx.uli.start,localctx.uli.stop))));
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

function UlItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_ulItem;
    this.ulItemText = null
    this._UL_ITEM = null; // Token
    return this;
}

UlItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UlItemContext.prototype.constructor = UlItemContext;

UlItemContext.prototype.UL_ITEM = function() {
    return this.getToken(ArtlingParser.UL_ITEM, 0);
};

UlItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.enterUlItem(this);
	}
};

UlItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.exitUlItem(this);
	}
};




ArtlingParser.UlItemContext = UlItemContext;

ArtlingParser.prototype.ulItem = function() {

    var localctx = new UlItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ArtlingParser.RULE_ulItem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        localctx._UL_ITEM = this.match(ArtlingParser.UL_ITEM);
        localctx.ulItemText =  (localctx._UL_ITEM===null ? null : localctx._UL_ITEM.text)
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

function OlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_ol;
    this.olist = null
    this.oli = null; // OlItemContext
    return this;
}

OlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OlContext.prototype.constructor = OlContext;

OlContext.prototype.olItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OlItemContext);
    } else {
        return this.getTypedRuleContext(OlItemContext,i);
    }
};

OlContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ArtlingParser.NL);
    } else {
        return this.getToken(ArtlingParser.NL, i);
    }
};


OlContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.enterOl(this);
	}
};

OlContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.exitOl(this);
	}
};




ArtlingParser.OlContext = OlContext;

ArtlingParser.prototype.ol = function() {

    var localctx = new OlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ArtlingParser.RULE_ol);
    localctx.olist =  []
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 63;
                localctx.oli = this.olItem();
                this.state = 64;
                this.match(ArtlingParser.NL);
                localctx.olist.push((localctx.oli===null ? null : this._input.getText(new antlr4.Interval(localctx.oli.start,localctx.oli.stop)))); 
            }
            this.state = 71;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 72;
        localctx.oli = this.olItem();
        localctx.olist.push((localctx.oli===null ? null : this._input.getText(new antlr4.Interval(localctx.oli.start,localctx.oli.stop))));
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

function OlItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_olItem;
    this.olItemText = null
    this._OL_ITEM = null; // Token
    return this;
}

OlItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OlItemContext.prototype.constructor = OlItemContext;

OlItemContext.prototype.OL_ITEM = function() {
    return this.getToken(ArtlingParser.OL_ITEM, 0);
};

OlItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.enterOlItem(this);
	}
};

OlItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.exitOlItem(this);
	}
};




ArtlingParser.OlItemContext = OlItemContext;

ArtlingParser.prototype.olItem = function() {

    var localctx = new OlItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ArtlingParser.RULE_olItem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        localctx._OL_ITEM = this.match(ArtlingParser.OL_ITEM);
        localctx.olItemText =  (localctx._OL_ITEM===null ? null : localctx._OL_ITEM.text)
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

function ParagraphContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_paragraph;
    this.rows = null
    this.rowText = null; // RowContext
    return this;
}

ParagraphContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParagraphContext.prototype.constructor = ParagraphContext;

ParagraphContext.prototype.row = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RowContext);
    } else {
        return this.getTypedRuleContext(RowContext,i);
    }
};

ParagraphContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.enterParagraph(this);
	}
};

ParagraphContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.exitParagraph(this);
	}
};




ArtlingParser.ParagraphContext = ParagraphContext;

ArtlingParser.prototype.paragraph = function() {

    var localctx = new ParagraphContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ArtlingParser.RULE_paragraph);
    localctx.rows =  []
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 78;
        		localctx.rowText = this.row();
        		localctx.rows.push((localctx.rowText===null ? null : this._input.getText(new antlr4.Interval(localctx.rowText.start,localctx.rowText.stop))));
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 83; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

function RowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArtlingParser.RULE_row;
    this.rowText = null
    this._PARA_LINE = null; // Token
    return this;
}

RowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RowContext.prototype.constructor = RowContext;

RowContext.prototype.PARA_LINE = function() {
    return this.getToken(ArtlingParser.PARA_LINE, 0);
};

RowContext.prototype.NL = function() {
    return this.getToken(ArtlingParser.NL, 0);
};

RowContext.prototype.NL_OR_EOF = function() {
    return this.getToken(ArtlingParser.NL_OR_EOF, 0);
};

RowContext.prototype.EOF = function() {
    return this.getToken(ArtlingParser.EOF, 0);
};

RowContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.enterRow(this);
	}
};

RowContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingParserListener ) {
        listener.exitRow(this);
	}
};




ArtlingParser.RowContext = RowContext;

ArtlingParser.prototype.row = function() {

    var localctx = new RowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ArtlingParser.RULE_row);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        localctx._PARA_LINE = this.match(ArtlingParser.PARA_LINE);
        this.state = 86;
        _la = this._input.LA(1);
        if(!(((((_la - -1)) & ~0x1f) == 0 && ((1 << (_la - -1)) & ((1 << (ArtlingParser.EOF - -1)) | (1 << (ArtlingParser.NL - -1)) | (1 << (ArtlingParser.NL_OR_EOF - -1)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        localctx.rowText =  (localctx._PARA_LINE===null ? null : localctx._PARA_LINE.text)
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
