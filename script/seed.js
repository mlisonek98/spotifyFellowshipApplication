'use strict'

const db = require('../server/db')
const {User, Event} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])
  const events = await Promise.all([
    Event.create({name: 'Barber', startTime: '1:00 P.M.', endTime: '1:30 P.M.', description: "Need to get my hair cut for my friend's wedding", day: 29, month: 'June'}),
    Event.create({name: "Wedding", startTime: '11:00 A.M.', endTime: '5:30 P.M.', description: "Don't mess up the speech!", day: 30, month: 'June'}),
    Event.create({name: 'QrtrFinals', startTime: '10:00 A.M.', endTime: '4:00 P.M.', description: "Day 1 of the World Cup Quarter-Finals", day: 6, month: 'July'}),
    Event.create({name: 'SemiFinals', startTime: '2:00 P.M.', endTime: '4:30 P.M.', description: "First day of the World Cup Semi-Finals", day: 10, month: 'July'}),
    Event.create({name: 'Finals', startTime: '2:00 P.M.', endTime: '4:30 P.M.', description: "The Final for the World Cup", day: 15, month: 'July'}),
    Event.create({name: "Birthday", startTime: '9:00 A.M.', endTime: '11:59 P.M.', description: "My birthday", day: 21, month: 'July'})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${events.length} events`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}
if (module === require.main) {
  runSeed()
}
module.exports = seed
