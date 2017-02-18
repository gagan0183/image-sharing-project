module.exports = {
    index: function(req, res) {
        res.render('image');
    },
    create: function(req, res) {
        res.send('The images:create POST controller');
    },
    like: function(req, res) {
        res.send('The images:like controller, image_id: ' + req.params.image_id);
    },
    comment: function(req, res) {
        res.send('The images:comment controller, image_id: ' + req.params.image_id);
    }
};