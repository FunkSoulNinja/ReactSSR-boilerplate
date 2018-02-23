import cluster from 'cluster';

if (cluster.isMaster) {
    let cpuCount = require('os').cpus().length;

    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }
    cluster.on('exit', () => cluster.fork());
} else {
    require('babel-polyfill');
    const express = require('express');
    const expressStaticGzip = require('express-static-gzip');
    const { matchRoutes } = require('react-router-config');

    const renderer = require('./helpers/renderer').default;
    const createStore = require('./helpers/createStore').default;
    const Routes = require('./client/Routes').default;

    const app = express();
    app.use('/public', expressStaticGzip('public'));

    const PORT = process.env.PORT || 3000;

    app.get('*', (req, res) => {
        const store = createStore();

        const promises = matchRoutes(Routes, req.path)
            .map(({ route }) => {
                return route.loadData ? route.loadData(store) : null;
            })
            .map(promise => {
                if (promise) {
                    return new Promise(resolve => {
                        promise.then(resolve).catch(resolve);
                    });
                }
            });

        Promise.all(promises).then(() => {
            const context = {};
            const content = renderer(req, store, context);
            if (context.url) {
                return res.redirect(301, context.url);
            }
            if (context.notFound) {
                res.status(404);
            }
            res.send(content);
        });
    });

    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}
