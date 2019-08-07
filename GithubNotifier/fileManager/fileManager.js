import {config} from '../config/config';
import fs from 'fs';

export function saveLatestCommit(commit) {    
    const user = config.github.user
    const repository = config.github.repository;
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
    fs.writeFileSync('./fileManager/latestCommits.json', JSON.stringify(commits, null, 2));
}

export function getLatestSavedCommit() {  
    const user = config.github.user;
    const repository = config.github.repository;
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