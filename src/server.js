var http = require('http');
var url = require('url');
var request = require('request');
var citeproc = require('./citeproc');
var doi = require('./doi');
var settings = require('./settings');

console.log(settings);

function init() {
	console.log("creating server...");
	http.createServer(server).listen(settings.port);
	console.log("server listening on port " + settings.port + ".");
}

function server(req, res) {
	var path = url.parse(req.url).pathname;
	switch (path) {
	case "/format":
		formatHandler(req, res);
		break;
	case "/styles":
		listHandler(req, res, citeproc.getStyles());
		break;
	case "/locales":
		listHandler(req, res, citeproc.getLocales());
		break;
	default:
		sendResponse(res, 404, "url not found");
	}
}

function listHandler(req, res, array) {
	var json = JSON.stringify(array);
	sendResponse(res, 200, json, {
		"Content-Type" : "application/json"
	});
}

function formatHandler(req, res) {
	var query = getQuery(req.url);
	var doi = query.doi;
	if (doi == undefined)
		sendResponse(res, 400, "doi param required");
	else {
		require("./doi").resolve(doi, function(data) {
			try {
				item = JSON.parse(data);
				citeproc.format(item, query.style, query.lang, function(text) {
					sendResponse(res, 200, text);
				}, function(msg) {
					sendResponse(res, 400, msg);
				});
			} catch (err) {
				sendResponse(res, 500, "error while formatting: " + err.message);
			}
		}, function(code, msg) {
			sendResponse(res, code, msg);
		}, "application/citeproc+json");
	}
}

function getQuery(url) {
	return require('url').parse(url, true).query;
}

function sendResponse(res, code, body, options) {
	if (options == null)
		options = {};
	if (options["Content-Type"] == undefined)
		options["Content-Type"] = "text/plain";
	res.writeHead(code, options);
	res.write(body);
	res.end();
}

init();