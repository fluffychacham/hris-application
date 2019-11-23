const { Model } = require("objection");

class AdminPermissions extends Model {
  static get tableName() {
    return "admin_permissions";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "canUpdateUsers",
        "canAddUsers",
        "canDeleteUsers",
        "canViewUsers"
      ],
      properties: {
        id: { type: "integer" },
        canUpdateUsers: { type: "boolean" },
        canAddUsers: { type: "boolean" },
        canDeleteUsers: { type: "boolean" },
        canViewUsers: { type: "boolean" }
      }
    };
  }
}
