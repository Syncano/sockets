# Mailgun Syncano Socket

It is Mailgun integration with Syncano. It allows you to machines for the mailgun api.

## Endpoints

### send-plaintext-email

#### Parameters:
```

  apiKey: 'key-3432afa32e9401482aba183c13f3',
  domain: 'sandbox5f89931913a9ab31130131350101.mailgun.og',
  toEmail: 'jane@example.com',
  toName: 'Jane Doe',
  subject: 'Welcome, Jane!',
  message: 'Jane,
Thanks for joining our community.  If you have any questions, please don't hesitate to send them our way.  Feel free to reply to this email directly.

Sincerely,
The Management',
  fromEmail: 'harold@example.enterprise',
  fromName: 'Harold Greaseworthy'
```


### send-html-email

#### Parameters:
```

  apiKey: 'key-3432afa32e9401482aba183c13f3',
  domain: 'sandbox5f89931913a9ab31130131350101.mailgun.og',
  toEmail: 'jane@example.com',
  toName: 'Jane Doe',
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
  fromName: 'Harold Greaseworthy'
```

