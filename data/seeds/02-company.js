
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {id: 1, name: 'Fedex Ground', domain: 'www.fedex.com', date_created:''},
        {id: 2, name: 'UPS', domain: 'www.ups.com', date_created:''},
        {id: 3, name: 'Coders Inc', domain: 'www.google.com', date_created:''}
      ]);
    });
};
