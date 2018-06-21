const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  startTime: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  endTime: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  AMPM: {
    type: Sequelize.ENUM('A.M.', 'P.M.'),
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
