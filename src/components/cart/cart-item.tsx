import { Form, useSubmit } from 'react-router-dom'
import type { CartItemType } from '../../models/cart'

type CartItemProps = {
  item: CartItemType
}
export function CartItem({ item }: CartItemProps) {
  const submit = useSubmit()
  return (
    <div style={{ display: 'flex' }}>
      <figure>
        <img src={item.product.imageObjects[0].small} alt={item.product.name} />
      </figure>
      <div>
        <p>{item.product.name}</p>
        <small style={{ color: 'gray' }}>Cod {item.product.sku}</small>
        <Form
          method="post"
          onChange={(event) => {
            submit(event.currentTarget)
          }}
        >
          <select name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </Form>
      </div>
    </div>
  )
}