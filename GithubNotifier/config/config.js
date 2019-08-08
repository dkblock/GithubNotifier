import nconf from 'nconf';
nconf.env().argv().file('./config/config.json');

export const config = {
    github: {
        user: nconf.get('github:user'),
        repositories: nconf.get('github:repositories'),   
    },
    slack: {
        token: nconf.get('slack:token'),
        channel: nconf.get('slack:channel')
    },
    interval: 15000
}