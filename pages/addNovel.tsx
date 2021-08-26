import type { NextPage } from 'next'
import { Fragment } from "react"
import { User } from '../class/User.class';
import NewNovel from "../components/novel/newNovel.form";


const Home: NextPage = () => {
  return (
      <Fragment>
        <NewNovel user={User.is()} />
      </Fragment>
  )
}

export default Home
