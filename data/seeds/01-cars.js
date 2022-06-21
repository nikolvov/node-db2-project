// STRETCH

const cars = [
    {
      vin: 'JH4KA7560RC003647',
      make: 'toyota',
      model: 'prius',
      mileage: 215000,
      title: 'clean',
      transmission: 'manual'
    },
    {
      vin: 'JS2RA41S235163290',
      make: 'toyota',
      model: 'corolla',
      mileage: 115000,
      title: 'salvage'
    },
    {
      vin: '1GNDX03E03D188446',
      make: 'ford',
      model: 'focus',
      mileage: 15000
    },
]

// exports.seed = function(knex) {
//   return knex.('cars')
//     .truncate(),then(() => {
//       return knex('cars').insert(cars)
//   })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
  }