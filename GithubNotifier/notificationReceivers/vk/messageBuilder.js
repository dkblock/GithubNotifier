export default function buildMessage(commit, repository) {    
    const committer = commit.committer.login;
    const text = commit.commit.message;
    const link = commit.html_url;
    const message = `New commit in repository ${repository}\nCommitter: ${committer}\nMessage: '${text}'\nLink: ${link}\n`;          
    
    return message;
}