
export const GifItem = ({title,url,id}) => {
  // console.log({title})


  return (
    <div className="card">
      <img src={url} alt='Error al cargar la imagen' />
      <p>{title}</p>
    </div>
  )
}
