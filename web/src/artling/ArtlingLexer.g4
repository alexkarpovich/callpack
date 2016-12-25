lexer grammar ArtlingLexer;

NL: '\r'? '\n';
TAB: '\t';
STAR: '*';
SPACE: ' ';
MINUS: '-';
PLUS: '+';
ULI_START: '- ';
OLI_START: '+ ';
OPEN_GEN: '(( ';
CLOSE_GEN: ' ))';
GEN_ID: 'toc' | 'echo';
HEADING_SIZE: [1-6];
fragment NEWLINE: '\r'? '\n';
fragment TEXT_LINE: ~[\r\n]+;

H1_START: '* ';
H2_START: '** ';
H3_START: '*** ';
H4_START: '**** ';
H5_START: '***** ';
H6_START: '****** ';
fragment HEADING_START
    : H1_START
    | H2_START
    | H3_START
    | H4_START
    | H5_START
    | H6_START
    | '*' HEADING_SIZE
    ;

NL_OR_EOF: NEWLINE+;
HEADING_LINE
    : HEADING_START TEXT_LINE;

GEN: OPEN_GEN GEN_ID CLOSE_GEN;

fragment UL_ITEM_START: '- ';
fragment OL_ITEM_START: '+ ';

UL_ITEM: UL_ITEM_START TEXT_LINE;
OL_ITEM: OL_ITEM_START TEXT_LINE;

PARA_LINE
    : TEXT_LINE;
