import getLatestCommit from './github/githubClient';
import {getLatestSavedCommit, saveLatestCommit} from './fileManager/fileManager';
import sendMessage from './slack/slackClient';

export default async function checkLatestCommit(repository) {
    const commit = await getLatestCommit(repository);

    if(isLatestPushedCommitNew(commit, repository)) {           
        sendMessage(commit, repository);
        saveLatestCommit(commit, repository);
        console.log(1);
    }
}

function isLatestPushedCommitNew(commit, repository) {      
    const latestSavedCommit = getLatestSavedCommit(repository);

    if(latestSavedCommit !== commit.sha) {
        return true;
    }

    return false;
}