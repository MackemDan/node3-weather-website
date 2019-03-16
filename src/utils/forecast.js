const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4ed5826e22fca179e0e221666094da2e/' + latitude + ',' + longitude + '?units=uk2'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '°C with a wind speed of ' + body.daily.data[0].windSpeed + 'mph. There is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })

}

module.exports = forecast