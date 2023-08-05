import { Image } from '@chakra-ui/react'
import productIcon from 'assets/icons/product.svg'
interface ProductCardProps {}

const ProductCard: React.FunctionComponent<ProductCardProps> = () => {
  return <Image src={productIcon} />
}

export default ProductCard
