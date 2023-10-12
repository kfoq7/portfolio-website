import Layout from '@/components/layouts/article'
import Intro from '@/components/intro'
import About from '@/components/about'
import { Divider } from '@/components/section'

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Intro />
        <Divider />
        <About />
      </div>
    </Layout>
  )
}
