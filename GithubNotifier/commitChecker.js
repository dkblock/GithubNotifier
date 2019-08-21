import getLatestCommit from './github/githubClient';
import {getLatestSavedCommit, saveLatestCommit} from './fileManager/fileManager';
import sendNotifications from './notifier';

export default async function checkLatestCommit(repository) {
    const commit = await getLatestCommit(repository);

    if(isLatestPushedCommitNew(commit, repository)) {           
        sendNotifications(commit, repository);
        saveLatestCommit(commit, repository);
    }
}

function isLatestPushedCommitNew(commit, repository) {      
    const latestSavedCommit = getLatestSavedCommit(repository);

    if(latestSavedCommit !== commit.sha) {
        return true;
    }

    return false;
}