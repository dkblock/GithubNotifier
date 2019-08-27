import {config} from './config/config';

export default function sendNotifications(commit, repository) {
    const notificationReceivers = config.notificationReceivers;

    notificationReceivers.forEach(receiver => {
        sendMessage(commit, repository, receiver);
    });
}

async function sendMessage(commit, repository, receiver) {
    const clientPath = config[receiver].client;
    const client = await import(clientPath);
    
    client.sendMessage(commit, repository);
}