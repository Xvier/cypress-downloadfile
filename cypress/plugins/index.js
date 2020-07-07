// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const { downloadFile } = require('../../lib/addPlugin')

const fs = require('fs')

function rm(path) {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path)
    }
    return null
}

function fileSize(path) {
    return fs.statSync(path).size
}

module.exports = (on, config) => {
    on('task', { downloadFile, rm, fileSize })
}
