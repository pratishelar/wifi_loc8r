/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
        title: 'locations-list'
    });
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('index', {
        title: 'Location info'
    });
};

/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('index', {
        title: 'Add review'
    });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};