const cds = require("@sap/cds");
const logger = cds.log('capb2b')
module.exports = cds.service.impl(function () {
  console.log("i am in the function");
  this.on('READ', 'Books', (req, next) => {
  
    return next() 
  })
  this.before('READ', 'Books', () => console.log("before Read books"))
  this.after('READ', 'Books', (data, req) => {
    data.map(book => book.title += '!!!!')
  })
});
