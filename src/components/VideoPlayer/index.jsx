import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import styles from './styles.module.css'


const SRC =
    'https://v58.tiktokcdn.com/video/tos/alisg/tos-alisg-pve-0037/482b9c5fd92c47089f6580dfe24b018b/?VExpiration=1634457504&VSignature=zIdz9vi2Wej8vCI3i8e9ug&a=1180&br=1804&bt=902&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&ft=98ZsqeeH4kag3&l=2021101701575501018907415919758EE2&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2xudDQ6Zm43ODMzODgzNEApO2k8OjpmN2Q3NzU2MzY3Z2duNGBycjRvcGZgLS1kLy1zczMzMGA0XjEwX18xNl8tLWE6Yw%3D%3D&vl=&vr='

export default function VideoPlayer() {
    const[playing, setPlaying] = useState(false)
    const video = useRef()
    const handlePlay = () => {
        if(playing) {
            video.current.pause()
        } else {
            video.current.play()
        }
        setPlaying(!playing) 
    }
    return (
    <div>
        <video
        className={styles.video} 
        src={SRC} 
        controls={false} 
        ref={video}
        />
        <button className={styles.player} onClick={handlePlay} />
      </div>  
    )
}
