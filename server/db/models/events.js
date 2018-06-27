const Sequelize = require('sequelize')
const db = require('../db')

//model for single event

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  startTime: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endTime: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  day: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  month: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Event
