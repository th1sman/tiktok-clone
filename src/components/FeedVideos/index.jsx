import VideoPlayer from "../VideoPlayer";
import styles from "./styles.module.css";

const VIDEOS = [
  {
    id: 1,
    author: "ellalatripulante_",
    description:
      "Ahora qué todo está caído, Tiktok haz tú magia 🪄 por favor!!! ✨😍 ",
    likes: 123,
    shares: 234,
    commentes: 333,
    songTitle: "sonido original",
    albumCover:
      "//p16-sg.tiktokcdn.com/aweme/200x200/tiktok-obj/default_clip_cover.png.jpeg",
    src: 'https://v16m.tiktokcdn.com/f791d86b8cb5152c28c132dcde251ec0/616e38f2/video/tos/useast2a/tos-useast2a-ve-0068c004/9e93af08d6a24dc2894b7c4cd32a562b/?a=1233&br=2566&bt=1283&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98ZsqeeH4kag3&l=2021101821171101019021922304349831&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2U4bTY6ZnZ1ODMzNzczM0ApNzZlZTtnN2U3Nzg2NTk3PGdhM2BocjRfaWpgLS1kMTZzc2JgYWE2NWE0LzUzXy9gYDI6Yw%3D%3D&vl=&vr='
  },

  {
    id: 2,
    author: "ellalatripulante_",
    description:
      "Ahora qué todo está caído, Tiktok haz tú magia 🪄 por favor!!! ✨😍 ",
    likes: 123,
    shares: 234,
    commentes: 333,
    songTitle: "sonido original",
    albumCover:
      "//p16-sg.tiktokcdn.com/aweme/200x200/tiktok-obj/default_clip_cover.png.jpeg",
    src: 'https://v16m.tiktokcdn.com/ecd3aefb8974573e40fad9ab6efb482b/616e0f36/video/tos/useast2a/tos-useast2a-pve-0068/16d3baebd4894ee2bb853c3c999ed586/?a=1233&br=2000&bt=1000&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=98ZsqeeH4kag3&l=2021101818195001018907507902214CCD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2RwdmY6ZjM8ODMzNzczM0ApO2hmZDs6N2VkN2ZkNmg4aGdvZWBycjRvamRgLS1kMTZzczUzYmE2MjVgXy8wXjNfL146Yw%3D%3D&vl=&vr='
  },
];

export default function FeedVideos() {
  return VIDEOS.map((video) => {
    return (
      <div key={video.id} className={styles.item}>
        <VideoPlayer {...video} />
      </div>
    )
  });
}
