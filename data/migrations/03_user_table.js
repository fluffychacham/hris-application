exports.up = function (knex) {
  return knex.schema.createTable('user', (tbl) => {
    tbl.increments();
    tbl.integer('company_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('company')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    
    tbl.integer('role_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('role')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.string('first_name', 128).notNullable();
    tbl.string('last_name', 128).notNullable();
    tbl
      .string('email', 256)
      .notNullable();
    tbl
      .string('password', 128)
      .notNullable();
    tbl
      .string('role')
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user');
};