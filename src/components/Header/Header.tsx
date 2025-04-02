import { useBackgroundImage } from '../../hooks/useBackgroundImage'
import SunIcon from '../../assets/images/icon-sun.svg'
import MoonIcon from '../../assets/images/icon-moon.svg'

interface Props {
  isMobile: Boolean
}

const Header = (props: Props) => {
const {isMobile}= props
const { theme, handleTheme, getBackgroundImage} = useBackgroundImage(isMobile)

  return (
    <div 
      className={`bg-no-repeat bg-center h-[35vh] w-full bg-cover `}   
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
      }}
    >
      <div className='m-auto p-2 w-80 text-white font-bold flex justify-between relative top-12'>
        <span className='text-3xl'> TODO</span>
        <img src={theme === 'light' ? MoonIcon: SunIcon} onClick={handleTheme} className='h-[5vh] w-[5vh] cursor-pointer'/>
      </div>
    </div>
  )
}

export default Header
