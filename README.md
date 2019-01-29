# hashed-tmp

Make a directory with a hashed name.

## Installation

```
npm i hashed-tmp
```

## Usage

``` javascript
const { mkdirp } = require('hashed-tmp');

mkdirp({ src: 'SRC_OF_HASH' }, (err, tmpdir) => {
  // tmpdir => '/var/folders/.../T/89a6dc23b3058db32ca6e643839cb8e1'
});
```

## API

### mkdirp(options, callback)

- `options.src`
- `options.base`
- `options.length`
- `callback(err, dir)`

### mkdirpSync(options)

Synchronous version of `mkdirp()`.

### tmpdir(options)

- `options.src`
- `options.base`
- `options.length`

## License

MIT
