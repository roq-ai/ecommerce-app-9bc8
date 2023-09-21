const mapping: Record<string, string> = {
  carts: 'cart',
  categories: 'category',
  companies: 'company',
  orders: 'order',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
