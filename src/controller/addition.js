function addTwoNumbers(req, res) {
  try {
    const { num1, num2 } = req.query;

    return res.status(200).json({
      data: parseInt(num1) + parseInt(num2),
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
}

module.exports = {
  addTwoNumbers,
};
