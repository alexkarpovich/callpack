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
    | bulletedList
    | paragraph
    ;

generator returns[genId]
    : GEN (NL | NL_OR_EOF | EOF) {$genId = $GEN.text;}
    ;

heading returns[headingText]
    : HEADING_LINE (NL | NL_OR_EOF | EOF) {$headingText = $HEADING_LINE.text;}
    ;

bulletedList returns[list]
    : (ul | ol) (NL | NL_OR_EOF | EOF)
    ;

ul returns[ulist]
@init {$ulist = [];}
    : (uli=ulItem NL {$ulist.push($uli.text);})* uli=ulItem {$ulist.push($uli.text);}
    ;

ulItem returns[ulItemText]
    : UL_ITEM {$ulItemText = $UL_ITEM.text;}
    ;

ol returns[olist]
@init {$olist = [];}
    : (oli=olItem NL {$olist.push($oli.text);})* oli=olItem {$olist.push($oli.text);};

olItem returns[olItemText]
    : OL_ITEM {$olItemText = $OL_ITEM.text;}
    ;

paragraph returns[rows]
@init {$rows = [];}
    : (rowText=row {$rows.push($rowText.text);})+;

row returns[rowText]
    : PARA_LINE (NL | NL_OR_EOF | EOF) {$rowText = $PARA_LINE.text;}
    ;