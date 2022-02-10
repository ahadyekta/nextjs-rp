const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { routes } = require('./config.js');

const app = express();
const proxyPort = 9000;

////////////////////// Reverse Proxy ///////////////////////

Object.values(routes).forEach(({port, url, pathRewrite, basePath}) => {
    
    if(url !== '/'){
        // has locale (for main routing)
        app.use(url, (req, res) => {
            const target = `http://localhost:${port}`
            const options = { target: target, changeOrigin: true,
                pathRewrite: {
                '^/de/blog': '/blog/de',
                '^/en/blog': '/blog/en',
            }, };
            const proxy = createProxyMiddleware(options);
            proxy(req, res)
        })
    }
    
    // dont have locale (downloading assets)
    app.use(basePath, (req, res) => {
        
        const target = `http://localhost:${port}`
        const options = { target: target, changeOrigin: true};
        const proxy = createProxyMiddleware(options);
        proxy(req, res)
    })
})


app.listen(proxyPort , () => {
    console.log(`App is listening at http://localhost:${proxyPort}`)
  });