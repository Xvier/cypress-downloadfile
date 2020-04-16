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
cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
```

## In Version 1.1.5 you can now also pass in the User-Agent. If no User-Agent is passed it will give a default User-Agent called request.
```javascript
cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg','MyCustomAgentName')
```
## Version 1.2.0
Because request is deprecated we changed to cross-fetch. This works on Cypress 3.8.0 and upwards. If you notice problems please let me know