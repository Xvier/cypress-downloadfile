const request = require('request')
const fs = require('fs-extra')
const path = require('path')
export function downloadFile(args) {
    var headers = args.headers
    const directory = args.directory
    if (! headers.Cookie){
        const cookieHeader = args.cookies.map(e => e.name + '=' + e.value).join(';')
        headers.Cookie = headers.Cookie || cookieHeader
    }
    
    const fileName = args.fileName
    headers['User-Agent'] = headers['User-Agent'] || 'request'

    return new Promise((resolve, reject) => {
        request(
            {
                url: args.url,
                encoding: null,
                headers: headers,
            },
            function(err, res, body) {
                if (!res) {
                    return reject(new Error('No response'))
                }
                if (res.statusCode !== 200) {
                    return reject(
                        new Error('Bad status code: ' + res.statusCode)
                    )
                }

                const file = path.join(directory, fileName)

                fs.outputFileSync(file, body)
                resolve('downloadFile ' + file + ' downloaded')
            }
        )
    })
}
