/* eslint-disable jsx-a11y/img-redundant-alt */
import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfJerkingOff</h4>
          <h1>Join The BigDicks Of The Fitness World</h1>
          <p>
            Ad et proident nulla sunt veniam reprehenderit reprehenderit 
            cupidatat ullamco non cupidatat sunt sint consectetur.
          </p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <img src={Image} alt="Main Header Image" className="header__image"/>
        </div>
      </div>
    </header>
  )
}

export default MainHeader