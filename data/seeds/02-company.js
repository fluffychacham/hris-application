exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("company")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("company").insert([
        { id: 1, name: "Fedex Ground", domain: "www.fedex.com" },
        { id: 2, name: "UPS", domain: "www.ups.com" },
        { id: 3, name: "Coders Inc", domain: "www.google.com" }
      ]);
    });
};
