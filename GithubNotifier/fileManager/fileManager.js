import {config} from '../config/config';
import fs from 'fs';

export function getLatestSavedCommit(repository) {  
    const user = config.github.user;
    const commits = getCommits();
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
    const commits = processCommitsForSaving(commit, repository);
    const data = JSON.stringify(commits, null, 2); 

    fs.writeFileSync('./fileManager/latestCommits.json', data);
}

function getCommits() {
    const commits = JSON.parse(fs.readFileSync('./fileManager/latestCommits.json'));

    return commits;
}

function processCommitsForSaving(commit, repository) {
    const user = config.github.user
    const latestCommit = commit.sha;
    const commits = getCommits();

    if(!commits[user]) {
        commits[user] = {};
        commits[user][repository] = {};
    }
    else if (!commits[user][repository]) {
        commits[user][repository] = {};
    }

    commits[user][repository]['latestCommit'] = latestCommit;        

    return commits;
}