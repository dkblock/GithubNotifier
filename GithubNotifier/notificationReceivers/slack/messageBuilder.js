export default function buildMessage(commit, repository) {  
    const committer = commit.committer.login;
    const text = commit.commit.message;
    const url = commit.html_url;   
    const message = {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `*New commit in repository ${repository}* :wink:\n>Committer: ${committer}\n>Message: '${text}'\n`
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "GET IT",
                    },
                    "url": `${url}`,
                    "style": "primary"
                }
    }    
    
    return message;
}