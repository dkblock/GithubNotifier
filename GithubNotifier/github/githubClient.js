import nconf from 'nconf';
nconf.env().argv().file('./config.json');

export default function getLatestCommit() {  
    const user = nconf.get('github:user');
    const repository = nconf.get('github:repository');
    const url = `https://api.github.com/repos/${user}/${repository}/commits/master`;

    return fetch(url, {
    })
    .then((response) => { return response.json();
    })
}