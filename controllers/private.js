const getPrivateData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "You have acccess to this route.",
  });
};

const createPost = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "This is private route where you can create a POST.",
  });
};

export { getPrivateData, createPost };
