
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('role').del()
    .then(function () {
      // Inserts seed entries
      return knex('role').insert([
        {id: 1, isAdmin: true},
        {id: 2, isHR: true},
        {id: 3, isEmployee: true}
      ]);
    });
};
