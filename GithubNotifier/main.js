import getLatestCommit from './githubClient';
import sendMessage from './slackClient';
import processMessage from './slackWorker';

function checkLatestCommit() {
    getLatestCommit().then((data) => {
        const message = processMessage(data); 
        sendMessage(message);
    })
}

checkLatestCommit();