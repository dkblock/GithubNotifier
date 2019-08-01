import getLatestCommit from './github/githubClient';
import sendMessage from './slack/slackClient';
import composeMessage from './slack/slackWorker';

setInterval(checkLatestCommit, 5000);

function checkLatestCommit() {
    getLatestCommit().then((data) => {
        const message = composeMessage(data); 
        sendMessage(message);
    })
}