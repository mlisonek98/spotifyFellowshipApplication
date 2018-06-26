const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Event = db.model('event')

describe('Event routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/events/', () => {
    const barber = {
      name: 'barber',
      startTime: '3:00 P.M.',
      endTime: '3:30 P.M.',
      description: 'Gotta go get my haircut at th barber',
      day: 21,
      month: 'July'
    }
    const dentist = {
      name: 'dentist',
      startTime: '12:15 P.M.',
      endTime: '1:00 P.M.',
      description: 'Gotta go get my teeth cleaned',
      day: 11,
      month: 'July'
    }
    const soccerPractice = {
      name: 'practice',
      startTime: '5:00 P.M.',
      endTime: '7:30 P.M.',
      description: 'Gotta go to soccer practice',
      day: 5,
      month: 'August'
    }
    const firstDayOfSchool = {
      name: '1st Day',
      startTime: '8:00 A.M.',
      endTime: '2:30 P.M.',
      description: 'Gotta go back to school',
      day: 1,
      month: 'September'
    }


    beforeEach(() => {
      return Event.bulkCreate([barber, dentist, soccerPractice, firstDayOfSchool])
    })

    it('GET /api/events', async () => {
      const res = await request(app)
        .get('/api/events')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body.length).to.be.equal(4)
      expect(res.body[0].name).to.be.equal('barber')
    })
    it('POST /api/events', async () => {
      const newEvent = {
        name: 'date',
        startTime: '8:00 P.M.',
        endTime: '11:30 P.M.',
        description: 'Gotta take this girl out on a date',
        day: 15,
        month: 'July'
      }
      await request(app)
        .post('/api/events')
        .send(newEvent)
        .expect(201)

      const res = await request(app)
        .get('/api/events')

      expect(res.body.length).to.be.equal(5)
      expect(res.body[4].month).to.be.equal('July')
    })

    it('PUT /api/events/:id', async () => {
      const newDayAtSchool = {
        name: '1st Day',
        startTime: '8:00 A.M.',
        endTime: '2:30 P.M.',
        description: 'Gotta go back to school',
        day: 4,
        month: 'September'
      }
      await request(app)
        .put('/api/events/4')
        .send(newDayAtSchool)
        .expect(202)

      const res = await request(app)
        .get('/api/events')

      expect(res.body[3].day).to.be.equal(4)
    })
    it('DELETE /api/events/:id', async () => {
      await request(app)
        .delete('/api/events/1')
        .expect(204)

      const res = await request(app)
        .get('/api/events')

      expect(res.body.length).to.be.equal(3)
      expect(res.body[0].endTime).to.be.equal('1:00 P.M.')
    })
  })
})
