import VideoPlayer from "@/components/VideoPlayer";
import { useRouter } from "next/router";
import style from "../../../styles/VideoSubPage.module.css";

const VideoPlayerId = () => {
  const router = useRouter();
  const { vimeoid } = router.query;

  return (
    <div className={style.videoSubContainer}>
      {vimeoid && <VideoPlayer videoId={vimeoid} />}
    </div>
  );
};

export default VideoPlayerId;
