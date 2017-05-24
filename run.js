'use strict';

const newSuite  = require("./suite");
const pbjs = require('protobufjs');

var typesJson = require('./tests/simple1/types.json');
var root = pbjs.Root.fromJSON(typesJson);
var pbjsTestReflect = root.resolveAll().lookup("Test");
var pbjsTestStatic = require('./tests/simple1/pbjsStatic').Test;

const jspbTestOptimized = require('./tests/simple1/jspbTestOptimized');
const jspbTestUnoptimized = require('./tests/simple1/types_pb').Test;

const data = require('./tests/simple1/data');

console.log('Payload size (byte):');
console.log('\t   Binary:', data.binaryU8.byteLength);
console.log('\t   Base64:', Math.ceil(data.binaryU8.byteLength / 3 * 4));
console.log('\tJspb-Text:', data.jspbText.length);
console.log('\t     JSON:', data.pbjsJsonStr.length);
console.log();


newSuite("decoding")
  // google-protobuf-js does not work with Buffer
  .add("google-binary-optimized", function() {
    jspbTestOptimized.deserializeBinaryTest(data.binaryU8);
  })
  .add("google-binary-unoptimized", function() {
    jspbTestUnoptimized.deserializeBinary(data.binaryU8);
  })
  .add("google-text-optimized", function() {
    jspbTestOptimized.deserializeTextTest(data.jspbText);
  })
  .add("protobuf.js-reflect", function() {
    pbjsTestReflect.decode(data.binaryBuf);
  })
  // About 18% slower than "protobuf.js-reflect" in Node
  .add("protobuf.js-reflect-Uint8Array", function() {
    pbjsTestReflect.decode(data.binaryU8);
  })
  .add("protobuf.js-static", function() {
    pbjsTestStatic.decode(data.binaryBuf);
  })
  .add("JSON-string", function() {
    JSON.parse(data.pbjsJsonStr);
  })
  .run();


newSuite("encoding")
  .add("google-binary-optimized", function() {
    jspbTestOptimized.serializeBinaryTest(data.jspbMsgOptimized);
  })
  .add("google-binary-unoptimized", function() {
    data.jspbMsgUnoptimized.serializeBinary();
  })
  .add("google-text-optimized", function() {
    jspbTestOptimized.serializeTextTest(data.jspbMsgOptimized);
  })
  .add("protobuf.js-reflect", function() {
    pbjsTestReflect.encode(data.pbjsMsg).finish();
  })
  .add("protobuf.js-static", function() {
    pbjsTestStatic.encode(data.pbjsMsg).finish();
  })
  .add("JSON-string", function() {
    JSON.stringify(data.pbjsJson);
  })
  .run();
