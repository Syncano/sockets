# JangoSMTP Syncano Socket

It is JangoSMTP integration with Syncano. It allows you to send transactional emails through jangosmtp.com service

## Endpoints

### send-html-email

#### Parameters:
```

  username: '<string>',
  password: '<string>',
  toEmail: 'jane@example.com',
  subject: 'Welcome, Jane!',
  textMessage: 'Jane,
Thanks for joining our community.  If you have any questions, please don't hesitate to send them our way.  Feel free to reply to this email directly.

Sincerely,
The Management',
  htmlMessage: 'Jane,
Thanks for joining our community.  If you have any questions, please don't hesitate to send them our way.  Feel free to reply to this email directly.

Sincerely,
The Management',
  fromEmail: 'harold@example.enterprise',
  fromName: 'Harold Greaseworthy',
  options: 'OpenTrack=True,ClickTrack=True,ReplyTo=john@hotmail.com'
```


### send-plaintext-email

#### Parameters:
```

  username: '<string>',
  password: '<string>',
  toEmail: 'jane@example.com',
  subject: 'Welcome, Jane!',
  textMessage: 'Jane,
Thanks for joining our community.  If you have any questions, please don't hesitate to send them our way.  Feel free to reply to this email directly.

Sincerely,
The Management',
  fromEmail: 'harold@example.enterprise',
  fromName: 'Harold Greaseworthy',
  options: 'OpenTrack=True,ClickTrack=True,ReplyTo=john@hotmail.com'
```

