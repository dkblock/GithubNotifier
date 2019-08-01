const nconf = require('nconf');
nconf.env().argv().file('./config/config.json');

export default function sendMessage(message) {
    const token = nconf.get('slack:token');
    const channel = nconf.get('slack:channel');
    const url = `https://slack.com/api/chat.postMessage`;
    
    fetch(url, {
        method: 'post',
        body: JSON.stringify({
            channel: channel,
            blocks: [ 
                message,
                {
                    "type": "divider"
                } 
            ],
            as_user: true,
        }),
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         },
    });
}