// Generated from /home/aliaksandr/dev/ratio/web/src/artling/Artling.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArtlingListener = require('./ArtlingListener').ArtlingListener;
var grammarFileName = "Artling.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0007\u0017\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0007\u0002\t\n\u0002\f\u0002\u000e\u0002\f\u000b\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u0015\n\u0003\u0003\u0003\u0002\u0002\u0004",
    "\u0002\u0004\u0002\u0002\u0017\u0002\n\u0003\u0002\u0002\u0002\u0004",
    "\u0014\u0003\u0002\u0002\u0002\u0006\t\u0005\u0004\u0003\u0002\u0007",
    "\t\u0007\u0005\u0002\u0002\b\u0006\u0003\u0002\u0002\u0002\b\u0007\u0003",
    "\u0002\u0002\u0002\t\f\u0003\u0002\u0002\u0002\n\b\u0003\u0002\u0002",
    "\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b\u0003\u0003\u0002\u0002",
    "\u0002\f\n\u0003\u0002\u0002\u0002\r\u000e\u0007\u0004\u0002\u0002\u000e",
    "\u000f\u0007\u0003\u0002\u0002\u000f\u0015\u0007\u0006\u0002\u0002\u0010",
    "\u0011\u0007\u0004\u0002\u0002\u0011\u0012\u0007\u0007\u0002\u0002\u0012",
    "\u0013\u0007\u0003\u0002\u0002\u0013\u0015\u0007\u0006\u0002\u0002\u0014",
    "\r\u0003\u0002\u0002\u0002\u0014\u0010\u0003\u0002\u0002\u0002\u0015",
    "\u0005\u0003\u0002\u0002\u0002\u0005\b\n\u0014"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'<'", null, "'>'" ];

var symbolicNames = [ null, "ID", "OPEN_TAG", "TEXT", "CLOSE", "SLASH" ];

var ruleNames =  [ "file", "tag" ];

function Artling (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

Artling.prototype = Object.create(antlr4.Parser.prototype);
Artling.prototype.constructor = Artling;

Object.defineProperty(Artling.prototype, "atn", {
	get : function() {
		return atn;
	}
});

Artling.EOF = antlr4.Token.EOF;
Artling.ID = 1;
Artling.OPEN_TAG = 2;
Artling.TEXT = 3;
Artling.CLOSE = 4;
Artling.SLASH = 5;

Artling.RULE_file = 0;
Artling.RULE_tag = 1;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Artling.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.tag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TagContext);
    } else {
        return this.getTypedRuleContext(TagContext,i);
    }
};

FileContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Artling.TEXT);
    } else {
        return this.getToken(Artling.TEXT, i);
    }
};


FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.exitFile(this);
	}
};




Artling.FileContext = FileContext;

Artling.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, Artling.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Artling.OPEN_TAG || _la===Artling.TEXT) {
            this.state = 6;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case Artling.OPEN_TAG:
                this.state = 4;
                this.tag();
                break;
            case Artling.TEXT:
                this.state = 5;
                this.match(Artling.TEXT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 10;
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

function TagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Artling.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.ID = function() {
    return this.getToken(Artling.ID, 0);
};

TagContext.prototype.SLASH = function() {
    return this.getToken(Artling.SLASH, 0);
};

TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArtlingListener ) {
        listener.exitTag(this);
	}
};




Artling.TagContext = TagContext;

Artling.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, Artling.RULE_tag);
    try {
        this.state = 18;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 11;
            this.match(Artling.OPEN_TAG);
            this.state = 12;
            this.match(Artling.ID);
            this.state = 13;
            this.match(Artling.CLOSE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 14;
            this.match(Artling.OPEN_TAG);
            this.state = 15;
            this.match(Artling.SLASH);
            this.state = 16;
            this.match(Artling.ID);
            this.state = 17;
            this.match(Artling.CLOSE);
            break;

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


exports.Artling = Artling;
