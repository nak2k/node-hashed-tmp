const { createHash } = require('crypto');
const { tmpdir } = require('os');
const { resolve } = require('path');
const mkdirp = require('mkdirp');

function hashedMkdirp(options, callback) {
  const dir = hashedTmpdir(options);

  mkdirp(dir, err => {
    if (err) {
      return callback(err);
    }

    callback(null, dir);
  });
}

function hashedMkdirpSync(options) {
  const dir = hashedTmpdir(options);

  mkdirp.sync(dir);

  return dir;
}

function hashedTmpdir(options) {
  const md5hash = createHash('md5');
  md5hash.update(options.src);
  const hash = md5hash.digest('hex');

  return resolve(tmpdir(), options.basedir || '.', hash);
}

/*
 * Exports.
 */
exports.mkdirp = hashedMkdirp;
exports.mkdirpSync = hashedMkdirpSync;
exports.tmpdir = hashedTmpdir;
