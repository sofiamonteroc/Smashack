import videos from "../public/img/video.mp4";

const Video = () => {
  return (
    <div className="bg-cover">
      <video
        className="w-full h-full object-cover"
        src={videos}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Video;
