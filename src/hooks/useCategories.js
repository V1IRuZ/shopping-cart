import { useMemo } from "react";

const useCategories = (data) => {
  useMemo(() => {
    const categories = [];

    data?.forEach((item) => {
      if (!categories[item.category]) {
        categories[item.category] = [];
      }

      categories[item.category].push(item);
    });

    return categories;
  }, [data]);
};

export { useCategories };
