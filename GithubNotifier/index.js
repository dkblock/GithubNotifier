require('dotenv').config();
require('es6-promise').polyfill();
require('isomorphic-fetch');
require('@babel/register')({
    presets: ['@babel/preset-env']
});

require('./main.js');