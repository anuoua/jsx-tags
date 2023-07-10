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

Or use it in browser directly example

```html
<html>
  <head>
    <title>jsx-tags example</title>

    <!-- React and jsx-tags scripts -->

    <script
      type="text/javascript"
      src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"
    ></script>
    <script
      type="text/javascript"
      src="https://www.unpkg.com/jsx-tags@0.0.5/dist/index.global.js"
    ></script>
  </head>

  <body>
    <div id="app"></div>
    <script>
      const { useState, useEffect } = React;
      const { tags, createComponent } = JSXTags;
      const { div, span } = JSXTags.tags;

      const App = createComponent(() => {
        // prettier-ignore
        return (
          div({ className: "a" })(
            h1()("hello"),
            span()("world")
          )
        );
      });

      ReactDOM.createRoot(document.querySelector("#app")).render(App());
    </script>
  </body>
</html>
```

## License

MIT anuoua
