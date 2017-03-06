# Steam Syncano Socket

It is Steam integration with Syncano. It allows you to communicate with steam web api to query steam information.

## Endpoints

### get-news-for-app

#### Parameters:

      appid: 400,
      count: 3,
      maxlength: 300

,
### get-global-achievement-percentage-for-app

#### Parameters:

      gameid: 400

,
### get-global-stats-for-game

#### Parameters:

      appid: 400,
      name: global.map.emp_isle

,
### get-player-summaries

#### Parameters:

      steamids: 76561197960435530,
      key: 'XXXXXXXXXXXXXXXXXXXXXXX'

,
### get-friend-list

#### Parameters:

      steamid: '76561197960435530',
      key: 'XXXXXXXXXXXXXXXXXXXXXXX',
      relationship: 'friend'

,
### get-player-achievements

#### Parameters:

      steamid: '76561197960435530',
      key: 'XXXXXXXXXXXXXXXXXXXXXXX',
      appid: 400,
      l: 'en_US'

,
### get-owned-games

#### Parameters:

      steamid: '76561197960434622',
      key: 'XXXXXXXXXXXXXXXXXXXXXXX',
      include_appinfo: 1,
      include_played_free_games: 1,
      appids_filter: 440,500,550

,
### get-recently-played-games

#### Parameters:

      steamid: '76561197960435530',
      key: 'XXXXXXXXXXXXXXXXXXXXXXX',
      count: 2

,
### is-playing-shared-game

#### Parameters:

      steamid: '76561197960435530',
      key: 'XXXXXXXXXXXXXXXXXXXXXXX',
      appid_playing: '240'

,
### get-schema-for-game

#### Parameters:

      appid: '620',
      key: 'XXXXXXXXXXXXXXXXXXXXXXX'

,
### get-player-bans

#### Parameters:

      steamids: 76561197960435530,
      key: 'XXXXXXXXXXXXXXXXXXXXXXX'

