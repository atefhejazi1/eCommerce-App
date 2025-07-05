import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import useWishlist from "@hooks/useWishlist";

function Wishlist() {
  const { loading, error, records } = useWishlist();
  return (
    <>
      <Heading title={"Your Wishlist"} />

      <Loading status={loading} error={error} type="product">
        <GridList
          emptyMessage="Your Wishlist is Empty !!"
          records={records()}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
}

export default Wishlist;
