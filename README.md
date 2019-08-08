# GithubNotifier

### Prepare for using
You need to create **config.json** file in **GithubNotifier/config** folder with the following settings:

**github:user** - user whose repositories will be checked  
**github:repositories** - list of repositories to check latest commits  
**slack:token** - token for the slack bot that will send notifications. Read the [documentation](https://api.slack.com/bot-users) to learn how to get it and configure your bot  
**slack:channel** - сhannel where notifications will be sent

For example:
```json
{
    "github": {
        "user": "dkblock",
        "repositories": [
            "GithubNotifier", 
            "Personal",
            "YarTransport",
            "TreesComparer",
            "Confirmit2019"
        ]
    },
    "slack": {
        "token": "xoxb-699737002945-696024412450-6he11On1c3t8k3nRuqzwHfQXF8H4Xgx",
        "channel": "CLRKPCL0U"
    }
}
```



