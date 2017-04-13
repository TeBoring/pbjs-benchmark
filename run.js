'use strict';

const newSuite  = require("./suite");
const pbjs = require('protobufjs');

var typesJson = require('./tests/simple1/types.json');
var root = pbjs.Root.fromJSON(typesJson);
var pbjsTestReflect = root.resolveAll().lookup("Test");
var pbjsTestStatic = require('./tests/simple1/pbjsStatic').Test;

const jspbTestOptimized = require('./tests/simple1/jspbTestOptimized');

const data = require('./tests/simple1/data');


console.log('Binary payload size =', data.binaryU8.byteLength);
console.log('Jspb-Text payload size =', data.jspbText.length);
console.log('JSON payload size =', data.pbjsJsonStr.length);

// console.log('binaryBuf:', data.binaryBuf);
// console.log('binaryU8:', data.binaryU8);
// console.log('pbjsJsonStr:', data.pbjsJsonStr);
// console.log('jspbText:', data.jspbText);


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
