import Container from 'app/components/BlogContainer'
import BlogHeader from 'app/components/BlogHeader'
import Layout from 'app/components/BlogLayout'
import MoreStories from 'app/components/MoreStories'
import PostBody from 'app/components/PostBody'
import PostHeader from 'app/components/PostHeader'
import PostPageHead from 'app/components/PostPageHead'
import PostTitle from 'app/components/PostTitle'
import SectionSeparator from 'app/components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'
import { notFound } from 'next/navigation'

import Footer from './global/footer'
import Menu from './homepage/Menu'

const menuArr = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Video Sermons', href: '/youtube' },
]
export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props
  const { title = demo.title } = settings || {}

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <Head>
        <title>{post.title + ' – Blog Post '}</title>
        <PostPageHead settings={settings} post={post} />
      </Head>

      <Layout preview={preview} loading={loading}>
        <Container>
          <Menu nav={menuArr} />
          <BlogHeader title={title} level={2} href={'/blog'} />
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />

                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
          <Footer />
        </Container>
      </Layout>
    </>
  )
}
