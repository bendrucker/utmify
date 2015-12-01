# utmify [![Build Status](https://travis-ci.org/bendrucker/utmify.svg?branch=master)](https://travis-ci.org/bendrucker/utmify)

> Generate a UTM parameter object from individual properties (e.g. campaign)


## Install

```
$ npm install --save utmify
```


## Usage

```js
var utmify = require('utmify')

utmify({campaign: 'foo', content: 'bar'})
//=> {utm_campaign: foo, utm_content: 'bar'}
```

## API

#### `utmify(params)` -> `object`

##### params

*Required*  
Type: `object`

A list of UTM parameters. Allowed keys are:

* campaign
* source
* medium
* content
* term

These keys will be prefixed with `utm_`. Any other keys will be stripped from the output.


## License

MIT © [Ben Drucker](http://bendrucker.me)