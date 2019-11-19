exports.up = function(knex) {
  return knex.schema.createTable("admin", tbl => {
    tbl.increments();

    tbl
      .integer("company_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("company")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("role_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("role")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .string("username", 128)
      .unique()
      .notNullable();
    tbl.string("first_name", 32).notNullable();
    tbl.string("last_name", 32).notNullable();
    tbl
      .string("email", 256)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("admin");
};
