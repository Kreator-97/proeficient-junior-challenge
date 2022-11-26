import { FC } from 'react'
import { ImWhatsapp } from 'react-icons/im'

import { FooterSocialMedia } from '.'
import homeIcon from '../assets/home.svg'

export const Footer: FC = () => {

  return (
    <footer className="min-h-[200px] bg-primary">
      <div
        className='
          max-w-5xl mx-auto py-20 grid gap-8 px-4 footer__grid'
      >
        <section className='flex flex-col gap-8 justify-center'>
          {/* footer info */}
          <div className='mx-auto md:mx-0'>
            <img src={ homeIcon } alt="Inicio" width={64} height={64} />
          </div>
          <p className='text-white text-center md:text-left'>
            It is a long established fact that a reader will be distracted but the readable content of a page whenters.
          </p>

          <FooterSocialMedia />
        </section>

        <section>
          {/* About Us */}
          <h2 className='text-2xl mb-12 text-white text-center md:text-left'>About Us</h2>

          <div className='flex flex-col gap-4 text-sm text-white'>
            <h3 className='text-center md:text-left'>About</h3>
            <h3 className='text-center md:text-left'>Privacy & Policy</h3>
            <h3 className='text-center md:text-left'>Terms & Conditions</h3>
            <h3 className='text-center md:text-left'>Faq</h3>
          </div>
        </section>

        <section>
          {/* Navigate */}
          <h2 className='text-2xl mb-12 text-white text-center md:text-left'>Navigate</h2>

          <div className='flex flex-col gap-4 text-sm text-white'>
            <h3 className='text-center md:text-left'>How we work</h3>
            <h3 className='text-center md:text-left'>Services</h3>
            <h3 className='text-center md:text-left'>Faq</h3>
            <h3 className='text-center md:text-left'>Contact</h3>
            <h3 className='text-center md:text-left'>Free Quote</h3>
          </div>
        </section>

        <section>
          {/* Contact us */}
          <h2 className='text-2xl mb-12 text-white text-center md:text-left'>Contact Us</h2>

          <div className='flex flex-col gap-4 text-sm text-white mb-8'>
            <h3 className='text-center md:text-left'>Ricardo Margain 444</h3>
            <h3 className='text-center md:text-left'>Call +52 81 1234 5678</h3>
            <h3 className='text-center md:text-left'>Email: info@challenge.com</h3>
          </div>

          <div className='border-4 border-white rounded-md py-4 px-8 flex items-center gap-2 max-w-[240px] mx-auto md:mx-0'>
            <div>
              <ImWhatsapp color='white' size={36} />
            </div>
            <p className='text-2xl text-white font-bold'>WhatsApp</p>
          </div>
        </section>

      </div>
    </footer>
  )
}
