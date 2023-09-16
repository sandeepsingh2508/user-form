const Detail = require("../models/details");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const idMap = require("../utils/idMap");
const { v4: uuidv4 } = require("uuid");


//get details by userId
exports.getDetailsById = catchAsyncError(async (req, res, next) => {
  const result = await Detail.findOne({ userId: req.params.userId });
  if (!result) {
    return next(new ErrorHandler("Such user details not found", 401));
  }
  res.status(200).json({
    success: true,
    result: result,
  });
});

//insert user details
exports.createDetails = catchAsyncError(async (req, res, next) => {
  const result = await Detail.create({
    _id: `${idMap.fields}-${uuidv4()}`,
    userId: req.user.id,
    ...req.body,
  });
  res.status(201).json({
    success: true,
    result: result,
  });
});

//update Details
exports.updateDetails = catchAsyncError(async (req, res, next) => {
  const user = await Detail.findOne({ userId: req.params.userId });
  if (!user) {
    return next(new ErrorHandler("Such user details not found", 401));
  }
  const result = await Detail.findOneAndUpdate(
    { userId: req.params.userId },
    req.body
  );

  res.status(201).json({
    success: true,
    result: result,
  });
});

//Delete user details
exports.deleteDetails = catchAsyncError(async (req, res, next) => {
  const user = await Detail.findOne({ userId: req.params.userId });
  if (!user) {
    return next(new ErrorHandler("Such user details not found", 401));
  }
  await Detail.findOneAndDelete({ userId: req.params.userId }, req.body);
  res.status(201).json({
    success: true,
    message: "User details has deleted",
  });
});
