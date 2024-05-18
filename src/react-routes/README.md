## routes.jsx notes

### Cách sử dụng

Trong file có định nghĩa các routes dưới dạng "object" của trang web như sau:

```js
{
    path: "/",
    element: <Layout />, // Wrap routes with Layout for consistent structure
    children: [
      // Home route nested within Layout
      { path: "about", element: <About /> }, // About route nested within Layout
      { path: "converseall", element: <ConverseAll /> }, // ConverseAll route nested within Layout
    ],
},
```

Để định nghĩa thêm các route con của "/" (trong trường hợp này là trang chủ), ta thêm các object vào mảng `children` của object trên. Ví dụ, để thêm vào ví dụ trên trang tin tức và trang liên hệ, ta sẽ thêm như sau:

```js
{
    path: "/",
    element: <Layout />, // Wrap routes with Layout for consistent structure
    children: [
      // Home route nested within Layout
      { path: "about", element: <About /> }, // About route nested within Layout
      { path: "converseall", element: <ConverseAll /> }, // ConverseAll route nested within Layout
      { path: "news", element: <News /> }, // News route nested within Layout
      { path: "contact", element: <Contact /> }, // Contact route nested within Layout
    ],
},
```
---
