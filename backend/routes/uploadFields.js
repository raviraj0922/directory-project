router.post("/forum-submissions", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 }
  ]), async (req, res) => {
    try {
      const imageFile = req.files?.image?.[0];
      const videoFile = req.files?.video?.[0];
  
      const data = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        city: req.body.city,
        block: req.body.block,
        subject: req.body.subject,
        image: imageFile ? `/upload/${imageFile.filename}` : "",
        video: videoFile ? `/upload/${videoFile.filename}` : "",
      };
  
      const submission = new ForumSubmission(data);
      await submission.save();
  
      await sendMail(data); // Email with file info (you can link to files)
  
      res.status(200).json({ message: "Submission received and files saved." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Submission failed." });
    }
  });
  