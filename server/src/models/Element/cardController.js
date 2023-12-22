const cardUtils = require('./cardUtils');

exports.clientSecret = async (req, res) => {
    try {
        const result = await cardUtils.clientSecret(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'failed to save' });
    }
}; 