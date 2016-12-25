import {InputStream, CommonTokenStream, tree} from 'antlr4/index';
import {ArtlingLexer} from './generated/ArtlingLexer';
import {ArtlingParser} from './generated/ArtlingParser';
//import {ArtlingVisitor} from './generated/ArtlingVisitor';
import KeyPrinter from './KeyPrinter';
import Artling from './Artling.jsx';


const input = `
  (( toc ))


  * Header style 1 (h1)

Text content which supports tabs as start of a paragraph and doesn't/ newline symbol
so this is a continuation of the string. Hello little picture.

** Header style 2 (h2)

Text content which supports tabs as start of a paragraph and doesn't/ newline symbol
so this is a continuation of the string. Hello little picture.

*** Header style 3 (h3)
*1 Header style 1 (h1)
*2 Header style 2 (h2)
*3 Header style 3 (h3)

Text content which supports tabs as start of a paragraph and doesn't/ newline symbol
so this is a continuation of the string. Hello little picture.

(( echo ))

*4 Header style 4 (h4)
*5 Header style 5 (h5)
*6 Header style 6 (h6)

List pretext just to check how it is parsed:
  - List item 1
- List item 2
- List item 3

(( toc ))

List pretext just to check how it is parsed,
  List pretext just to check how it is parsed:
  + Numerical item 1
+ Numerical item 2
+ Numerical item 3


Text content which supports tabs as start of a paragraph and doesn't/ newline symbol
so this is a continuation of the string. Hello little picture.
  Complex text will look as following that contains styled features as bold text or italic
or nested styling features.
`;
const chars = new InputStream(input);
const lexer = new ArtlingLexer(chars);
const tokens  = new CommonTokenStream(lexer);
const parser = new ArtlingParser(tokens);

parser.buildParseTrees = true;

const documentTree = parser.document();
console.log(documentTree.toStringTree());
const printer = new KeyPrinter();

tree.ParseTreeWalker.DEFAULT.walk(printer, documentTree);


export default Artling;
