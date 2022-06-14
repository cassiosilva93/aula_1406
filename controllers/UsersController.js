const { Users } = require('../models')


const UsersController = {
  index: async (req, res) => {
    try {
      const users = await Users.findAll()
      const usersMapped = users.map(user => user.dataValues)
      return res.json(usersMapped)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }

  // index: (req, res) => {
  //   Users.findAll()
  //     .then(result => {
  //       const arrayMapped = result.map(user => user.dataValues)
  //       return res.json(arrayMapped)
  //     })
  //     .catch(error => console.log(error))
  // }
}

module.exports = UsersController