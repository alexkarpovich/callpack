import antlr4 from 'antlr4/index';
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
const chars = new antlr4.InputStream(input);
const lexer = new ArtlingLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new ArtlingParser(tokens);

parser.buildParseTrees = true;

const tree = parser.document();
console.log(tree.toStringTree());
const printer = new KeyPrinter();

antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);


export default Artling;
