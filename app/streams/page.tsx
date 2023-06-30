import Footer from 'app/components/global/footer'
import Menu from 'app/components/homepage/Menu'
import PostTitle from 'app/components/PostTitle'
import Container from 'app/components/structural/container'
import VideoComponent from 'app/components/videoComponent'
import { Metadata } from 'next'

const menuArr = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  // { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const YOUTUBE_PLAYLIST_API =
  'https://www.googleapis.com/youtube/v3/playlistItems'
const api_Key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
const playListId = 'PLGc_P8BEcwEuDD3jDR7dVo-98nVJ53rTm'
const API_URL =
  YOUTUBE_PLAYLIST_API +
  '?part=snippet&playlistId=' +
  playListId +
  '&key=' +
  api_Key

type Vids = { vids: any[] }

async function getVideos() {
  const res = await fetch(API_URL)
  const data = await res.json()
  const vids = data.items.reverse()
  return vids
}

export const metadata: Metadata = {
  title: 'Make Jesus Known Live Stream Videos',
}

export default async function YouTubeList() {
  const vids = await getVideos()
  return (
    <>
      <div className="container mx-auto sm:px-6 lg:px-8">
        <Menu nav={menuArr} />
        <Container>
          <div>
            <PostTitle>Youtube Feed</PostTitle>
            <p className="pb-8">
              Miss out on a sermon? Visit this page to see all our live streams
              in this series
            </p>
          </div>
          <div id="SermonVideos">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {vids.map((item) => (
                <div className="px-6 pb-6 pt-2 md:basis-1/2" key={item.etag}>
                  <VideoComponent
                    vidSrc={
                      'https://www.youtube.com/watch?v=' +
                      item.snippet.resourceId.videoId
                    }
                    title={item.snippet.title}
                    date={item.snippet.publishedAt}
                  ></VideoComponent>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}
