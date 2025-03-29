function addTwoNumbers(req, res) {
    if(typeof req.query.num1 === "number" && typeof req.query.num2 === "number") {
        return res.status(200).json({
            data: num1 + num2
        })
    } 

    if (typeof req.query.num1 != "number" && typeof req.query.num2 != "number") {
        return res.status(400).json({
            message: "Invalid parameters, Num1 and Num2 should be numbers."
        });
    }

    return res.status(500).json({
        message: "Something went wrong."
    });
}