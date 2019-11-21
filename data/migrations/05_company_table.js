exports.up = function(knex) {
  return knex.schema.createTable("company", tbl => {
    tbl.increments();
    tbl
      .integer("owner_id")
      .notNullable()
      .references("id")
      .inTable("owner_profile")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("name", 128).notNullable();
    tbl
      .string("domain", 128)
      .unique()
      .notNullable();
    tbl
      .date("date_created")
      .defaultTo(knex.fn.now(6))
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("company");
};
