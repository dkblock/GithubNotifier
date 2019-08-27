import {config} from './config/config';
import checkLatestCommit from './commitChecker';

const repositories = config.github.repositories;
const interval = config.interval;

repositories.forEach(repository => {
    setInterval(checkLatestCommit, interval, repository);
});