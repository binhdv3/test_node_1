const siteRouter = require('./site')
const productRouter = require('./product')

function router(app) {
    app.use('/product', productRouter)
    app.use('/', siteRouter);
}

module.exports = router;