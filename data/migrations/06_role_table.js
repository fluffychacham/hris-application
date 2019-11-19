exports.up = function (knex) {
  return knex.schema.createTable('role', (tbl) => {
    tbl.increments();
    tbl
      .boolean('isAdmin')
      .defaultTo(false)
    tbl
      .boolean('isHR')
      .defaultTo(false)
    tbl
      .boolean('isEmployee')
      .defaultTo(false)
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('hr');
};