# Datetime Syncano Socket

It is Datetime integration with Syncano. It allows you to work the dates and times.

## Endpoints

### timestamp

#### Parameters:

      year: 2015,
      month: 12,
      date: 25,
      hour: 14,
      minute: 30,
      second: 1,
      millisecond: 1,
      timezone: 'America/Chicago'


### parse-date

#### Parameters:

      monthDayYear: 'December 25, 2015'


### parse-time

#### Parameters:

      timeString: '2:30 PM'


### stringify

#### Parameters:

      timestamp: 1318781876000


### parse

#### Parameters:

      datetime: '2015-05-06T00:49:45.767Z'


### format

#### Parameters:

      timestamp: 1318781876000,
      timezone: 'America/Chicago',
      formatString: 'YYYY-MM-DD HH:mm:ss Z'


### time-from

#### Parameters:

      toWhen: 1318781876000,
      fromWhen: 1318781870000


### now

#### Parameters:



### parse-timestamp

#### Parameters:

      timestamp: 1318781876000,
      timezone: 'America/Chicago'

