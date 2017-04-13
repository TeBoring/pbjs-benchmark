"use strict";

const newSuite = require("./suite");

const int32s = require("./data/int32s");
const jspbBin = require("./jspb_bin");

// console.log(int32s.MANY_INT32S_BIN.byteLength);
// console.log(jspbBin.parseManyInt32sBinary(int32s.MANY_INT32S_BIN));

// var pbjsBin = require("..").loadSync(require.resolve("./data/bench.proto")).resolveAll().lookup("Test");

const pbjs = require("protobufjs");

const ManyInt32s_pbjs = pbjs.loadSync(require.resolve("./data/data.proto"))
    .resolveAll().lookup("pack.ManyInt32s");
//console.log(Object.keys(ManyInt32s_pbjs));

//console.log(ManyInt32s_pbjs.decode(int32s.MANY_INT32S_BIN));

newSuite("decoding int32s")
    .add("JSPB", function() {
        jspbBin.parseManyInt32sBinary(int32s.MANY_INT32S_BIN);
    })
    .add("protobuf.js (reflect)", function() {
        ManyInt32s_pbjs.decode(int32s.MANY_INT32S_BIN);
    })
    .run();
