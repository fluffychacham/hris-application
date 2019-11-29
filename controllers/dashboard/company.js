const apiResponse = require("../../helpers/apiResponse"),
  passport = require("passport"),
  companies = require("../../models/companies/companies.model");

exports.def = (req, res, next) => {
  return apiResponse.unauthorized(res, "Not Found");
};
exports.create = (req, res, next) => {
  return apiResponse.success(res, "Hello " + req.body.email);
};
exports.view = (req, res, next) => {
  return apiResponse.success(res, "You are in view");
};
exports.update = (req, res, next) => {
  return apiResponse.success(res, "You are in update");
};
exports.remove = (req, res, next) => {
  return apiResponse.success(res, "You are in remove");
};
