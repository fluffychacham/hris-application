const { Model } = require("objection");

class EmployeePermissions extends Model {
  static get tableName() {
    return "employee_permissions";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["canUpdateUsers", "canViewUsers"],
      properties: {
        id: { type: "integer" },
        canUpdateUsers: { type: "boolean" },
        canViewUsers: { type: "boolean" }
      }
    };
  }
}
