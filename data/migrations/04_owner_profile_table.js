exports.up = function(knex) {
  return knex.schema.createTable("owner_profile", tbl => {
    tbl.increments();
    tbl.string("role", 256).notNullable();
    tbl
      .integer("admin_permissions_id")
      .notNullable()
      .references("id")
      .inTable("admin_permissions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("user_profile_id")
      .notNullable()
      .references("id")
      .inTable("user_profile")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .date("date_created")
      .defaultTo(knex.fn.now(6))
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("owner_profile");
};
