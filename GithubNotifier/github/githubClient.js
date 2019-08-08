import {config} from '../config/config';

export default function getLatestCommit(repository) {      
    const user = config.github.user;
    const url = `https://api.github.com/repos/${user}/${repository}/commits/master`;

    return fetch(url)
    .then((response) => { return response.json();
    })
}