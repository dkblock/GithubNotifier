import getLatestCommit from './github/githubClient';
import {getLatestSavedCommit, saveLatestCommit} from './fileManager/fileManager';
import sendMessage from './slack/slackClient';

export default function checkLatestCommit() {
    getLatestCommit().then((commit) => {
        if(isLatestPushedCommitNew(commit)) {           
            sendMessage(commit);
            saveLatestCommit(commit);
        }
    })
}

function isLatestPushedCommitNew(commit) {      
    const latestSavedCommit = getLatestSavedCommit();

    if(latestSavedCommit !== commit.sha) {
        return true;
    }

    return false;
}