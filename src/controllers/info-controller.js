const {StatusCodes} = require('http-status-code');
const info = (req,res) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json (
        {
            success:true,
            message: 'api is live',
            error: {},
            data: {}
        }
    )
}
module.exports = {
    info
}