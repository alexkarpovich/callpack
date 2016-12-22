import {InputStream, CommonTokenStream, tree} from 'antlr4/index';
import {ArtlingLexer} from './generated/ArtlingLexer';
import {ArtlingParser} from './generated/ArtlingParser';
//import {ArtlingVisitor} from './generated/ArtlingVisitor';
import KeyPrinter from './KeyPrinter';
import Artling from './Artling.jsx';


const input =
`@ Heading
@2 Heading
@3 Heading
@4 Heading
@5 Heading
@6 Heading
*toc*
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
