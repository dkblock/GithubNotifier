import {config} from '../config/config';

export default function composeMessage(data) {    
    const repository = config.github.repository;
    const message = {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `*New commit in repository ${repository}* :wink:\n>Committer: ${data.committer.login}\n>Message: '${data.commit.message}'\n`
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "GET IT",
                    },
                    "url": `${data.html_url}`,
                    "style": "primary"
                }
    }    
    
    return message;
}