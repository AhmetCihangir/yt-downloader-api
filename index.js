const express = require("express")
const ytdl = require("ytdl-core")

const app = express()

app.get("/", async (req,res) => {
    // var videoReadableStream = ytdl(videoUrl, { filter: format => format.qualityLabel == "144p"});

    res.header("Content-Disposition",'attachment; filename = video.mp4');

    ytdl(req.body.videoUrl)
      .pipe(res);




    
    
    // ytdl(req.query.videoUrl,{format:"mp4",filter: format => format.itag == 18}).pipe(fs.createWriteStream("video.mp4"))
    // res.json({x : await ytdl.getInfo(req.query.videoUrl)})
})

app.get("/videoInfo",async (req,res) => {
  const videoUrl = req.query.videoUrl
  const info = ytdl.getInfo(videoUrl)
  res.setHeader('Content-Type', 'application/json')
  res.json(info)
})

app.listen(process.env.PORT || 7000)