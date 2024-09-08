import BackgroundVideo from "next-video/background-video";
import { Asset } from "next-video/dist/assets.js";

export default function VideoIntro({ video }: { video: Asset }) {
  return (
    <section style={{ '--height': '77.5vh' }} className="-mb-[var(--height)] bg-gray">
      <BackgroundVideo src={video} className="h-[var(--height)] !sticky !top-0">
      </BackgroundVideo>
      <div className="h-[var(--height)]"></div>
    </section>
  );
}