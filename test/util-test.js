'use strict'

const test = require('ava')
const utils = require('../lib/utils')

test('extracting hashtags from text', t => {
  let tags = utils.extractTags('a #post whit tags #AwEsOmE #Pelusa #AVA and ##yes')
  t.deepEqual(tags, [
    'post',
    'awesome',
    'pelusa',
    'ava',
    'yes'
  ])

  tags = utils.extractTags('a picture tith no tags')
  t.deepEqual(tags, [])

  tags = utils.extractTags()
  t.deepEqual(tags, [])

  tags = utils.extractTags(null)
  t.deepEqual(tags, [])
})
