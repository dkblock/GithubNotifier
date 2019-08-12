import getLatestCommit from './github/githubClient';
import {getLatestSavedCommit, saveLatestCommit} from './fileManager/fileManager';
import {sendMessage as sendMessageToSlack} from './notificationReceivers/slack/slackClient';
import {sendMessage as sendMessageToVK} from './notificationReceivers/vk/vkClient';
import {printMessage as printmessageOnConsole} from './notificationReceivers/console/printer'

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

function sendNotifications(commit, repository) {
    sendMessageToSlack(commit, repository);
    sendMessageToVK(commit, repository);
    printmessageOnConsole(commit, repository);
}