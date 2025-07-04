import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetCategories,
  cleanUpCategoriesRecords,
} from "@store/categoriesSlice/categoriesSlice";
import { useEffect } from "react";

function useCategories() {
  const dispatch = useAppDispatch();

  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    const promise = dispatch(actGetCategories());

    return () => {
      dispatch(cleanUpCategoriesRecords());
      promise.abort();
    };
  }, [dispatch]);

  return { loading, error, records };
}

export default useCategories;
