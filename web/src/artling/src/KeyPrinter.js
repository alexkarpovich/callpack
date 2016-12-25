import {ArtlingParserListener} from './generated/ArtlingParserListener';

const KeyPrinter = function() {
  ArtlingParserListener.call(this); // inherit default listener
  return this;
 };

// inherit default listener
KeyPrinter.prototype = Object.create(ArtlingParserListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;

KeyPrinter.prototype.enterDocument = function(ctx) {
  console.log('document', ctx);
};

KeyPrinter.prototype.enterSection = function(ctx) {
  console.log('document', ctx);
};

KeyPrinter.prototype.enterHeading = function(ctx) {
  console.log('heading', ctx);
};

KeyPrinter.prototype.enterToc = function(ctx) {
  console.log('toc', ctx);
};

KeyPrinter.prototype.exitOl = function(ctx) {
  console.log('Ol', ctx.olist);
};

export default KeyPrinter;
