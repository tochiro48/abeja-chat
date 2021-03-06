/* Copyright 2013 Intelligent Technology Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or ag'Search'ting, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var express = require('express');
var router = express.Router();
var message = require('./message');

exports.module = message

/* POST chat page. */
router.post('/', function(req, res) {
  var query = req.body.query;
  message.search(function(message){
    res.render('search', {
      title : "search",
      username : req.session.user,
      message : message,
      query : query
    });
  },query)
});

module.exports = router;
