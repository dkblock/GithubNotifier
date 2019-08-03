import nconf from 'nconf';
import fs from 'fs';

export function isLatestPushedCommitNew(data) {      
    const latestCommit = getLatestCommit();

    if(latestCommit !== data.sha) {
        return true;
    }

    return false;
}

export function saveLatestCommit(data) {
    nconf.env().argv().file('./config.json');
    
    const user = nconf.get('github:user');
    const repository = nconf.get('github:repository');
    const latestCommit = data.sha;

    nconf.env().argv().file('./github/latestCommits.json');     
    nconf.set(`${user}:${repository}:latestCommit`, latestCommit);  
    nconf.save(function (err) {
        fs.readFile('./github/latestCommits.json', function (err, data) {});
    });    
}

function getLatestCommit() {  
    nconf.env().argv().file('./config.json');    
    const user = nconf.get('github:user');
    const repository = nconf.get('github:repository');

    nconf.env().argv().file('./github/latestCommits.json');
    const latestCommit = nconf.get(`${user}:${repository}:latestCommit`);

    return latestCommit;
}