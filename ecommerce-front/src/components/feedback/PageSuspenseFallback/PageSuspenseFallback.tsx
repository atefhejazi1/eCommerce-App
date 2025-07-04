import LottieHandler from "../LottieHandler/LottieHandler";
import { Suspense } from "react";

function PageSuspenseFallback({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <LottieHandler type="loading" message="loading please wait ..." />
      }
    >
      {children}
    </Suspense>
  );
}

export default PageSuspenseFallback;
