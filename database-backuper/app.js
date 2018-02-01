// Imports the Google Cloud client library.
const Storage = require('@google-cloud/storage');
var fs = require('fs');
var shell = require('shelljs');
var finder = require('fs-finder');
var path = require('path');
var schedule = require('node-schedule');

process.env.GOOGLE_APPLICATION_CREDENTIALS='/home/pi/piclock-9da9d442607a.json';

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
const storage = Storage({
  projectId: 'piclock-88032',
});
const bucketName = 'piclock-88032.appspot.com';

// // Makes an authenticated API request.
// storage
//   .getBuckets()
//   .then((results) => {
//     const buckets = results[0];

//     console.log('Buckets:');
//     buckets.forEach((bucket) => {
//       console.log(bucket.name);
//     });
//   })
//   .catch((err) => {
//     console.error('ERROR:', err);
//   });

var j = schedule.scheduleJob('0 20 * * *', function(){
  console.log('Running Backuper at ' + Date.now());


  const newFilename = Date.now() + '.filipeflop.db';
  console.log(newFilename);

  shell.cp('/home/pi/employee-manager-app/backend-app-server/filipeflop.db', `/home/pi/employee-manager-app/database-backuper/database-backups/${newFilename}`);
  shell.cp('/home/pi/employee-manager-app/backend-app-server/filipeflop.db', `/home/pi/employee-manager-app/database-backuper/uploader-folder/${newFilename}`);

  var files = finder.from('/home/pi/employee-manager-app/database-backuper/uploader-folder').findFiles('*.db');

  const filename = files[0];

  // fs.rename('/path/to/Afghanistan.png', '/path/to/AF.png', function(err) {
  //   if ( err ) console.log('ERROR: ' + err);
  // });

    // Uploads a local file to the bucket
  storage
    .bucket(bucketName)
    .upload(filename)
    .then(() => {
      console.log(`${filename} uploaded to ${bucketName}.`);
      shell.rm(`/home/pi/employee-manager-app/database-backuper/uploader-folder/${newFilename}`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });

});
