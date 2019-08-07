import {config} from '../config/config';

export default function getLatestCommit() {      
    const user = config.github.user;
    const repository = config.github.repository;
    const url = `https://api.github.com/repos/${user}/${repository}/commits/master`;

    return fetch(url, {
    })
    .then((response) => { return response.json();
    })
}