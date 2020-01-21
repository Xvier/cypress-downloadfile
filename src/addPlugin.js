const request = require('request');
const fs = require('fs-extra')
const path = require('path')
export function downloadFile(args) {

    const directory = args.directory;
    const cookieHeader = args.cookies.map(e => e.name + '=' + e.value).join(';');
    const fileName = args.fileName;
    return new Promise((resolve, reject) => {
        request({ url: args.url, encoding: null, headers: { Cookie: cookieHeader } }, function (err, res, body) {
            if (!res) {
                return reject(new Error('No response'));
            }
            if (res.statusCode !== 200) {
                return reject(new Error('Bad status code: ' + res.statusCode));
            }


            
            const file = path.join(directory , fileName)
            
            fs.outputFileSync(file, body)
            resolve('downloadFile ' + file + ' downloaded');
        });
    });
}
