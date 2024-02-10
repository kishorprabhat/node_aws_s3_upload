/* jshint node: true */
/* jshint esversion: 6 */
module.exports = {
    // server: {
    //   host: '0.0.0.0',
    //   port: 443,
    // },

    environment: {
      local: {
        s3: {
          region: 'us-east-1',
          accessKeyId : 'AKIAYCFCGHVDSE4HMRBJ',
          secretAccessKey: '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',
          bucket: 'prabhat-373546753-s3',
          downloadFileName: 'myfile.txt',
          uploadFileName: 'text.txt'
        }
      }  
  },
};