import {config} from '../config/config';

export default async function getLatestCommit(repository) {      
    const user = config.github.user;
    const url = `https://api.github.com/repos/${user}/${repository}/commits/master`;
    const response = await fetch(url);
    const commit = await response.json();

    return commit;
}