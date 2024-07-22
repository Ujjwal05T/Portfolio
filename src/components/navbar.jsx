import logo from "../assets/9980412.png"
import { FaLinkedin} from 'react-icons/fa'
import { FaGithub} from 'react-icons/fa'
import { FaSquareXTwitter} from 'react-icons/fa6'
import { FaInstagram} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex mb-20 py-6 items-center justify-between'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='w-auto h-12' src={logo} alt="" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub/>
        <FaInstagram/>
        <FaSquareXTwitter/>
      </div>
    </nav>
  )
}

export default Navbar