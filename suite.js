"use strict";
module.exports = newSuite;

var benchmark = require("benchmark"),
    chalk = require("chalk");

if (typeof(window) == 'object') {
  window.Benchmark = benchmark;
}

var padSize = 35;

function newSuite(name) {
  var benches = [];
  return new benchmark.Suite(name)
    .on("add", function(event) {
      benches.push(event.target);
    })
    .on("start", function() {
      console.log(
        chalk.white.bold("benchmarking " + name + " performance ...") +
          "\n");
    })
    .on("cycle", function(event) {
      console.log(String(event.target));
    })
    .on("complete", function() {
      if (benches.length > 1) {
        benches.sort(function(a, b) {
          return getHz(b) - getHz(a);
        });
        var fastest = benches[0],
            fastestHz = getHz(fastest);
        console.log("\n" + chalk.white(pad(fastest.name, padSize)) + " was " +
                    chalk.green("fastest"));
        benches.slice(1).forEach(function(bench) {
          var hz = getHz(bench);
          var percent = 1 - hz / fastestHz;
          console.log(
            chalk.white(pad(bench.name, padSize)) + " was " +
            chalk.red((percent * 100).toFixed(1) +
                      "% ops/sec slower (factor " + (fastestHz / hz).toFixed(2) +
                      ")"));
        });
      }
      console.log("\n");
    });
}

function getHz(bench) {
  return 1 / (bench.stats.mean + bench.stats.moe);
}

function pad(str, len, l) {
  while (str.length < len)
    str = l ? str + " " : " " + str;
  return str;
}
