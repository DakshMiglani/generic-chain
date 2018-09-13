export type Next = () => any;

export type MiddlewareResolver = (
  next: Next,
  context: any
) => any;

export const chain = (middlewares: MiddlewareResolver[]) => <
  Context = any
>(
  resolver: (context: Context) => any
) => (context: any) => {
  const newMiddlewares = [...middlewares];
  const next: Next = () => {
    const middleware = newMiddlewares.shift();
    if (middleware) {
      return middleware(next, context);
    }

    return resolver(context);
  };

  return next();
};
