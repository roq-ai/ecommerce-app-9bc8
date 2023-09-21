import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  total_price: yup.number().integer().required(),
  order_date: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
