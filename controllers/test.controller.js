//const Product = require('../models/product.model');
const TEXT = require('../text');
const SCRAPE = require('../test');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(SCRAPE.scrape());
    //res.send(TEXT.transform(req.body.text));
    //res.send('Greetings from the Test controller!');
};