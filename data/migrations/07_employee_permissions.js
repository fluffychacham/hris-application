exports.up = function(knex) {
  return knex.schema.createTable("employee_permissions", tbl => {
    tbl.increments();
    tbl.boolean("canUpdateProfile").defaultTo(true);
    tbl.boolean("canViewProfile").defaultTo(true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("employee_permissions");
};
