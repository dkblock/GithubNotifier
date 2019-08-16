import {sendMessage as sendMessageToSlack} from './notificationReceivers/slack/slackClient';
import {sendMessage as sendMessageToVK} from './notificationReceivers/vk/vkClient';
import {printMessage as printmessageOnConsole} from './notificationReceivers/console/printer'

export default function sendNotifications(commit, repository) {
    sendMessageToSlack(commit, repository);
    sendMessageToVK(commit, repository);
    printmessageOnConsole(commit, repository);
}