import './cookies.jpg';
import './chips.jpg';
import './chocolate.jpg';
import './biscuits.jpg';
import './juice.jpg';
import './water-bottle.jpg';

export const initialState = {
    items: [
        {
            id: 1,
            productName: 'Cookies',
            productImage: 'cookies.jpg',
            quantity: 10
        }
        // {
        //     id: 2,
        //     productName: 'Chips',
        //     productImage: 'chips.jpg',
        //     quantity: 10
        // },
        // {
        //     id: 3,
        //     productName: 'Chocolate',
        //     productImage: 'chocolate.jpg',
        //     quantity: 10
        // },
        // {
        //     id: 4,
        //     productName: 'Biscuits',
        //     productImage: 'biscuits.jpg' ,
        //     quantity: 10
        // },
        // {
        //     id: 5,
        //     productName: 'Juice',
        //     productImage: 'juice.jpg',
        //     quantity: 10
        // },
        // {
        //     id: 6,
        //     productName: 'Water Bottle',
        //     productImage: 'water-bottle.jpg',
        //     quantity: 10
        // }
    ]
  }
  
  export const products = (state = initialState, action) => {
    switch (action.type) {
      case 'updateQuantity':
        return {
            quantity: action.quantity
        }
      default:
        return state;
    }
  }
  
  export default products;
  
  
  