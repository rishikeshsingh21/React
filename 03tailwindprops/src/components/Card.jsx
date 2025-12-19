
const Card = ({userName = "Akon",cgpa = 9.3}) => {
    console.log(userName)
  return (
    <div className="relative h-400px w-300px rounded-md m-4">
        <img
            src="https://images.pexels.com/photos/13726641/pexels-photo-13726641.jpeg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{userName}</h1>
            <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">Cgpa: 
            {cgpa} 
            </button>
        </div>
    </div>
  )
}

export default Card