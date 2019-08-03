import nconf from 'nconf';

export default function getLatestCommit() {  
    nconf.env().argv().file('./config.json');
    
    const user = nconf.get('github:user');
    const repository = nconf.get('github:repository');
    const url = `https://api.github.com/repos/${user}/${repository}/commits/master`;

    return fetch(url, {
    })
    .then((response) => { return response.json();
    })
}