exports.up = function(knex) {
  return knex.schema.createTable("user", tbl => {
    tbl.increments();
    tbl
      .string("email", 256)
      .unique()
      .notNullable();
    tbl.string("password", 256).notNullable();
    tbl
      .date("date_created")
      .defaultTo(knex.fn.now(6))
      .notNullable();
    tbl
      .integer("user_profile")
      .references("id")
      .inTable("user_profile")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user");
};
