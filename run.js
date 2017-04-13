'use strict';

const newSuite  = require("./suite");
const pbjs = require('protobufjs');

var typesJson = require('./tests/simple1/types.json');
var root = pbjs.Root.fromJSON(typesJson);
var pbjsTestReflect = root.resolveAll().lookup("Test");
var pbjsTestStatic = require('./tests/simple1/pbjsStatic').Test;

const jspbTestOptimized = require('./tests/simple1/jspbTestOptimized');
const jspbTestUnoptimized = require('./tests/simple1/jspbTestUnoptimized').Test;

const data = require('./tests/simple1/data');

console.log('Binary payload size =', data.binaryU8.byteLength);
console.log('Jspb-Text payload size =', data.jspbText.length);
console.log('JSON payload size =', data.pbjsJsonStr.length);


newSuite("decoding")
  .add("protobuf.js-reflect-Buffer", function() {
    pbjsTestReflect.decode(data.binaryBuf);
  })
  .add("protobuf.js-reflect-Uint8Array", function() {
    pbjsTestReflect.decode(data.binaryU8);
  })
  .add("protobuf.js-static-Buffer", function() {
    pbjsTestStatic.decode(data.binaryBuf);
  })
  // google-protobuf-js does not work with Buffer
  .add("google-binary-optimized-Uint8Array", function() {
    jspbTestOptimized.deserializeBinaryTest(data.binaryU8);
  })
  .add("google-binary-unoptimized-Uint8Array", function() {
    jspbTestUnoptimized.deserializeBinary(data.binaryU8);
  })
  .add("google-text-optimized", function() {
    jspbTestOptimized.deserializeTextTest(data.jspbText);
  })
  .add("JSON-string", function() {
    JSON.parse(data.pbjsJsonStr);
  })
  .run();


newSuite("encoding")
  .add("protobuf.js-reflect", function() {
    pbjsTestReflect.encode(data.pbjsMsg).finish();
  })
  .add("protobuf.js-static", function() {
    pbjsTestStatic.encode(data.pbjsMsg).finish();
  })
  .add("google-binary-optimized", function() {
    jspbTestOptimized.serializeBinaryTest(data.jspbMsgOptimized);
  })
  .add("google-binary-unoptimized", function() {
    data.jspbMsgUnoptimized.serializeBinary();
  })
  .add("google-text-optimized", function() {
    jspbTestOptimized.serializeTextTest(data.jspbMsgOptimized);
  })
  .add("JSON-string", function() {
    JSON.stringify(data.pbjsJson);
  })
  .run();
