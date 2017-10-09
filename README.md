# slack-lunch-app

Simple app which allow to get latest post with a photo from public Facebook page and share it to the Slack channel using Incoming WebHook integration.

Usage:

`node index.js <facebookPage> <username> <emoji>`

Set `SLACK_WEBHOOK_URL` environment variable to your Webhook URL, and set `FACEBOOK_APP_ID, FACEBOOK_APP_SECRET` accordingly.

