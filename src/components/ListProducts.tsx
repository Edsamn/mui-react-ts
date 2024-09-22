interface ListProductsProps {
  products: string[];
}

function ListProducts({ products }: ListProductsProps) {
  return (
    <div style={{ marginTop: '20px' }}>
      {products.map(item => (
        <h2 key={item}>Nome: {item}</h2>
      ))}
    </div>
  );
}

export default ListProducts;
