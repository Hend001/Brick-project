import AddToCart from './AddToCart'
const ProductCard = ({ id, title, desc, price, getCartGoing, updateTotal }) => {
    const decimalPrice = (price / 100).toFixed(2);
    return (
        <div className="productCard">
            <div className="imgAndDesc">
                <div className="imgHolder">
                </div>
                <div className='descBox'>
                    <p>{desc}</p>
                </div>
                <div className="priceHolder">
                    <AddToCart id={id} getCartGoing={getCartGoing} updateTotal={updateTotal} price={price} />
                </div>
            </div>
            <div className='bottomCard'>
                <p>{title}</p>
                <p>Price: {decimalPrice}€</p>
            </div>
        </div>
    )
}
export default ProductCard;
