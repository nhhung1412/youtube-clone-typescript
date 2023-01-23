import monkeyImg from '../assets/images/monkey.png'

export const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <img src={monkeyImg} alt="" className="w-40 h-40 mb-10" />
      <span>This page isn't available. Sorry about that.</span>
      <span>Try searching for something else.</span>
    </div>
  )
}
