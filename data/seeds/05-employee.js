exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("employee")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("employee").insert([
        {
          id: 1,
          company_id: 1,
          role_id: 1,
          first_name: "Joom",
          last_name: "Boom",
          email: "joom@mail.com",
          password: "joom123"
        },
        {
          id: 2,
          company_id: 2,
          role_id: 2,
          first_name: "Nick",
          last_name: "Doom",
          email: "nick@mail.com",
          password: "nick123"
        },
        {
          id: 3,
          company_id: 3,
          role_id: 3,
          first_name: "Billy",
          last_name: "Block",
          email: "billy@mail.com",
          password: "billy123"
        }
      ]);
    });
};
