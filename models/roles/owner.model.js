const { Model } = require("objection");

class OwnerProfile extends Model {
  static get tableName() {
    return "owner_profile";
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
    const UserProfile = require("../users/profiles.model");
    return {
      profiles: {
        relation: Model.HasManyRelation,
        modelClass: UserProfile,
        join: {
          from: "owner_profile.id",
          to: "user_profile.user_profile"
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
