import { NewTitle } from '../utils/ChangeTitle'
import { Cards } from './Cards'
import { Hero } from './Hero'

export const Home = () => {
  NewTitle('Blog | Home')

  return (
    <>
      <Hero />
      <Cards />
    </>
  )
}
