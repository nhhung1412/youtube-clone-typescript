import { Helmet } from '../components/Helmet'

import { CategoriesBar } from '../components/CategoriesBar'
import { Videos } from '../components/Videos'

export const Home: React.FC = () => {
  return (
    <Helmet title="Home">
      <div className="px-5 grid cursor-pointer overflow-scroll h-[100vh]">
        <div className="overflow-x-scroll flex text-sm h-max">
          <CategoriesBar />
        </div>
        <div className="grid grid-cols-4 gap-5 my-6">
          {[...new Array(20)].map(() => (
            <div className="">
              <Videos />
            </div>
          ))}
        </div>
      </div>
    </Helmet>
  )
}
