"use strict";

/**
 * @fileoverview Prepare test data of various forms
 */

const pbjs = require('protobufjs');
const jspbTestOptimized = require('./jspbTestOptimized');
const jspbTestUnoptimized = require('./types_pb').Test;


var typesJson = require('./types.json');
var root = pbjs.Root.fromJSON(typesJson);
var pbjsTest = root.resolveAll().lookup("Test");

// TODO: take the payload type as a command-line flag.
var pbjsJson = require('./payload.json');
//var pbjsJson = require('./payload_strs.json');
//var pbjsJson = require('./payload_ints.json');

var pbjsJsonStr = JSON.stringify(pbjsJson);

var binaryBuf = pbjsTest.encode(pbjsJson).finish();
var binaryU8 = new Uint8Array(Array.prototype.slice.call(binaryBuf));

var pbjsMsg = pbjsTest.decode(binaryBuf);

var jspbMsgOptimized = jspbTestOptimized.deserializeBinaryTest(binaryU8);
var jspbMsgUnoptimized = jspbTestUnoptimized.deserializeBinary(binaryU8);
var jspbText = jspbTestOptimized.serializeTextTest(jspbMsgOptimized);


module.exports = {
  // Serialized
  binaryBuf: binaryBuf,
  binaryU8: binaryU8,
  pbjsJsonStr: pbjsJsonStr,
  jspbText: jspbText,

  // Messages
  pbjsMsg: pbjsMsg,
  jspbMsgOptimized: jspbMsgOptimized,
  jspbMsgUnoptimized: jspbMsgUnoptimized,
  pbjsJson: pbjsJson
};
