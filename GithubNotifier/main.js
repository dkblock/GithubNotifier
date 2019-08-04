import getLatestCommit from './github/githubClient';
import {isLatestPushedCommitNew, saveLatestCommit} from './github/githubWorker';
import sendMessage from './slack/slackClient';

setInterval(checkLatestCommit, 5000);

function checkLatestCommit() {
    getLatestCommit().then((data) => {
        if(isLatestPushedCommitNew(data)) {           
            sendMessage(data);
            saveLatestCommit(data);
        }
    })
}