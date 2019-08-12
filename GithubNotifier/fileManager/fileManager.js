import {config} from '../config/config';
import fs from 'fs';

export function getLatestSavedCommit(repository) {  
    const user = config.github.user;
    const commits = JSON.parse(fs.readFileSync('./fileManager/latestCommits.json'));
    let latestCommit;

    if(!commits[user] || !commits[user][repository]) {
        latestCommit = undefined;
    }
    else {
        latestCommit = commits[user][repository]['latestCommit'];
    }

    return latestCommit;
}

export function saveLatestCommit(commit, repository) {    
    const data = getDataForSaving(commit, repository);
    
    fs.writeFileSync('./fileManager/latestCommits.json', data);
}

function getDataForSaving(commit, repository) {
    const user = config.github.user
    const latestCommit = commit.sha;
    const commits = JSON.parse(fs.readFileSync('./fileManager/latestCommits.json'));

    if(!commits[user]) {
        commits[user] = {};
        commits[user][repository] = {};
    }
    else if (!commits[user][repository]) {
        commits[user][repository] = {};
    }

    commits[user][repository]['latestCommit'] = latestCommit;    
    const data = JSON.stringify(commits, null, 2);

    return data;
}