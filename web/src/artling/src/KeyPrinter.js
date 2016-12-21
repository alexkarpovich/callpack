import {ArtlingListener} from './generated/ArtlingListener';

const KeyPrinter = function() {
  ArtlingListener.call(this); // inherit default listener
  return this;
 };

// inherit default listener
KeyPrinter.prototype = Object.create(ArtlingListener.prototype);
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

export default KeyPrinter;
