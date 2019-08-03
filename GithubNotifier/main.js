import getLatestCommit from './github/githubClient';
import sendMessage from './slack/slackClient';
import composeMessage from './slack/slackWorker';
import {isLatestPushedCommitNew, saveLatestCommit} from './github/githubWorker';

setInterval(checkLatestCommit, 5000);

function checkLatestCommit() {
    getLatestCommit().then((data) => {
        if(isLatestPushedCommitNew(data)) {
            const message = composeMessage(data); 
            sendMessage(message);
            saveLatestCommit(data);
        }
    })
}