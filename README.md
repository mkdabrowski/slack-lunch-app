# slack-lunch-app

Simple app which allow to get latest post with a photo from public Facebook page and share it to the Slack channel using Incoming WebHook integration.

Usage:

`node index.js <facebookPage> [<since> <username> <emoji>]`

* `<facebookPage>` - A facebook page name or page id. Required.
* `<since>` - A Unix timestamp or [strtotime](http://php.net/manual/en/function.strtotime.php) data value that points to the start of the range. Default value: `-16 hours`
* `<username>` - Username on Slack. Default value: `LunchApp`
* `<emoji>` - Username icon on Slack. Default value: :stew:

Set `SLACK_WEBHOOK_URL` environment variable to your Webhook URL, and set `FACEBOOK_APP_ID, FACEBOOK_APP_SECRET` accordingly.

