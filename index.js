var IncomingWebhook = require('@slack/client').IncomingWebhook;
var facebook = require('fbGraph');

var slackUrl = process.env.SLACK_WEBHOOK_URL || '';
var appId = process.env.FACEBOOK_APP_ID || '';
var appSecret = process.env.FACEBOOK_APP_SECRET || '';
var args = process.argv.slice(2);
var facebookPage = args[0] || '';
var username = args[1] || 'LunchApp';
var emoji = args[2] || ':stew:';

var webhook = new IncomingWebhook(slackUrl, { username: username, iconEmoji: emoji });

facebook.setAccessToken(appId + '|' + appSecret);
facebook.get(facebookPage + '/posts', { fields: 'full_picture,message,permalink_url,from,created_time', limit: 1 }, function(err, res){
	if(err) return;

	var attachments = res.data.map(function(post){
		return {
			"color": "#3b5998",
			"author_name": post.from.name,
			"author_link": post.permalink_url,
			"author_icon": "https://www.facebook.com/favicon.ico",
			"image_url": post.full_picture,
			"text": post.message,
			"ts": Math.floor(Date.parse(post.created_time) / 1000)
		}
	});
	webhook.send({attachments: attachments});
	console.log(attachments);
});