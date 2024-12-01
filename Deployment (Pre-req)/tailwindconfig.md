# Setting Up Tailwind CSS in a React Project

Follow these steps to integrate Tailwind CSS into your React project.

## 1. Create a New React Project

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 2. Configure tailwind.config.js

```

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


```

## 3. Add Tailwind Directives to CSS

In the src/index.css file, add the following Tailwind directives:

css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
