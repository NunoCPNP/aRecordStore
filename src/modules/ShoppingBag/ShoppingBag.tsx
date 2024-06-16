import { useShoppingBag } from '@/hooks'

export const ShoppingBag = () => {
  const { items } = useShoppingBag()

  console.log('->', items)

  return <div>shopping bag</div>
}
