'use strict';

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

module.exports = {
  QUERY_TIMEOUT: 300000000000,
  POOL_SIZE: 5,
  REQUESTS_PER_TICK: 39,
  TICK_TIMEOUT: 10000,
  AFFIRMATIVE_ANSWER: 'y',
  SEPARATOR_SYMBOL: '=',
  SEPARATOR_SYMBOLS_COUNT: 100,
  EVENTS: {
    START: 'start',
    NO_NEW_MOVIES: 'no-new-movies',
    DOWNLOAD_NEW_MOVIES: 'download-new-movies',
    NEW_MOVIES_DETAILS_DOWNLOADED: 'new-movies-details-downloaded',
    IMAGES_DOWNLOADED: 'images-downloaded',
    VIDEOS_DOWNLOADED: 'videos-downloaded',
    KEYWORDS_DOWNLOADED: 'keywords-downloaded',
    SIMILAR_DOWNLOADED: 'similar-downloaded',
    CREDITS_DOWNLOADED: 'credits-downloaded',
    PEOPLE_DOWNLOADED: 'people-downloaded',
    TRANSFER_NEW_DATA: 'transfer-new-data',
    NEW_DATA_TRANSFERRED: 'new-data-transferred',
    UPDATE_MOVIE: 'update-movie',
    ERROR: 'error',
    EXIT: 'exit'
  },
  STEP: {
    MOVIES: 'movies',
    IMAGES: 'images',
    VIDEOS: 'videos',
    KEYWORDS: 'keywords',
    CREDITS: 'credits',
    SIMILAR: 'similar',
    PEOPLE: 'people',
    UPDATE: 'update'
  }
};
