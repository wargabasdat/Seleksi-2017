#!/usr/bin/env node

/**
 * MIT License
 * Copyright (c) 2017 Dimitar Andreev
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * modified by Ray Andrew (http://github.com/ironlota)
 * to get omdb data and update data in database
 */

'use strict';

const program = require('commander');
const TmdbScript = require('./tmdb_script/TmdbScript');
const { STEP } = require('./tmdb_script/Constants');

program
    .version('1.0.9')
    .option('-t, --transfer-data', 'Transfer data from temporary to main collections.')
    .option('-s, --step', 'Start from a specific step i.e. `movies`, `images`, `videos`, `keywords`, `similar`, `credits`, `people`, `update`')
    .parse(process.argv);

let { transferData } = program;

let targetStep = program.hasOwnProperty('step') ? program.args[0] : STEP.MOVIES;
TmdbScript.start(targetStep, transferData);
