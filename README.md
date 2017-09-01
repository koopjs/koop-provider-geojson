[![Build Status](https://travis-ci.org/koopjs/koop-provider-geojson.svg?branch=master)](https://travis-ci.org/koopjs/koop-provider-geojson) [![Greenkeeper badge](https://badges.greenkeeper.io/koopjs/koop-provider-geojson.svg)](https://greenkeeper.io/)


# Koop geojson Provider

This is a geojson that demonstrates how to build a Koop Provider. Full documentation is provided [here](https://koopjs.github.io/docs/specs/provider/).

`/geojson/{url|pipe|path}/FeatureServer/0/query`

where the `URL` changes `/` to `|` for including in the url. e.g.

`example.com%7Cshares%7C6de6fe4ccdea85b8.geojson`

To try this out, here are few example services:

- [Harvey crowdsource data](https://howtfcbn0c.execute-api.us-east-1.amazonaws.com/latest/geojson/web.fulcrumapp.com%7Cshares%7C6de6fe4ccdea85b8.geojson/FeatureServer/0) & [map](https://www.arcgis.com/home/webmap/viewer.html?url=https://howtfcbn0c.execute-api.us-east-1.amazonaws.com/latest/geojson/web.fulcrumapp.com%7Cshares%7C6de6fe4ccdea85b8.geojson/FeatureServer/0)
- [DC boundary](https://howtfcbn0c.execute-api.us-east-1.amazonaws.com/latest/geojson/raw.githubusercontent.com|unitedstates|districts|gh-pages|states|DC|shape.geojson/FeatureServer/0) & [map](https://www.arcgis.com/home/webmap/viewer.html?url=https://howtfcbn0c.execute-api.us-east-1.amazonaws.com/latest/geojson/raw.githubusercontent.com|unitedstates|districts|gh-pages|states|DC|shape.geojson/FeatureServer/0)
- [US Boundaries](https://howtfcbn0c.execute-api.us-east-1.amazonaws.com/latest/geojson/eric.clst.org|wupl|Stuff|gz_2010_us_outline_500k.json/FeatureServer/0) &  [map](http://www.arcgis.com/home/webmap/viewer.html?url=https://howtfcbn0c.execute-api.us-east-1.amazonaws.com/latest/geojson/eric.clst.org|wupl|Stuff|gz_2010_us_outline_500k.json/FeatureServer/0)
- [US Counties](https://howtfcbn0c.execute-api.us-east-1.amazonaws.com/latest/geojson/eric.clst.org|wupl|Stuff|gz_2010_us_050_00_500k.json/FeatureServer/0) & [map](http://www.arcgis.com/home/webmap/viewer.html?extent=-120.20,30.055,-117.19,40.06&url=https://howtfcbn0c.execute-api.us-east-1.amazonaws.com/latest/geojson/eric.clst.org|wupl|Stuff|gz_2010_us_050_00_500k.json/FeatureServer/0)

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
- `DEPLOY=dev node server.js`

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
