const path = require("path")

const dirName = path.dirname('folder/subfolder/file')
// console.log(dirName)

const extention = path.extname('index.js')
// console.log(extention)

const baseName = path.basename('folder/subfolder/file')
// console.log(baseName)

const joinedPath= path.join('folder','subfolder','file')
// console.log(joinedPath)

const patth = '/folder///subfolder//////file'
const normalizedPath = path.normalize(patth)
// console.log('normalized path = ',normalizedPath)

const absolutepath = path.resolve('folder','subfolder/file')
const relativePath = path.relative('folder','subfolder/file')
console.log('absolute path = ',absolutepath)
console.log('relative path = ',relativePath)