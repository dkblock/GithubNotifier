import getLatestCommit from './github/githubClient';
import {getLatestSavedCommit, saveLatestCommit} from './fileManager/fileManager';
import sendMessage from './slack/slackClient';

export default function checkLatestCommit(repository) {
    getLatestCommit(repository).then((commit) => {
        if(isLatestPushedCommitNew(commit, repository)) {           
            sendMessage(commit, repository);
            saveLatestCommit(commit, repository);
        }
    })
}

function isLatestPushedCommitNew(commit, repository) {      
    const latestSavedCommit = getLatestSavedCommit(repository);

    if(latestSavedCommit !== commit.sha) {
        return true;
    }

    return false;
}