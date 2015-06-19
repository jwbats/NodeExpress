var cats = {
	1: 'Ragdoll',
	2: 'Siamese',
	3: 'Sphynx'
};

var express = require('express');
var app = express();
var router = express.Router();

router.route('/get/:id')
	.get(function(request, response){
		var id = request.params.id;
		response.status(200).json(cats[id]);
	});
	
module.exports = router;