# flatiron-cli-version
Encapsulated commands for showing version in flatiron CLI apps

## Installation
```
npm install flatiron-cli-version
```

## Usage
At its core `flatiron-cli-version` is a broadway-compatible plugin which can be used by any [flatiron](https://flatironjs.org) application

```js
var flatiron = require('flatiron')
  , app = flatiron.app;

//
// Configure the Application to be a CLI app with
// a JSON configuration file `test-config.json`
//
app.name = 'app.js';

app.use(flatiron.plugins.cli, {
  usage: 'A simple CLI app using flatiron-cli-version'
});

//
// Expose CLI commands using `flatiron-cli-config`
//
app.use(require('flatiron-cli-version'));

if (!module.parent) {
  app.start();
}
```

If you run the above script

```bash
$ node app.js version
```

The output will be

```bash
info:	app.js v0.1.0
```

If you like this project, please watch this and [follow](http://github.com/users/follow?target=pksunkara) me.

## API Documentation

### Commands exposed

```bash
$ node app.js help version
help:	Display app.js version
help:
help:	app.js version
```

## Testing
```
npm test
```

## Contributors
Here is a list of [Contributors](http://github.com/pksunkara/flatiron-cli-version/contributors)

### TODO

__I accept pull requests and guarantee a reply back within a day__

## License
MIT/X11

## Bug Reports
Report [here](http://github.com/pksunkara/flatiron-cli-version/issues). __Guaranteed reply within a day__.

## Contact
Pavan Kumar Sunkara (pavan.sss1991@gmail.com)

Follow me on [github](http://github.com/pksunkara), [twitter](http://twitter.com/pksunkara)

Concept by: [Martin Wawrusch](http://github.com/mwawrusch) (martin@wawrusch.com)
