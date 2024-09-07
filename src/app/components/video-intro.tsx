import BackgroundVideo from "next-video/background-video";
import introVideo from "@videos/intro.mp4";

export default function VideoIntro() {
  return (
    <section style={{ '--height': '77.5vh' }} className="-mb-[var(--height)] bg-gray">
        <BackgroundVideo src={introVideo} className="h-[var(--height)] !sticky !top-0">
        </BackgroundVideo>
        <div className="h-[var(--height)]"></div>
      </section>
  );
}