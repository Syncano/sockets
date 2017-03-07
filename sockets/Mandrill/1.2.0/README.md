# Mandrill Syncano Socket

It is Mandrill integration with Syncano. It allows you to machines for talking to the mandrill api.

## Endpoints

### send-plaintext-email

#### Parameters:

      apiKey: '1dTOFDXzJdU5cXiMNd6jRq',
      toEmail: 'jane@example.com',
      toName: 'Jane Doe',
      subject: 'Welcome, Jane!',
      message: 'Jane,
Thanks for joining our community.  If you have any questions, please don't hesitate to send them our way.  Feel free to reply to this email directly.

Sincerely,
The Management',
      fromEmail: 'harold@example.enterprise',
      fromName: 'Harold Greaseworthy'


### add-template

#### Parameters:

      apiKey: '1dTOFDXzJdU5cXiMNd6jRq',
      name: 'reset-your-password',
      from_email: 'harold@foo.enterprise',
      from_name: 'Harold Greaseworthy',
      subject: 'Click the link in this email to reset your password',
      code: '<div>Click <a href="*|RESET_LINK|*">here</a> to reset your password.</div>',
      text: 'Click on the following link to reset your password: 
 *|RESET_LINK|*',
      publish: true,
      labels: password


### delete-all-templates

#### Parameters:

      apiKey: 'tzTDP_JZlGoqFw3Rvy1bpw'


### migrate-templates

#### Parameters:

      srcApiKey: '1dTGOXT_JZlGoqRw3Qvy1bpz',
      destApiKey: 'tzTDP_JZlGoqFw3Rvy1bpw'


### list-templates

#### Parameters:

      apiKey: '1dTOFDXzJdU5cXiMNd6jRq'


### delete-template

#### Parameters:

      apiKey: '1dTOFDXzJdU5cXiMNd6jRq',
      name: 'example-template'


### send-template-email

#### Parameters:

      apiKey: '1dTOFDXzJdU5cXiMNd6jRq',
      toEmail: 'jane@example.com',
      toName: 'Jane Doe',
      subject: 'Welcome, Jane!',
      templateName: 'myTemplate',
      templateContent: [object Object],
      message: 'Jane,
Thanks for joining our community.  If you have any questions, please don't hesitate to send them our way.  Feel free to reply to this email directly.

Sincerely,
The Management',
      fromEmail: 'harold@example.enterprise',
      fromName: 'Harold Greaseworthy',
      mergeVars: [object Object]

