[![Build Status](https://travis-ci.org/koopjs/koop-provider-geojson.svg?branch=master)](https://travis-ci.org/koopjs/koop-provider-geojson) [![Greenkeeper badge](https://badges.greenkeeper.io/koopjs/koop-provider-geojson.svg)](https://greenkeeper.io/)


# Koop geojson Provider

This is a geojson that demonstrates how to build a Koop Provider. Full documentation is provided [here](https://koopjs.github.io/docs/specs/provider/).

The data source in this case is the [TriMet Bus API](https://developer.trimet.org). You can see this provider in action [here](http://dcdev.maps.arcgis.com/home/item.html?id=2603e7e3f10742f78093edf8ea2adfd8#visualize).

If you want to write your own provider, simply fork this repository or copy the contents.

## Files

| File | | Description |
| --- | --- | --- |
| `index.js` | Mandatory | Configures provider for usage by Koop |
| `model.js` | Mandatory | Translates remote API to GeoJSON |
| `routes.js` | Optional | Specifies additional routes to be handled by this provider |
| `controller.js` | Optional | Handles additional routes specified in `routes.js` |
| `server.js` | Optional | Reference implementation for the provider |
| `test/model-test.js` | Optional | tests the `getData` function on the model |
| `test/fixtures/input.json` | Optional | a geojson of the raw input from the 3rd party API |
| `config/default.json` | Optional | used for advanced configuration, usually API keys. |

## Test it out
Run server:
- `npm install`
- `npm start`

Example API Query:
- `curl localhost:8080/geojson/FeatureServer/0/query?returnCountOnly=true`

Tests:
- `npm test`

## With Docker

- `docker build -t koop-provider-geojson .`
- `docker run -it -p 8080:8080 koop-provider-geojson`

## Publish to npm
- run `npm init` and update the fields
  - Choose a name like `koop-provider-foo`
- run `npm publish`
