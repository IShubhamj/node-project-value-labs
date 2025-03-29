const jwt = require("jsonwebtoken")

function generateJWTToken(req, res) {
    try {
        if(req.body.userId === "admin" && req.body.password === "admiN@123") {
            const token = jwt.sign({
                data: {
                    name: "ABC",
                    role: "admin",
                    sub: ["admin", "staff"]
                }
              }, process.env.SECRET, { expiresIn: 60 * 60 });
              res.status(200).json({
                  message: "Admin logged in successfully.",
                  data: {
                      token: token
                  }
              })
        } else {
            res.status(401).json({
                message: "Invalid userId or password.",
                data: {
                    token: null
                }
            })
        }
    } catch(err) {
        return res.status(500).json({
            data: "Something went wrong."
        })
    }
}

module.exports = {
    generateJWTToken
}