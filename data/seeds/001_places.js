exports.seed = function(knex, Promise) {

  return knex('places').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('places').insert([
        {id: 1, name: 'The Gamers Keep', address: '1275 Wooster Rd W, Barberton, OH', zipcode: 44203, website: 'http://www.thegamerskeep.com/'},
        {id: 2, name: 'Full Grip Gaming', address: '121 E Market St, Akron, OH', zipcode: 44308, website: 'https://www.fullgripgames.com/'},
        {id: 3, name: 'Alter Reality Games', address: '2413 Medina Rd, Medina, OH', zipcode: 44256, website: 'http://articles.alterealitygames.com/'}
      ]);
    });
};
