
var Cite = require("../index.js");

var query = {
  style:"chicago-author-date",
  doi:"10.1145/2783446.2783605",
  lang:"en-GB"
};
var request = {
  query: query
};


callback = function (text){
  console.log(text);
}

Cite.execute(request, callback);
