exports.up = function(knex) {
  return knex.schema.createTable("admin_permissions", tbl => {
    tbl.increments();
    tbl.boolean("canUpdateUsers").defaultTo(true);
    tbl.boolean("canAddUsers").defaultTo(true);
    tbl.boolean("canDeleteUsers").defaultTo(true);
    tbl.boolean("canViewUsers").defaultTo(true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("admin_permissions");
};
