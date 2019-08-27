import buildMessage from './messageBuilder';

export function sendMessage(commit, repository) {
    const message = buildMessage(commit, repository);
    
    console.log(message);
}