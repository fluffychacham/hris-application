const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "user";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["first_name", "last_name", "company_email"],
      properties: {
        id: { type: "integer" },
        email: { type: "string", minLength: 5, maxLength: 255 },
        password: { type: "string", minLength: 100, maxLength: 255 },
        date: { type: "date" }
      }
    };
  }

  static get relationMappings() {
    const UserProfile = require("./profiles.model");
    return {
      profiles: {
        relation: Model.HasManyRelation,
        modelClass: UserProfile,
        join: {
          from: "user.id",
          to: "user_profile.user_profile"
        }
      }
    };
  }
}

module.exports = User;
