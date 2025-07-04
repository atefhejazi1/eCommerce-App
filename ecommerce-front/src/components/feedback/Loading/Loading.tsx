import CartSkeleton from "@components/skeletons/CartSkeleton/CartSkeleton";
import CategorySkeleton from "@components/skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "@components/skeletons/ProductSkeleton/ProductSkeleton";
import type { TLoading } from "@types";

import LottieHandler from "../LottieHandler/LottieHandler";

const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
};

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
};

const Loading = ({
  status,
  error,
  children,
  type = "category",
}: LoadingProps) => {
  const Component = skeletonsTypes[type];

  if (status == "pending") {
    return <Component />;
  }

  if (status == "failed") {
    return (
      <p>
        {" "}
        <LottieHandler type="error" message={error as string} />
      </p>
    );
  }

  return <>{children}</>;
};

export default Loading;
