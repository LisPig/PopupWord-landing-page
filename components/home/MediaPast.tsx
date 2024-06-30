
import { Media } from "@/config/media";
const VideoPlay = () => {
  return (


    <section className="flex flex-col items-center justify-center gap-20 mt-14">
      {/* 将图片展示替换为视频播放 */}
      <div className="w-full max-w-screen-md mx-auto">
        <video
          src={Media.promotionalVideo}
          autoPlay muted
          loop
          playsInline
          controls
          className="w-full rounded-lg shadow-md"
          preload="metadata"
        >
          {/* <source src={Media.promotionalVideo} type="video/mp4" /> */}
        </video>
      </div>
    </section>
  );
};

export default VideoPlay;