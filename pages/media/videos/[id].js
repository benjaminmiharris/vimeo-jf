import VideoPlayer from "@/components/VideoPlayer";
import { getMoviesAPITester } from "@/helpers/getMoviesApi";
import { useRouter } from "next/router";
import style from "../../../styles/VideoSubPage.module.css";

const VideoPlayerId = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={style.videoSubContainer}>
      <VideoPlayer id={id} />
    </div>
  );
};

export default VideoPlayerId;
