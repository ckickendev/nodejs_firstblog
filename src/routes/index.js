const newsRoute = require('./news.js');
const siteRoute = require('./site.js');

function route(app) {
    app.use('/news', newsRoute);

    app.use('/', siteRoute);
}

module.exports = route;
