exports.up = function (knex) {
  return knex.schema.createTable('employee', (tbl) => {
    tbl.increments();
    tbl.integer('company_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('companies')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    
    tbl.integer('role_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.string('full_name', 128).notNullable();
    tbl
      .string('email', 256)
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('employee');
};