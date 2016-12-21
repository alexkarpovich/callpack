import antlr4 from 'antlr4/index';
import ArtlingLexer from './generated/ArtlingLexer';
import ArtlingParser from './generated/ArtlingParser';
import Artling from './Artling.jsx';


const input = `
@ Heading 1
@2 Heading 2
@3 Heading 3
@4 Heading 4
@5 Heading 5
@6 Heading 6

`;
const chars = new antlr4.InputStream(input);
const lexer = new ArtlingLexer.ArtlingLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new ArtlingParser.ArtlingParser(tokens);

parser.buildParseTrees = true;

const tree = parser.content();
console.log(tree);

export default Artling;
