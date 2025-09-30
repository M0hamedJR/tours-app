const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/AppError");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  for (let key in obj) {
    if (allowedFields.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next()
}

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    statusbar: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "this route is not for password update please use (/updateMyPassword)",
        400
      )
    );
  }

  const filterBody = filterObj(req.body, "name", "email");
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    statusbar: "success",
    data: {
      user: updatedUser,
    },
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined!",
  });
};

exports.getUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined!",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined!",
  });
};

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    statusbar: "success",
    data: null,
  });
});

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "this route is not yet defined!",
  });
};
