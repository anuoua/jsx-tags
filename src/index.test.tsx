import { it, expect } from "vitest";
import { createComponent, tags } from ".";

const { div, h1, span } = tags;

const jsx = (
  <div className="a">
    <h1 className="b">hello</h1>
    <span className="c">world</span>
  </div>
);

const jsxTag = div({ className: "a" })(
  h1({ className: "b" })("hello"),
  span({
    className: "c",
  })("world")
);

it("jsx test", () => {
  expect(jsx).toMatchObject(jsxTag as any);
});

it("jsx tags component", () => {
  const App: React.FC<{ a: React.ReactNode }> = (p) => p.a;
  const App2 = createComponent(App);
  expect(<App a={<div></div>} />).toMatchObject(App2({ a: div()() }));
});
