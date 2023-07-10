import { createElement as h } from "react";

const createElement = globalThis?.React?.createElement ?? h;

export type Tags = {
  [K in keyof JSX.IntrinsicElements]: (
    p?:
      | {
          [K2 in keyof JSX.IntrinsicElements[K]]: JSX.IntrinsicElements[K][K2];
        }
      | undefined
  ) => (...children: React.ReactNode[]) => React.ReactNode;
};

export const tags = new Proxy<Tags>({} as any, {
  get(target, tag: string) {
    return (props: any = null) =>
      (...children: any[]) =>
        createElement(tag, props, ...children);
  },
});

export const createComponent =
  <T extends {}>(fn: React.FC<T>) =>
  (props?: T) =>
    createElement(fn, props);
