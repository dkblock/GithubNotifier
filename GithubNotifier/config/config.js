import fs from 'fs';

const settings = JSON.parse(fs.readFileSync('./config/config.json'));

export const config = {
    github: {
        user: settings.github.user,
        repositories: settings.github.repositories,  
        clientID: settings.github.clientID,
        clientSecret: settings.github.clientSecret, 
    },
    slack: {
        token: settings.slack.token,
        channel: settings.slack.channel,
        client: './notificationReceivers/slack/slackClient'
    },
    vk: {
        userID: settings.vk.userID,
        groupID: settings.vk.groupID,
        token: settings.vk.token,
        client: './notificationReceivers/vk/vkClient'
    },
    console: {
        client: './notificationReceivers/console/printer'
    },
    notificationReceivers: settings.notificationReceivers,
    interval: 5000
}