parser grammar ArtlingParser;

options {
    language = JavaScript;
    tokenVocab = ArtlingLexer;
}

document
    : section *;

section
    : heading
    | generator
    | list
    | paragraph
    | NL_OR_EOF+
    ;

generator
    : OPEN_GEN GEN_ID CLOSE_GEN NL_OR_EOF
    ;

heading: HEADING_LINE NL_OR_EOF;

list: (listItem NEWLINE)* listItem NL_OR_EOR;

listItem
    : LIST_ITEM;

paragraph
    : PARAGRAPH_OPEN NEWLINE  NEWLINE PARAGRAPH_CLOSE NL_OR_EOR;