import type { NextPage } from 'next'
import { Fragment } from "react"
import {VignetteNovel} from "../components/novel/vignette.view";


const Home: NextPage = () => {
  return (
      <Fragment>
        
        <div className="container">
          
          <div className="trending novelPreview">
            <h2>Trending</h2>
            <div className="content">
              <VignetteNovel iteration={8} id={'trendingNovel'} />
            </div>
          </div>
          <div className="ranking novelPreview">
            <h2>Ranking</h2>
            <div className="content">
              <VignetteNovel iteration={8} id={'rankingNovel'} />
            </div>
          </div>
          <div className="newChapter novelPreview">
            <h2>new Chapter</h2>
            <div className="content">
              <VignetteNovel iteration={8} id={'newChapterNovel'} />
            </div>
          </div>
        </div>
      </Fragment>
  )
}

export default Home
