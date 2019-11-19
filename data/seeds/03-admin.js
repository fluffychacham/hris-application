
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {id: 1, company_id: 1, role_id: 1,  username: 'chester123', first_name: 'Chester', last_name: 'T..', email: 'chester@mail.com'},
        {id: 2, company_id: 2, role_id: 2,  username: 'patrick123', first_name: 'Patrick', last_name: 'D..', email: 'patrick@mail.com'},
        {id: 3, company_id: 3, role_id: 3,  username: 'roman123', first_name: 'Roman', last_name: 'B..', email: 'roman@mail.com'}
      ]);
    });
};
