const { Model } = require("objection");

class AdminProfile extends Model {
  static get tableName() {
    return "admin_profile";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["role"],
      properties: {
        id: { type: "integer" },
        role: { type: "string" }
      }
    };
  }

  static get relationMappings() {
    const AdminPermissions = require("../permissions/admin.model");
    const Company = require("../companies/companies.model");
    return {
      companies: {
        relation: Model.HasManyRelation,
        modelClass: Company,
        join: {
          from: "admin_profile.id",
          to: "company.company"
        }
      },
      adminPermissions: {
        relation: Model.HasManyRelation,
        modelClass: AdminPermissions,
        join: {
          from: "owner_profile.id",
          to: "admin_permissions.admin_permissions"
        }
      }
    };
  }
}
module.exports = AdminProfile;
