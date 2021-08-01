import Button from '@material-ui/core/Button'

import {CartItemType} from '../App'

import { Wrapper } from './Item.styles'


type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.brand} />
    <div>
    <h3>{item.title}</h3>
    <p>{item.brand}</p>
    <p>{item.description}</p>
    <h3>${ item.price}</h3>
    </div>
   <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
  </Wrapper>
)

export default Item;