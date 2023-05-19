import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Ex pariatur aliqua non sit. Est cillum ipsum culpa adipisicing consequat exercitation ipsum do ex non incididunt qui laborum.
    </Header>
    <section className='contact'>
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <a href="mailto:monetizeme9592" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/link_messenger" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+961371557750" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact