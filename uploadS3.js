const AWS = require('aws-sdk');
const Config = require('./config');
const fs = require('fs');
const s3Config = Config.environment['local'].s3;

console.log(s3Config);

const s3 = new AWS.S3({
    apiVersion: s3Config.apiVersion,
    accessKeyId: s3Config.accessKeyId,
    secretAccessKey: s3Config.secretAccessKey,

});

s3.getObject(
    {
        Bucket: s3Config.bucket,
        Key: s3Config.downloadFileName,
    },
    function (error, data) {
        console.log(error);
        if (error) {
            reject("file not found");
        } else {
            console.log(data);
        }
    }
);


console.log('\t###### File upload Started ######');
fs.readFile(s3Config.uploadFileName, 'utf-8', (err, read_buffer) => {
    if (err) {
        console.error(err);
        reject(err.message);
    } else {
        s3.upload(
            {
                Bucket: s3Config.bucket,
                Key: s3Config.uploadFileName,
                Body: read_buffer,
                ContentType: 'text/html'
            },
            (err, data) => {
                if (err) {
                    console.log('\tUnable to upload to S3', err.message);
                    reject(err.message);
                } else {
                    console.log('\tFile uploaded to S3 under:', data.Location);
                    console.log('\t###### File upload Completed ######');
                }
            },
        )
    }
});
