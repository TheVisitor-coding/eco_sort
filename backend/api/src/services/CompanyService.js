const Factory = require("./HandlerFactory");
const CompanyModel = require('../models/CompanyModel')




// @desc Create a company
// @route POST /api/v1/company
// @acces Private/Protect/Admin
exports.CreateCompany = Factory.CreateOne(CompanyModel);

