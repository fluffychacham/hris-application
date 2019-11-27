exports.up = function(knex) {
  return knex.schema.createTable("user_profile", tbl => {
    tbl.increments();
    tbl.string("first_name", 256).notNullable();
    tbl.string("last_name", 256).notNullable();
    tbl.string("company_email", 256).unique();
    tbl
      .date("date_created")
      .defaultTo(knex.fn.now(6))
      .notNullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user_profile");
};
