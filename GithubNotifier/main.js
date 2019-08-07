import checkLatestCommit from './commitChecker';
import {config} from './config/config';

setInterval(checkLatestCommit, config.interval);