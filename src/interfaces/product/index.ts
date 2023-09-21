import { CartInterface } from 'interfaces/cart';
import { OrderInterface } from 'interfaces/order';
import { CompanyInterface } from 'interfaces/company';
import { CategoryInterface } from 'interfaces/category';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  company_id: string;
  category_id: string;
  created_at?: any;
  updated_at?: any;
  cart?: CartInterface[];
  order?: OrderInterface[];
  company?: CompanyInterface;
  category?: CategoryInterface;
  _count?: {
    cart?: number;
    order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
  category_id?: string;
}
