const http = require("http");

const server = http.createServer((req, res) => {
	  if (req.url === "/health") {
		      res.writeHead(200);
		      res.end("OK");
		    } else {
			        res.writeHead(200);
			        res.end("Hello from DevOps Project 1 🚀");
			      }
});

server.listen(3000, () => {
	  console.log("Server running on port 3000");
})

