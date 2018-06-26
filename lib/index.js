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
  const {
    basedir,
    src,
    length,
  } = options;

  const md5hash = createHash('md5');
  md5hash.update(src);
  let hash = md5hash.digest('hex');

  if (length !== undefined) {
    hash = hash.substr(0, length);
  }

  return resolve(tmpdir(), basedir || '.', hash);
}

/*
 * Exports.
 */
exports.mkdirp = hashedMkdirp;
exports.mkdirpSync = hashedMkdirpSync;
exports.tmpdir = hashedTmpdir;
