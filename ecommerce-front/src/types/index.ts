import { type TProduct } from "./product.types";
import { type TLoading } from "./shared.types";
import { type TCategory } from "./category.types";
import { type TOrderItem } from "./order.types";
import { isString } from "./guards";

// 1. تصدير الأنواع كأنواع بشكل منفصل (هنا الحل للخطأ)
export type { TProduct };
export type { TLoading };
export type { TCategory };
export type { TOrderItem };

// 2. تصدير الدالة كقيمة عادية
export { isString };