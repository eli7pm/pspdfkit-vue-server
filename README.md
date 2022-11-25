## PSPDFKit for Web Server-backed Example – Vue.js

### Prerequisites

- [Node.js](http://nodejs.org/)
- PSPDFKit for Web (get your free trial [here](https://pspdfkit.com/try/))

### Getting Started

1. Clone the repo:

```bash
git clone https://github.com/eli7pm/pspdfkit-vue-server
cd pspdfkit-vue-server
```

2. Install the project dependencies with `npm`:

```bash
npm install
```

### Vue Component

The Vue component which implements the PSPDFKit for Web integration is included at `src/App/Components/App.vue` with the rest of the example.

In order to make the PSPDFKit for Web's library available for building, we have to copy the `pspdfkit-lib/` directory from `node_modules/pspdfkit/dist/` into the `public/js/` directory. This is done in the `package.json` script `verify-installation` which is executed by `serve`.

### Running the Example

We are ready to launch the app! 🎉

```bash
npm run dev
```

You can now open http://localhost:3000 in your browser and enjoy!
