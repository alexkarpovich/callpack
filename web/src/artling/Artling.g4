grammar Artling;

options {
    language = JavaScript;
}

AT: '@';
STAR: '*';
SPACE: ' ';
TOC: 'toc' | 'table of content';
NEWLINE: '\r'? '\n';
NOT_NEWLINE_CHAR: ~[\r\n];
HEADING_SIZE: [1-6];

document
    : section*;

section
    : toc
    | heading
    | NEWLINE
    ;

toc: STAR TOC STAR NEWLINE
    ;

heading
    : headingKey headingValue NEWLINE
    ;

headingKey
    : AT HEADING_SIZE? SPACE
    ;

headingValue
    : .*?
    ;

