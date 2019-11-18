class ApiResponse {
  static success(res, msg) {
    let data = {
      success: true,
      message: msg,
      code: 200
    };
    return res.status(200).json(data);
  }
  static error(res, msg) {
    let data = {
      success: false,
      message: msg,
      code: 500
    };
    return res.status(500).json(data);
  }
  static notFound(res, msg) {
    let data = {
      success: false,
      message: msg,
      code: 404
    };
    return res.status(404).json(data);
  }
  static unauthorized(res, msg) {
    let data = {
      success: false,
      message: msg
    };
    return res.status(401).json(data);
  }
  static validationError(res, msg) {
    if (!msg) {
      msg = "Invalid request";
    }
    let data = {
      success: false,
      message: msg,
      code: 400
    };
    return res.status(400).json(data);
  }
}

export default ApiResponse;
