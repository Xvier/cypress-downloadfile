# cypress-downloadfile

[![npm version](https://badge.fury.io/js/cypress-downloadfile.svg)](https://badge.fury.io/js/cypress-downloadfile)
 
This is a Cypress custom file download command.

This repository is not maintained by the Cypress developers. 

## Installation

Install the module.

```shell
npm install cypress-downloadfile
```

Add the following line to `cypress/support/commands.js`.

```javascript
require('cypress-downloadfile/lib/downloadFileCommand')
```

Add the following lines to `cypress/plugins/index.js`.

```javascript
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) => {
  on('task', {downloadFile})
}
```

If autocompletion does not work out of the box you can add the following line above your testfile

```javascript
/// <reference types="cypress-downloadfile"/>
```


## Example of basic command 
```javascript
cy.downloadFile('https://library.concordia.ca/help/technology/recovering_saved_files.pdf','mydownloads','demo.pdf')
```

## In Version 1.6 you can now also pass in the headers. If no User-Agent is defined in headers, it will give a default User-Agent called "request".
```javascript
const token = '<my bearer token>'

var headers = {
  authorization: 'Bearer ' + token,
  accept: 'application/json',
  'accept-language': 'en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7',
  'User-Agent': 'a-specific-useragent'
}

cy.downloadFile('https://library.concordia.ca/help/technology/recovering_saved_files.pdf','mydownloads','demo.pdf', headers)
```

