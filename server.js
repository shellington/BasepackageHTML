var express = require("express"),
        app = express();

// Create static
app.use('/BasepackageHTML', express.static(__dirname));

var server = app.listen(3000, function () {
    console.log("Server running on port %d. http://localhost:%d/BasepackageHTML", server.address().port, server.address().port);
});