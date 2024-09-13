import BackgroundVideo from "next-video/background-video";
import { Asset } from "next-video/dist/assets.js";

interface VideoIntroProps {
  video?: Asset;
  playbackId?: string;
}

export default function VideoIntro({ video, playbackId }: VideoIntroProps) {
  const videoSrc: string | Asset | undefined = playbackId
    ? `https://stream.mux.com/${playbackId}.m3u8`
    : video;

  return (
    <section
      style={{ "--height": "77.5vh" }}
      className="-mb-[var(--height)] bg-gray"
    >
      <BackgroundVideo
        src={videoSrc}
        className="h-[var(--height)] !sticky !top-0"
      ></BackgroundVideo>
      <div className="h-[var(--height)]"></div>
    </section>
  );
}
