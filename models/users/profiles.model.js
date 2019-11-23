const { Model } = require("objection");

class UserProfile extends Model {
  static get tableName() {
    return "user_profile";
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
        first_name: { type: "string", minLength: 2, maxLength: 255 },
        last_name: { type: "string", minLength: 2, maxLength: 255 },
        company_email: { type: "string", minLength: 2, maxLength: 255 },
        date: { type: "date" }
      }
    };
  }
}
