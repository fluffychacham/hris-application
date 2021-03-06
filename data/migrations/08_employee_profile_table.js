exports.up = function(knex) {
  return knex.schema.createTable("employee_profile", tbl => {
    tbl.increments();
    tbl.string("role", 256).notNullable();
    tbl
      .integer("user_profile_id")
      .notNullable()
      .references("id")
      .inTable("user_profile")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("company")
      .notNullable()
      .references("id")
      .inTable("company")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("employee_permissions_id")
      .notNullable()
      .references("id")
      .inTable("employee_permissions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .date("date_created")
      .defaultTo(knex.fn.now(6))
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("employee_profile");
};
