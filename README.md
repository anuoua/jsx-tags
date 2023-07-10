# jsx-tags

A tool for using react without jsx

## Install

```shell
npm install jsx-tags
```

## Usage

```javascript
import ReactDOM from "react-dom/client";
import { tags, createComponent } from "jsx-tags";

const { div, h1, span } = tags;

const App = createComponent(() => {
  // prettier-ignore
  return (
    div({ className: "a" })(
      h1()("hello"),
      span()("world")
    )
  );
});

ReactDOM.createRoot(document.getElementById("root")!).render(App());
```

## License

MIT anuoua
