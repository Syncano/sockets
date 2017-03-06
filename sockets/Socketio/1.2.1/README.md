# Socketio Syncano Socket

It is Socketio integration with Syncano. It allows you to publish messages to rooms and/or sockets and more using sails & socket.io.

## Endpoints

### join

#### Parameters:

      roomName: 'myChatRoom',
      socketIds: a82ghda99319gadgaa3249103

,
### broadcast

#### Parameters:

      eventName: 'news',
      data: '*',
      roomName: 'myChatRoom'

,
### leave

#### Parameters:

      roomName: 'myChatRoom',
      socketIds: a82ghda99319gadgaa3249103

,
### blast

#### Parameters:

      eventName: 'news',
      data: '*'

,
### emit

#### Parameters:

      socketIds: a82ghda99319gadgaa3249103,
      eventName: 'news',
      data: '*'

,
### get-socket-id

#### Parameters:


,
### connect-client-socket

#### Parameters:

      eventListeners: [object Object],
      baseUrl: 'http://localhost:1337',
      timeout: 5000

