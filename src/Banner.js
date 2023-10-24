const Banner = (props) =>
{
  return (
    <h1 className='d-flex justify-content-center align-items-center shadow-sm p-5 bg-light text-primary mb-5 '>{props.bannerText}</h1>
  )
}

export default Banner;