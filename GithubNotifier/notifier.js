import {config} from './config/config';

export default function sendNotifications(commit, repository) {
    const notificationReceivers = config.notificationReceivers;

    notificationReceivers.forEach(receiver => {
        sendMessage(commit, repository, receiver);
    });
}

async function sendMessage(commit, repository, receiver) {
    const client = await import(config[receiver].client);
    client.sendMessage(commit, repository);
}