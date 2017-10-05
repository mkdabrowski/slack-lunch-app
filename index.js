var IncomingWebhook = require('@slack/client').IncomingWebhook;
var request = require('request');
var cheerio = require('cheerio');

var slackUrl = process.env.SLACK_WEBHOOK_URL || '';
var args = process.argv.slice(2);
var facebookUrl = args[0] || '';
var username = args[1] || 'LunchApp';
var emoji = args[2] || ':stew:';

var webhook = new IncomingWebhook(slackUrl, { username: username, iconEmoji: emoji });

request(facebookUrl, { headers: { 'user-agent': 'curl/7.47.0', 'accept-language': 'en-US,en', 'accept': '*/*' } }, 
	function(error, response, html) {
		if(!error) {
			var $ = cheerio.load(html);
			var image = $('.mtm .uiScaledImageContainer img.img').first();
			var text = image.closest('.fbUserStory').find('.userContent p').text();
			var imageUrl = image.attr('src');
			webhook.send({
				"attachments": [{
					"color": "#3b5998",
					"author_name": username,
					"author_link": facebookUrl,
					"author_icon": "https://www.facebook.com/favicon.ico",
					"image_url": imageUrl,
					"text": text
				}]
			});
        	}
	}
);
