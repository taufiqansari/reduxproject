import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_Product = [
  {
    id: "p1",
    price: 6,
    title: "My first Book",
    decription: "The frist book i ever wrote",
  },
  {
    id: "p2",
    price: 10,
    title: "My second Book",
    decription: "The second book i ever wrote",
  },
  {
    id: "p3",
    price: 15,
    title: "My third Book",
    decription: "The third book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Product.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.decription}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
