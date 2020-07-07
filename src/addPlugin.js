const fetch = require('cross-fetch')
const fs = require('fs-extra')
const path = require('path')
const contentDisposition = require('content-disposition');

function attachmentFilename(response) {
    const header = response.headers.get('Content-Disposition')
    if (header) {
        const parsed = contentDisposition.parse(header)
        return parsed.type === 'attachment' ? parsed.parameters.filename : undefined
    }
}

function lastPathSegment(url) {
    const path = new URL(url).pathname
    return path.substring(path.lastIndexOf('/') + 1)
}

export function downloadFile(args) {
    const url = args.url
    const directory = args.directory
    const cookieHeader = args.cookies.map(e => e.name + '=' + e.value).join(';')
    const userAgent = args.userAgent || 'cross-fetch'

    return fetch(url, {
        headers: { Cookie: cookieHeader, 'User-Agent': userAgent },
    }).then(response => {
        if (!response) {
            throw new Error('No response')
        }

        if (response.status !== 200) {
            throw new Error('Bad status code: ' + response.status)
        }

        const fileName = args.fileName || attachmentFilename(response) || lastPathSegment(url)

        return response.arrayBuffer().then(function (arrayBuffer) {
            const file = path.join(directory, fileName)
            let myBuffer = new Uint8Array(arrayBuffer)
            fs.outputFileSync(file, myBuffer)
            return 'downloadFile ' + file + ' downloaded'
        })
    })
}
