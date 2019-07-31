import getLatestCommit from './githubClient';
import sendMessage from './slackClient';
import composeMessage from './slackWorker';

function checkLatestCommit() {
    getLatestCommit().then((data) => {
        const message = composeMessage(data); 
        sendMessage(message);
    })
}

checkLatestCommit();