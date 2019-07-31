export default function getLatestCommit() {
    const user = process.env.GIT_USER;
    const repo = process.env.GIT_REPO;

    return fetch(`https://api.github.com/repos/${user}/${repo}/commits/master`, {
    })
    .then((response) => { return response.json();
    })
}