const asyncHandler = require("express-async-handler");
const ApiError = require("../../utils/ApiError");




exports.CreateOne = (Model) => asyncHandler(async (req, res) => {

    const data = await Model.create(req.body);
    res.status(201).json({ data: data });
  });


exports.GetOne = (Model) => asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    //1- build query
    let query =  Model.findById(id);
    //2-Execute query 
    const data = await query;

    if (!data) {
      next(new ApiError(`No data for this id : ${id}`, 404));
    } else {
      res.status(200).json({ data: data });
    }
  });

