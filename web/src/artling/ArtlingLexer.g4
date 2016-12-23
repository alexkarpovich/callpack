lexer grammar ArtlingLexer;

TAB: '\t';
NEWLINE: '\r'? '\n';
STAR: '*';
SPACE: ' ';
OPEN_GEN: '((';
CLOSE_GEN: '))';
GEN_ID: 'toc' | 'echo';
HEADING_SIZE: [1-6];
NL_OR_EOF: NEWLINE | EOF;

HEADING_LINE: ('*'+ | '*' HEADING_SIZE) ' ' ~[\r\n]+;

PARAGRAPH_OPEN: '{';
PARAGRAPH_CLOSE: '}';

LIST_ITEM: '-' ' ' ~[\r\n]+;



