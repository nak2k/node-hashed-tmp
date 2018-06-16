# hashed-tmp

Make a directory with a hashed name.

## Installation

```
npm i hashed-tmp -S
```

## Usage

``` javascript
const { mkdirp } = require('hashed-tmp');

mkdirp({ src: 'SRC_OF_HASH' }, (err, tmpdir) => {
  // tmpdir => '/var/folders/.../T/89a6dc23b3058db32ca6e643839cb8e1'
});
```

## License

MIT
