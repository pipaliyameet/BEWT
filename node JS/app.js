const path = require('path');

var pathObj = path.parse(__filename);

// console.log(path.basename('C:\\temp\\myfile.html'))
// console.log(pathObj);

// console.log(path.win32.basename('C:\\foo.HTML', '.html'));
// // Returns: 'myfile.html'

// console.log(process.env.PATH);
// Prints: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

// console.log(process.env.PATH.split(path.delimiter));
// Returns: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']

// console.log(process.env.PATH);
// // Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

// process.env.PATH.split(path.delimiter);
// // Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']


// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
// D:\Program\program\BEWT\node JS\wwwroot\static_files\gif\image.gif

