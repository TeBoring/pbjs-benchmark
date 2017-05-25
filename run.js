'use strict';

// Get test name from command-line arguments:
var args = process.argv.slice(2);
if (args.length != 1) {
    throw 'Usage: node run.js <testname>';
}
var testname = args[0];
var testpath = './tests/' + testname + '/';


const newSuite  = require('./suite');
const pbjs = require('protobufjs');

var config = require(testpath + 'config.json');
var pbjsTypesJson = require(testpath + 'pbjsTypes.json');
var pbjsRoot = pbjs.Root.fromJSON(pbjsTypesJson);
var pbjsReflect = pbjsRoot.resolveAll().lookup(config.typename);
var pbjsStatic = require(testpath + 'pbjsStatic')[config.typename];

const googOpt = require(testpath + 'googOpt');
const googUnopt = require(testpath + 'googUnopt')[config.typename];

// Prepare test data of various forms
var data = {};
data.pbjsJson = require(testpath + 'payload.json');
data.pbjsJsonStr = JSON.stringify(data.pbjsJson);
data.binaryBuf = pbjsReflect.encode(data.pbjsJson).finish();
data.binaryU8 = new Uint8Array(Array.prototype.slice.call(data.binaryBuf));
data.pbjsMsg = pbjsReflect.decode(data.binaryBuf);
data.googMsgOpt = googOpt.deserializeBinary(data.binaryU8);
data.googMsgUnopt = googUnopt.deserializeBinary(data.binaryU8);
data.jspbText = googOpt.serializeText(data.googMsgOpt);

console.log('Payload sizes (byte):');
console.log('\t   Binary:', data.binaryU8.byteLength);
console.log('\t   Base64:', Math.ceil(data.binaryU8.byteLength / 3 * 4));
console.log('\tJspb-Text:', data.jspbText.length);
console.log('\t     JSON:', data.pbjsJsonStr.length);
console.log();


newSuite('decoding')
  // google-protobuf-js does not work with Buffer
  .add('google-binary-optimized', function() {
    googOpt.deserializeBinary(data.binaryU8);
  })
  .add('google-binary-unoptimized', function() {
    googUnopt.deserializeBinary(data.binaryU8);
  })
  .add('google-text-optimized', function() {
    googOpt.deserializeText(data.jspbText);
  })
  .add('protobuf.js-reflect', function() {
    pbjsReflect.decode(data.binaryBuf);
  })
  // About 18% slower than 'protobuf.js-reflect' in Node
  .add('protobuf.js-reflect-Uint8Array', function() {
    pbjsReflect.decode(data.binaryU8);
  })
  .add('protobuf.js-static', function() {
    pbjsStatic.decode(data.binaryBuf);
  })
  .add('JSON-string', function() {
    JSON.parse(data.pbjsJsonStr);
  })
  .run();


newSuite('encoding')
  .add('google-binary-optimized', function() {
    googOpt.serializeBinary(data.googMsgOpt);
  })
  .add('google-binary-unoptimized', function() {
    data.googMsgUnopt.serializeBinary();
  })
  .add('google-text-optimized', function() {
    googOpt.serializeText(data.googMsgOpt);
  })
  .add('protobuf.js-reflect', function() {
    pbjsReflect.encode(data.pbjsMsg).finish();
  })
  .add('protobuf.js-static', function() {
    pbjsStatic.encode(data.pbjsMsg).finish();
  })
  .add('JSON-string', function() {
    JSON.stringify(data.pbjsJson);
  })
  .run();
