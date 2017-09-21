const faker = require('faker')

var db = { advance: [] }

for (var i = 1; i <= 20; i++) {
  db.advance.push({
    id: i,
    first_name: faker.random.words(),
    date: faker.date.recent(),
    percent: faker.random.boolean(),
    amount: Math.floor(Math.random() * 1000)
  })
}

console.log(JSON.stringify(db))
