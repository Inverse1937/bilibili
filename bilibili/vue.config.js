const path = require('path')
const ele = require('./bilibili.json')
const arr = require('./hot.json')
const {data} = ele
const {typen} = arr


module.exports = {
    configureWebpack: {
        devServer: {         
            before: function (app, server) {
                app.get('/api/data', function (req, res) {
                    res.json(data);
                });
                app.get('/api/typen', function (req, res) {
                    res.json(typen);
                });
            }
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: [
            path.resolve(__dirname, 'src/scss/*.scss'),
        ]
      }
    }
}
