"use strict";

function generate() {
  var foo = [];
  var bar = 0;
  var output = '';

  for (var i = 0; i < 12; i++) {
    var sub = 13 - i;
    var confu = i + 1;
    foo[confu] = rand();
    bar += foo[confu] * sub;
    output = output.concat(foo[confu]);
  }

  bar = (11 - bar % 11) % 10;
  output = output.concat(bar);
  return output;
}

function rand() {
  return Math.floor(Math.random() * 10);
}