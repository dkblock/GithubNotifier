export default function processMessage(data) {
    const repo = process.env.GIT_REPO;
    const message = `New commit in ${repo}:\nCommitter: ${data.committer.login}\nMessage: '${data.commit.message}'\nLink: ${data.html_url}`;

    return message;
}