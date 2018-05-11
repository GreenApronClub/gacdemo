exports.manage_exceptions = (err, req, res, next) => {
  switch(err) {
    case 1000:
          res.status(400);
          res.json({msg: 'Wrong email format', code: err});
          break;
    case 1100:
          res.status(400);
          res.json({msg: 'First name must only contain characters from a-Z', code: err});
          break;
    case 1200:
          res.status(400);
          res.json({msg: 'Last name must only contain characters from a-Z', code: err});
          break;
    case 1300:
          res.status(400);
          res.json({msg: 'Password must be at least 8 characters long, and contain alpha numeric characters', code: err});
          break;
    case 1400:
          res.status(400);
          res.json({msg: 'Age verification failed', code: err});
          break;
    case 1500:
          res.status(400);
          res.json({msg: 'Email not in use. If you are new, please signup', code: err});
          break;
    case 1600:
          res.status(400);
          res.json({msg: 'Wrong email/password. Please try again or click "Forgot password?" to reset it', code: err});
          break;
    case 1700:
          var keyword = req.body.strain;
          res.status(400);
          console.log(keyword)
          res.json({msg: keyword, code: err});
          break;
    case 11000:
          res.status(400);
          res.json({msg: 'The email provided is already in use.', code: err});
          break;
    default:
          console.log(err)
          res.status(500);
          res.json({msg: 'Unexpected error.', reason: "Not sure", error: err});
  }
}
