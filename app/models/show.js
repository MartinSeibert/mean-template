// grab the mongoose module
var mongoose = require('mongoose');

// define the model
// module.export allows us to pass this to other files when it is called
module.exports = mongoose.model('Show', {
	name: {type: String, default: ''}
});