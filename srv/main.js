const cds = require("@sap/cds");
module.exports = cds.service.impl(function () {
  console.log("i am in the function");
  this.on('READ', 'Books', async (req, next) => {
    console.log(req.target.kind)
    const result = await next();
    console.log(req.data);
    return result;
  } )
  this.before('READ', 'Books', () => console.log("before Read books") )
  this.after('READ', 'Books', () => console.log("after Read books") )
});
