grammar Artling;

options {
	language = JavaScript;
}

AT : '@';
INT :	'0'..'9'+;
WS : [ \t\r\n]+ -> skip ;
LINE: [^\r\n]+;

content:
    ( heading
    | WS
    )
;

heading: AT INT? LINE;
