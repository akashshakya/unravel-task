import React, { useState } from "react";
import Video from "./components/Video/Video";
import "./App.css";

export default function App() {

  const data = {
    status: 1,
    data: {
      user_id: "392",
      recommendation: [
        {
          video_url: {
            med: "https://d1tf573zhz3zzy.cloudfront.net/data/content/videos/CantoTranscoded/720p/DMITRY/ul2dqaprm55mnfh5n64idfbp40.mp4",
          },
          image: {
            twoX: {
              square:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/square/bf8774e4-090c-44f9-ab7e-5ad55e64e10c_twox_390x390.jpg",

              portrait:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/portrait/bf8774e4-090c-44f9-ab7e-5ad55e64e10c_twox_256x368.jpg",
            },
          },
        },
        {
          video_url: {
            med: "https://d1tf573zhz3zzy.cloudfront.net/data/content/videos/CantoTranscoded/720p/VOYAGE+FOX/hrjml32mgt1hd8ilhah5lr2e5b.mp4",
          },
          image: {
            twoX: {
              square:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/square/3940ad03-977d-4fa5-b150-6274a411df67_twox_390x390.jpg",
              portrait:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/portrait/3940ad03-977d-4fa5-b150-6274a411df67_twox_256x368.jpg",
            },
          },
        },
        {
          video_url: {
            med: "https://d1tf573zhz3zzy.cloudfront.net/data/content/videos/CantoTranscoded/720p/DMITRY/db65l0a78h1rl598ep3vq9j20n.mp4",
          },
          image: {
            twoX: {
              square:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/square/85a7b977-28b4-400e-bae8-534dcd554f75_twox_390x390.jpg",
              portrait:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/portrait/85a7b977-28b4-400e-bae8-534dcd554f75_twox_256x368.jpg",
            },
          },
        },
        {
          video_url: {
            med: "https://d1tf573zhz3zzy.cloudfront.net/data/content/videos/CantoTranscoded/720p/THE+LOST+TWO/49oe8tmf1d21ldn54g0h2q3j2v.mp4",
          },
          image: {
            twoX: {
              square:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/square/820dcba7-7ed3-4e2a-b5dc-a24dadb0f373_twox_390x390.jpg",

              portrait:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/portrait/820dcba7-7ed3-4e2a-b5dc-a24dadb0f373_twox_256x368.jpg",
            },
          },
        },
        {
          video_url: {
            med: "https://d1tf573zhz3zzy.cloudfront.net/data/content/videos/CantoTranscoded/720p/ASA+STEINAR/6rkvt5ti6t3h7aesv0lasnum12.mp4",
          },
          image: {
            twoX: {
              square:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/square/156f6a0e-b205-4e14-8d0f-93f5d87adb4a_twox_390x390.jpg",

              portrait:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/portrait/156f6a0e-b205-4e14-8d0f-93f5d87adb4a_twox_256x368.jpg",
            },
          },
        },
        {
          video_url: {
            med: "https://d1tf573zhz3zzy.cloudfront.net/data/content/videos/CantoTranscoded/720p/ALEX/nkubrhkqtl07rd6hekbjivsv41.mp4",
          },
          image: {
            twoX: {
              square:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/square/ffcc4b00-f245-47b9-9da0-69baff53cbcf_twox_390x390.jpg",
              portrait:
                "https://d1tf573zhz3zzy.cloudfront.net/data/content/images/itemImages/VIDEO/portrait/ffcc4b00-f245-47b9-9da0-69baff53cbcf_twox_256x368.jpg",
            },
          },
        },
      ],
    },
    message: "SuccessFull",
  };

  const [videoList, setvideoList] = useState(data.data.recommendation)

  const [isMuted, setisMuted] = useState(true);
  return (
    <div className="App">
      <center>
        {/*  */}

        <div className="video-container" id="video-container">
          {/*  */}

          {videoList.map((list, i) => (
            <Video
            url={list.video_url.med}
            key={i}
            index={i}
            isMuted={isMuted}
            setisMuted={setisMuted}
            />
          ))}

          {/*  */}
        </div>
      </center>
    </div>
  );
}
