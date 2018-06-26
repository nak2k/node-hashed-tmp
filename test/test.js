const test = require('tape');
const { basename, dirname } = require('path');
const {
  mkdirp,
  mkdirpSync,
  tmpdir,
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

test('test tmpdir', t => {
  t.plan(2);

  const p1 = tmpdir({
    basedir: 'hashed-tmp',
    src: 'SRC_OF_HASH',
  });

  t.equal(basename(p1).length, 32);

  const p2 = tmpdir({
    basedir: 'hashed-tmp',
    src: 'SRC_OF_HASH',
    length: 16,
  });

  t.equal(basename(p2).length, 16);
});
