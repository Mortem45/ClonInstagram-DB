'use strict'

const uuid = require('uuid-base62')

const fixtures = {
  getImage () {
    return {
      description: 'an #awesome picture with #instagram',
      url: `https://cloninstagram.test/${uuid.v4()}.jpg`,
      likes: 0,
      liked: false,
      user_id: uuid.uuid()
    }
  },
  getImages (n) {
    let images = []
    while (n-- > 0) {
      images.push(this.getImage())
    }
    return images
  },
  getUser () {
    return {
      name: 'A random user',
      username: `use_id${uuid.v4()}`,
      password: uuid.uuid(),
      email: `${uuid.v4()}@instagram.test`
    }
  }
}

module.exports = fixtures
