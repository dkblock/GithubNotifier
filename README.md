# GithubNotifier

### Prepare for using
You need to create **config.json** file in **GithubNotifier** folder with the following settings:

**github:user** - user whose repository will be checked  
**github:repository** - repository to check the latest commit  
**slack:token** - token for the slack bot that will send notifications. Read the [documentation](https://api.slack.com/bot-users) to learn how to get it and configure your bot  
**slack:channel** - сhannel where notifications will be sent

For example:
```javascript
{
    "github": {
        "user": "dkblock",
        "repository": "GithubNotifier"
    },
    "slack": {
        "token": "xoxb-699737002945-696024412450-6he11On1c3t8k3nRuqzwHfQXF8H4Xgx",
        "channel": "CLRKPCL0U"
    }
}
```


