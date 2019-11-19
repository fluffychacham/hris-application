
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hr').del()
    .then(function () {
      // Inserts seed entries
      return knex('hr').insert([
        {id: 1, company_id: 1 , role_id: 1, first_name: "Tony", last_name: "Montana", email: "tony@mail.com", password: "tony123"},
        {id: 2, company_id: 2 , role_id: 2, first_name: "Jake", last_name: "Rat", email: "rat@mail.com", password: "rat123"},
        {id: 3, company_id: 3 , role_id: 3, first_name: "Holly", last_name: "Smith", email: "holly@mail.com", password: "holly123"}
      ]);
    });
};
