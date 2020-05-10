const axios = require('axios');

module.exports = async function() {
    return axios.get('http://carlevans.test/api/generic.json')
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.log(err);
            console.log('failed');
        });
}