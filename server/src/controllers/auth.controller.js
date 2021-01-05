import config from "../config";

const generateUID = () => {
  return (
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = Math.random()*16|0, v = c == "x" ? r : (r&0x3|0x8);
      return v.toString(16);
    }).toUpperCase()
  )
}

export const LoginController = async (req, res) => {
  if(config.user.password === req.body.password) {
    res.status(200).json({
      status: true,
      access_token: generateUID(),
      message: "Login success"
    })
  } else {
    res.status(400).json({
      status: false,
      message: "Incorrect password"
    })
  }
}