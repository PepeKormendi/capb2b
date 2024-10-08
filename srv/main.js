const cds = require("@sap/cds");
const logger = cds.log('capb2b')
module.exports = cds.service.impl(function () {
  logger( new Date());
  this.on('READ', 'Books', (req, next) => {
  
    return next() 
  })
  this.before('READ', 'Books', () => console.log("before Read books"))
  this.after('each', 'Books', book => book.urgency = 'URG' )
});
