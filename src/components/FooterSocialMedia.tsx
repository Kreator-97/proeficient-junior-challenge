import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'

export const FooterSocialMedia = () => {
  return (
    <div className='flex gap-4 mx-auto md:mx-0'>
      <div
        style={{borderWidth: '3px' }}
        className='border-white p-2 rounded-full'>
        <IoLogoTwitter size={24} color='white'/>
      </div>

      <div
        style={{borderWidth: '3px' }}
        className='border-white p-2 rounded-full'
      >
        <IoLogoFacebook size={24} color='white'/>
      </div>

      <div
        style={{borderWidth: '3px' }}
        className='border-white p-2 rounded-full'
      >
        <AiFillInstagram size={24} color='white'/>
      </div>
    </div>
  )
}
