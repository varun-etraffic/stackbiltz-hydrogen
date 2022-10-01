import ReactPlayer from 'react-player/youtube'

export function VideoSection({url, thumbnail}) {
  return (
    <div className={`w-full video-section max-h-screen`}>
      <ReactPlayer
        url={url}
        width='100%'
        height='100vh'
        controls="false"
        playing="true"
        light={thumbnail}
        config={{
          youtube: {
            playerVars: {
              showinfo: 0,
              rel: 0,
              enablejsapi: 1,
              controls: 0,
              iv_load_policy: 3,
              modestbranding: 1
            }
          }
        }}
      />
    </div>
  )
}