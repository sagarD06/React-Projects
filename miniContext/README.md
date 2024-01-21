# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Why Context

Since we had a problem of using props from App(parent) to any children which is not directly involved or called inside App, we used to pass prop to subsiquent childre/component tree so that we can get access to it.

Since these props data as not at all used in some components we still use to handle it cause it was important in one of the child element/component.

to solve this issue there was a concept introduced called context:
- Now here we store the required state variables directly from App into a global file and store inside it.
- Once stored we can get access to it by any component by using useontext hook available in React.
- To use the above goto src/Context/UserContext and follow the steps.