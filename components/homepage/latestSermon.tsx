import Container from 'components/structural/container'
import VideoComponent from 'components/videoComponent'
import { useEffect, useState } from 'react';

const YOUTUBE_PLAYLIST_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const api_Key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const playListId = 'PLLpdmFmcfglepABDwnzAsuXzKTgHeMN1S'
const API_URL = YOUTUBE_PLAYLIST_API+"?part=snippet&playlistId="+playListId+"&key="+api_Key;

export default function YouTubePlaylist() {
  const [videoId, setVideoId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setVideoId(data.items[0].snippet.resourceId.videoId);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Container>
    <div>
      {videoId && (
        <VideoComponent vidSrc={'https://www.youtube.com/watch?v='+videoId} />
      )}
    </div>
    </Container>
  );
}


