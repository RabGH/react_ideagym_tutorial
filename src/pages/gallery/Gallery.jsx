/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Occaecat Lorem exercitation culpa duis laborum veniam. Deserunt anim magna pariatur magna cillum id sint labore irure dolor magna duis ut.
      </Header>
      <section className="gallery">
        <div className='container gallery__container'>
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery