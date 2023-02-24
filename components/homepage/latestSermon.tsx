import SpinLoading from 'components/global/SpinLoading';
import Container from 'components/structural/container'
import VideoComponent from 'components/videoComponent'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const YOUTUBE_PLAYLIST_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const api_Key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const playListId = 'PLGc_P8BEcwEuDD3jDR7dVo-98nVJ53rTm'
const API_URL = YOUTUBE_PLAYLIST_API+"?part=snippet&playlistId="+playListId+"&key="+api_Key;


export default function YouTubePlaylist( ) {
  const [videoId, setVideoId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setVideoId(data.items[data.items.length-1].snippet.resourceId.videoId);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);
  

  if (loading) {
    return (  
      <>
      <p className='text-center'>Loading...</p>
      <SpinLoading/>
      </>
    
    )
  }

  if (error) {
    return (<p>Error: {error.message}</p>);
  }

  return (  
    <>

    <Container>
      
      <div className='py-4'>
        Watch our latest sermon here, if you missed a different one or want to watch one again have a look here on this <Link href='/youtube' className="font-semibold hover:underline">page</Link>.
      </div>
     
    <div id="video">
      {videoId && (
        <VideoComponent vidSrc={'https://www.youtube.com/watch?v='+videoId} controls={true}/>
      )}
    </div>
    </Container>
    </>
  );
}


