const request = require('request');
const cheerio = require('cheerio');
var Jimp = require("jimp");


request(process.argv[2], function (error, response, html) {
  if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html);
    const imageUrl = $(process.argv[3]).attr('src');

    Jimp.read(imageUrl, function(err, image) {
      image.write(process.argv[4]);
    });
  }
});
