import buildMessage from './messageBuilder';

export function printMessage(commit, repository) {
    const message = buildMessage(commit, repository);
    
    console.log(message);
}