const request = require('request');
const cheerio = require('cheerio');
const Jimp = require("jimp");
const normalizeUrl = require('normalize-url');

request(normalizeUrl(process.argv[2]), function (error, response, html) {
  if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html);
    const imageUrl = $(process.argv[3]).attr('src');

    Jimp.read(normalizeUrl(imageUrl), function(err, image) {
      image.write(process.argv[4]);
    });
  }
});
