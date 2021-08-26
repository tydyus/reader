import type { NextPage } from 'next'
import { Fragment } from "react"
import {VignetteNovel} from "../components/novel/vignette.view";


const Home: NextPage = () => {
  return (
      <Fragment>
        <VignetteNovel iteration={8} id={'trendingNovel'} title={'Trending'} />
        <VignetteNovel iteration={8} id={'rankingNovel'} title={'Ranking'} />
        <VignetteNovel iteration={8} id={'newChapterNovel'} title={'new Chapter'} />
      </Fragment>
  )
}

export default Home
