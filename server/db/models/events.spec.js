const {expect} = require('chai')
const db = require('../index')
const Event = db.model('event')

describe('Event model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('creates successfull event', () => {
    describe('creates event', () => {
      let barber

      beforeEach(async () => {
        barber = await Event.create({
          name: 'barber',
          startTime: 3.00,
          endTime: 3.30,
          AMPM: 'P.M.',
          description: 'Gotta go get my haircut at th barber',
          day: 21,
          month: 'July'
        })
      })

      it('correctly adds start time of event', () => {
        expect(barber.startTime).to.be.equal(3.00)
      })

      it('correctly adds end time of event', () => {
        expect(barber.endTime).to.be.equal(3.30)
      })
      it('correctly adds A.M. or P.M. to event', () => {
        expect(barber.AMPM).to.be.equal('P.M.')
      })
      it('correctly adds name and description of event', () => {
        expect(barber.name).to.be.equal('barber')
        expect(barber.description).to.be.equal('Gotta go get my haircut at th barber')
      })
      it('correctly adds the month and day of event', () => {
        expect(barber.day).to.be.equal(21)
        expect(barber.month).to.be.equal('July')
      })
    })
  })
})
