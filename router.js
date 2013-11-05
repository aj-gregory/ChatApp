var fs = require("fs");

function router (req, res) {
	  console.log(req.url);

		if (req.url == '/'){
			fs.readFile("./public/index.html", function(err, data){
				res.writeHead(200, {"Content-Type" : "text/html" });
				res.end(data);
			});
		} else {
			fs.readFile("./public" + req.url, function(err, data){
				if (err){
					res.writeHead(404, {"Content-Type": "text/plain"});
					res.write("Error: page not found");
					res.end();
				} else {
					res.writeHead(200, {"Content-Type" : "text/html" });
					res.end(data);
				}
		  });
		}
};

module.exports.router = router;