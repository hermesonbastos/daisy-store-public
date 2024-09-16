import Pagination from '../../Pagination';
import ProductCard from '../../ProductCard/index';
import './styles.css';

const products = [{}, {}, {}, {}, {}, {}, {}, {}]

const Catalogo = () => {
  return <div className='catalogo'>
    Catalogo
      <div className='catalog-container'>
        <div className='catalog-card'>
          {products.map((product)=>(
            <ProductCard nome="Calça" price="R$ 190,00" button="Adicionar Produto" product={product}/>
          ))}
        </div>
        <div className='pagination'>
          <Pagination/>
        </div>
      </div>
  </div>
}

export default Catalogo;