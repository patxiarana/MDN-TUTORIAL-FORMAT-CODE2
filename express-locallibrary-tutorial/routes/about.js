router.get("/about", (req, res, next) => {
    About.find({}).exec((err, queryResults) => {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render("about_view", { title: "About", list: queryResults });
    });
  });


  exports.get("/about", async function (req, res, next) {
    try {
      const successfulResult = await About.find({}).exec();
      res.render("about_view", { title: "About", list: successfulResult });
    } catch (error) {
      return next(error);
    }
  });