var request = require("request");
var cheerio = require("cheerio");

var url = "https://vault.shopify.com/";

crawlPages(url);

//Get all links from page  
function crawlPages(url) {
    request(url, function (error, response, html) {
      if (!error) {
        var $ = cheerio.load(html);
        console.log("Vault links: " + html);
        $('a').each(function() {
        	var link = $(this);
            var href = link.attr("href");
            if(href && href.indexOf("vault") > -1) {
    	 		console.log(href + "\n");
            }
        });

      } else {
        console.log("We’ve encountered an error: " + error);
      }
    });
}