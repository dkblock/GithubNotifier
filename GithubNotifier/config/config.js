import fs from 'fs';

const settings = JSON.parse(fs.readFileSync('./config/config.json'));

export const config = {
    github: {
        user: settings.github.user,
        repositories: settings.github.repositories,  
        clientID: settings.github.clientID,
        clientSecret: settings.github.clientSecret 
    },
    slack: {
        token: settings.slack.token,
        channel: settings.slack.channel
    },
    vk: {
        userID: settings.vk.userID,
        groupID: settings.vk.groupID,
        token: settings.vk.token
    },
    interval: 5000
}