/*
  model.js

  This file is required. It must export a class with at least one public function called `getData`

  Documentation: http://koopjs.github.io/docs/specs/provider/
*/
const request = require('request').defaults({gzip: true, json: true})
const config = require('config')

function Model (koop) {}

// This is the only public function you need to implement
Model.prototype.getData = function (req, callback) {
  // convert gist.github.com|id|6de6fe4ccdea85b8.geojson
  let url = req.params.id.replace(/\|/g,'/');

  // Available parameters:
  // req.params.host
  // req.params.id
  // req.params.layer
  // req.params.method

  request(`http://${url}`, (err, res, body) => {
    if (err) return callback(err)

    // translate the response into geojson
    const geojson = translate(body)
    // Cache data for 10 seconds at a time by setting the ttl or "Time to Live"
    geojson.ttl = 10
    // hand off the data to Koop
    callback(null, body)
  })
}

// GeoJSON to GeoJSON
function translate (input) {
  return input
}

module.exports = Model

/* Example raw API response
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "fulcrum_id": "276525c9-e677-41c7-a64b-e602e4e99240",
        "created_at": "2017-08-26 17:03:55 UTC",
        "updated_at": "2017-08-26 17:03:55 UTC",
        "system_created_at": "2017-08-26 17:03:55 UTC",
        "system_updated_at": "2017-08-26 17:03:55 UTC",
        "version": 1,
        "status": "SHELTER",
        "marker-color": "#1891C9",
        "project": null,
        "latitude": 28.8134696,
        "longitude": -97.0029275,
        "name": "St Joseph HS Dome",
        "location": "110 E Red River Victoria TX",
        "date": "2017-08-25",
        "website": null,
        "notes": null,
        "important_is_this_a_currently_active_resource": null,
        "gps_altitude": null,
        "gps_horizontal_accuracy": null,
        "gps_vertical_accuracy": null,
        "gps_speed": null,
        "gps_course": null
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.0029275,
          28.8134696
        ]
      }
    }
  ]
}
*/
