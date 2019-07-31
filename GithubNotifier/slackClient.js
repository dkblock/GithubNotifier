export default function sendMessage(message) {
    const token = process.env.SLACK_TOKEN;
    const channel = process.env.SLACK_CHANNEL;
    const url = `https://slack.com/api/chat.postMessage`;
    
    fetch(url, {
        method: 'post',
        body: JSON.stringify({
            channel: channel,
            text: message,
            as_user: true
        }),
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         },
    });
}