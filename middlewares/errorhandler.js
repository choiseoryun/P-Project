const errorhandler = (err, req, res, next) => {
    const status = err.status || 500;
    switch (status) {
        case 400:
            res.status(status).json({
                title: "bad request",
                messate: err.message
            });
            break;
        case 401:
            res.status(status).json({
                title: "unauthorized",
                message: err.message
            })
        case 403:
            res.status(status).json({
                title: "Forbiddec",
                message: err.message
            })
        case 404:
            res.status(status).json({
                title: "not found",
                message: err.message
            })
    }
}

module.exports = errorhandler