const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testnode1_manager_sell');
        console.log('Connect mongoose successfully!');
    } catch (error) {
        console.log('Connect mongoose| error: '+error);
    }
}

module.exports = {connect};

