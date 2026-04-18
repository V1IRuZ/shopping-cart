import { useMemo } from "react";

const useCategories = (data) => {
  return useMemo(() => {
    const categories = { sale: [] };

    data?.forEach((item) => {
      if (item.isDiscount) {
        categories.sale.push(item);
      }

      if (!categories[item.category]) {
        categories[item.category] = [];
      }

      categories[item.category].push(item);
    });

    return categories;
  }, [data]);
};

export { useCategories };
