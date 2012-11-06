var app = module.exports = require('railway').createServer();

if (!module.parent) {
    var port = process.env.PORT || 9251
    app.listen(port);
    console.log("Railway server listening on port %d within %s environment", port, app.settings.env);
}

