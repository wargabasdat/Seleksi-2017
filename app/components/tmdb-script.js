#!/usr/bin/env node

'use strict';

const fs = require('fs');
const program = require('commander');
const TmdbScript = require('./tmdb_script/TmdbScript');
const { STEP } = require('./tmdb_script/Constants');

program
    .version('1.0.9')
    .option('-t, --transfer-data', 'Transfer data from temporary to main collections.')
    .option('-s, --step', 'Start from a specific step i.e. `movies`, `images`, `videos`, `keywords`, `similar`, `credits`, `people`')
    .parse(process.argv);

let { transferData, step } = program;

let targetStep = program.hasOwnProperty('step') ? program.args[1] : STEP.MOVIES;
TmdbScript.start(targetStep, transferData);
