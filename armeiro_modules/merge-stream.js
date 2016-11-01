'use strict';

var PassThrough = require('stream').PassThrough;

module.exports = function () {
  var sources = [];
  var output = new PassThrough({objectMode: true});

  output.setMaxListeners(0);
  output.add = add;
  output.on('unpipe', remove);

  Array.prototype.slice.call(arguments).forEach(add);

  return output;

  function add(source) {
    if (Array.isArray(source)) {
      source.forEach(add);
      return this;
    }

    sources.push(source);
    source.once('end', remove.bind(null, source));
    source.pipe(output, {end: false});
    return this;
  }

  function remove(source) {
    sources = sources.filter(function (it) {
      return it !== source;
    });
    if (!sources.length && output.readable) {
      output.end();
    }
  }
};
