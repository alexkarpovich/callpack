grammar Artling;

options {
	language = JavaScript;
}

AT : '@';
STAR: '*';

ANY: .;
NEWLINE: '\r'? '\n';
SPACETAB: [ \t];
HEADING_SIZE: [0-6];

document:
	( heading
	| toc
	| NEWLINE+
	)*;

heading
	: headingMark ' ' headingText
	;

headingMark
    : AT HEADING_SIZE?
    ;

headingText
    : ANY+ (NEWLINE | EOF)
    ;

toc: STAR 'toc' STAR;

