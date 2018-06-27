'use strict'

const db = require('../CalendarBackEnd/db')
const {Event} = require('../CalendarBackEnd/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  const events = await Promise.all([
    Event.create({name: 'Barber', startTime: '1:00 P.M.', endTime: '1:30 P.M.', description: "Have an appointment to get a hair cut so I can look good for Pinto's Wedding", day: 29, month: 'June'}),
    Event.create({name: "Wedding", startTime: '11:00 A.M.', endTime: '5:30 P.M.', description: "Pintos's Wedding, you're the best man don't messup the speech!", day: 30, month: 'June'}),
    Event.create({name: 'QrtrFinals', startTime: '10:00 A.M.', endTime: '4:00 P.M.', description: "Day 1 of the World Cup Quarter-Finals", day: 6, month: 'July'}),
    Event.create({name: 'SemiFinals', startTime: '2:00 P.M.', endTime: '4:30 P.M.', description: "First day of the World Cup Semi-Finals", day: 10, month: 'July'}),
    Event.create({name: 'Finals', startTime: '2:00 P.M.', endTime: '4:30 P.M.', description: "The Final for the World Cup", day: 15, month: 'July'}),
    Event.create({name: "Birthday", startTime: '9:00 A.M.', endTime: '11:59 P.M.', description: "My birthday", day: 21, month: 'July'}),
    Event.create({name: "Birthday", startTime: '9:00 A.M.', endTime: '11:59 P.M.', description: "Sophia's", day: 3, month: 'January'}),
    Event.create({name: "Birthday", startTime: '9:00 A.M.', endTime: '11:59 P.M.', description: "Zack's Brthday", day: 11, month: 'August'}),
    Event.create({name: "Birthday", startTime: '9:00 A.M.', endTime: '11:59 P.M.', description: "Brad's Birthday", day: 29, month: 'December'}),
    Event.create({name: "Birthday", startTime: '9:00 A.M.', endTime: '11:59 P.M.', description: "Mom's Birthday", day: 22, month: 'February'}),
    Event.create({name: "Birthday", startTime: '9:00 A.M.', endTime: '11:59 P.M.', description: "Dad's birthday", day: 24, month: 'June'}),
    Event.create({name: "Birthday", startTime: '9:00 A.M.', endTime: '11:59 P.M.', description: "Allie's birthday", day: 18, month: 'April'}),
    Event.create({name: "Birthday", startTime: '9:00 A.M.', endTime: '11:59 P.M.', description: "Matt's birthday", day: 17, month: 'April'}),
    Event.create({name: "Birthday", startTime: '9:00 A.M.', endTime: '11:59 P.M.', description: "Teta Rada's birthday", day: 19, month: 'September'}),
    Event.create({name: "Halloween", startTime: '9:00 P.M.', endTime: '11:59 P.M.', description: "Halloween doesn't need a description", day: 31, month: 'October'}),
    Event.create({name: "Christmas", startTime: '9:00 A.M.', endTime: '11:59 P.M.', description: "Serbian Orthodox Christmas", day: 7, month: 'January'}),
  ])

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
