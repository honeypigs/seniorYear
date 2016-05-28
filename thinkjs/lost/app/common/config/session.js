'use strict';

module.exports = {
  name: 'thinkjs',
  type: 'file',
  secret: 'VE9~7R!M',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.RUNTIME_PATH + '/session',
    }
  }
}