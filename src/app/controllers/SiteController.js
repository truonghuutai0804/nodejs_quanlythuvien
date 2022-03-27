class SiteContoller {
    //GET /
    index(req, res) {
        res.render('home');
    }
    //GET /search
    search(req, res) {
        res.render('search');
    }
    login(req,res){
        res.render('login');
    }
}

module.exports = new SiteContoller();
