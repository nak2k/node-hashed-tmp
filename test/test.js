const test = require('tape');
const { basename, dirname } = require('path');
const {
  mkdirp,
  mkdirpSync,
} = require('..');

test('test mkdirp', t => {
  t.plan(2);

  mkdirp({
    basedir: 'hashed-tmp',
    src: 'SRC_OF_HASH',
  }, (err, dir) => {
    t.error(err);
    t.equal(basename(dirname(dir)), 'hashed-tmp');
  });
});


test('test mkdirpSync', t => {
  t.plan(1);

  const dir = mkdirpSync({
    basedir: 'hashed-tmp',
    src: 'SRC_OF_HASH',
  });

  t.equal(basename(dirname(dir)), 'hashed-tmp');
});
