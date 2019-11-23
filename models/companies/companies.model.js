const { Model } = require("objection");

class Company extends Model {
  static get tableName() {
    return "company";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "domain"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 2, maxLength: 255 },
        domain: { type: "string", minLength: 2, maxLength: 255 },
        date: { type: "date" }
      }
    };
  }

  static get relationMappings() {
    const OwnerProfile = require("../roles/owner.model");
    return {
      ownerProfiles: {
        relation: Model.HasManyRelation,
        modelClass: OwnerProfile,
        join: {
          from: "company.id",
          to: "owner_profile.owner_profile"
        }
      }
    };
  }
}
