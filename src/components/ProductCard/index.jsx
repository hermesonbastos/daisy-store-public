import "./styles.css"

const ProductCard = ({nome, price, button, product}) => {
  return <div className="catalogo-card">
      <div className="card card-side bg-base-100 shadow-xl">
          <figure>
              <img
              src="/src/assets/blusa.jpeg"
              alt="" />
          </figure>
          <div className="card-body">
              <h2 className="card-title">{nome}</h2>
              <p>{price}</p>
              <div className="card-actions justify-end">
              <button className="btn btn-primary">{button}</button>
              </div>
          </div>
      </div>
  </div>
}

export default ProductCard