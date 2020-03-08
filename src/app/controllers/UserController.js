const User = require("./../models/User");

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const checkEmail = await User.findOne({ where: { email } });

    if (checkEmail) {
      return res.status(400).json({ error: "Duplicated email" });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

module.exports = new UserController();
