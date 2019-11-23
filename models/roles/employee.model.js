const { Model } = require("objection");

class EmployeeProfile extends Model {
  static get tableName() {
    return "employee_profile";
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
    const EmployeePermissions = require("../permissions/employee.model");
    const Company = require("../companies/companies.model");
    const UserProfile = require("../users/profiles.model");
    return {
      profiles: {
        relation: Model.HasManyRelation,
        modelClass: UserProfile,
        join: {
          from: "employee_profile.id",
          to: "user_profile.user_profile"
        }
      },
      employeePermissions: {
        relation: Model.HasManyRelation,
        modelClass: EmployeePermissions,
        join: {
          from: "employee_profile.id",
          to: "employee_permissions.employee_permissions"
        }
      },
      company: {
        relation: Model.HasManyRelation,
        modelClass: Company,
        join: {
          from: "employee_profile.id",
          to: "company.company"
        }
      }
    };
  }
}
