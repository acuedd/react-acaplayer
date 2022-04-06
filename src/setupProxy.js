const { createProxyMiddleware } = require('http-proxy-middleware');

const URL = `${process.env.REACT_APP_DOMAIN}/webservice.php?o=b6009cea-0500-11eb-b265-0242ac130002&m=am&f=json&t=`;

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/acaplayer', {
            target: URL, // API endpoint 1
            changeOrigin: true,
            pathRewrite: {
                "^": "",
            },
            headers: {
                Connection: "keep-alive"
            }
        })
    );
}