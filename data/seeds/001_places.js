exports.seed = function(knex, Promise) {

  return knex('places').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('places').insert([
        {id: 1, name: 'The Gamers Keep', address: '1275 Wooster Rd W, Barberton, OH', zipcode: 44203, website: 'http://www.thegamerskeep.com/', lat: 41.0068683, long: -81.63479889999996},
        {id: 2, name: 'Full Grip Gaming', address: '121 E Market St, Akron, OH', zipcode: 44308, website: 'https://www.fullgripgames.com/', lat: 41.084295, long: -81.51373289999998},
        {id: 3, name: 'Alter Reality Games', address: '2413 Medina Rd, Medina, OH', zipcode: 44256, website: 'http://articles.alterealitygames.com/', lat: 41.1368357, long: -81.77362470000003}
      ]);
    });
};
