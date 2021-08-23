import React from 'react'

class Cart extends React.Component {
    render() {
      const {cartItems} = this.props
        return (
          <div className="cart">
            <h2>سبد خرید</h2>
            {
              cartItems.length === 0 ? "سبد خرید خالی است" :
                <div className="my-3">
                  تعداد محصولات سبد خرید: {cartItems.length}
                </div>
            }
            {
              cartItems.length > 0 &&
              <div>
                <ul className="list-unstyled">
                  {cartItems.map(item => 
                    <li key={item.id} className="my-1">
                      <span className="fs-4 fw-bold mx-1">{item.title}</span>
                      <span>{item.count}</span>
                      <span>{item.count*item.price}</span>
                      <button 
                        className="btn btn-light mx-1"
                        onClick={(e) => this.props.handleRemove(e, item)}>
                        حذف محصول
                      </button>
                    </li>
                  )}
                </ul>
                <p>
                  مجموع: {cartItems.reduce((a, b) => a + b.price * b.count, 0)} تومان
                </p>
              </div>
            }
          </div>
        )
      }
}

export default Cart