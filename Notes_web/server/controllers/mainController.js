// GET
// Home Page

exports.homepage = async(req,res)=> {
    const locals = {
        title: "Notes_Web",
        description : "Free Notes App",
    }
    res.render('index',{
        locals,
        layout:'../views/layouts/front-page'
    });
}

// GET
// About

exports.about = async(req,res)=> {
    const locals = {
        title: " About - Notes_Web",
        description : "Free Notes App",

    }
    res.render('about',locals);
}