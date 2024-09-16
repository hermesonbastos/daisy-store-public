import "./styles.css"

const ProductCard = () => {
  return <div className="catalogo-card">
      <div className="card card-side bg-base-100 shadow-xl">
          <figure>
              <img
              src=""
              alt="Movie" />
          </figure>
          <div className="card-body">
              <h2 className="card-title">Nome do Produto</h2>
              <p>preço</p>
              <div className="card-actions justify-end">
              <button className="btn btn-primary">Adicionar ao carrinho</button>
              </div>
          </div>
      </div>
  </div>
}

export default ProductCard