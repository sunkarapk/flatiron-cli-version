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
// Expose CLI commands using `flatiron-cli-version`
//
app.use(require('flatiron-cli-version'));

//
// Configure the Application to be a CLI app with
// a JSON configuration file `test-config.json`
//
app.use(flatiron.plugins.cli, {
  usage: 'A simple CLI app using flatiron-cli-version'
});

app.start();
```

Run the above script

```bash
➤ appname version
info:	appname v0.1.0
```

```bash
➤ appname help version
help:	Display app version
help:
help:	appname version
```

```bash
➤ appname -v
0.1.0
➤ appname --version
0.1.0
```

If you like this project, please watch this and [follow](http://github.com/users/follow?target=pksunkara) me.

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
