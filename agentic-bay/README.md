# saab-prototype

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, how to run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Next.js Basics for Contributors

### 1. General

at first, please dont feel obligated to keep any of the current Designs or Implementations, they were just vibecoded in a hurry, some of the Nav-Buttons and Links dont even make sense.

### 2. Learning Next.js

There is a lot of stuff in Next.js which is different than normal html or plain React. For example there are Default components for images, Links, forms, etc. which handle performance and SEO (sometimes even securtity) automaticly.

if you are new to Next.js, dont be afraid to take a look at the [Next.js Documentation](https://nextjs.org/docs), its quite good, but you can also just ask  ai or me about something you want to know.

In the following i will show some basics you will most definatly need ->

### 3. Creating a New Path (Routing)

This project uses the **Next.js App Router**. To create a new route (URL path), you need to create a folder structure inside the `app/` directory.

- **URL**: `/about`
- **File Path**: `app/about/page.tsx`

**Example:**
To create a page at `localhost:3000/dashboard/settings`:
1. Create a folder `dashboard` inside `app/`.
2. Create a folder `settings` inside `app/dashboard/`.
3. Create a `page.tsx` file inside `app/dashboard/settings/`.

### 4. Component Organization

- **Shared Components**: Reusable components (buttons, navbars, cards) should be placed in the `components/` directory.
- **Page-Specific Components**: If a component is only used on one specific page, you can create a `_components` folder inside that page's directory (e.g., `app/dashboard/_components/`) or just place it alongside the `page.tsx` if it's small.

### 5. Passing Props to Components

Props are arguments passed into React components. They allow you to make components dynamic.

**Parent Component (`page.tsx`):**
```tsx
import MyCard from '@/components/MyCard';

export default function Page() {
  return (
    <div>
      <MyCard title="Welcome" description="This is a card" />
    </div>
  );
}
```

**Child Component (`components/MyCard.tsx`):**
```tsx
interface MyCardProps {
  title: string;
  description: string;
}

export default function MyCard({ title, description }: MyCardProps) {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
```

### 6. Server vs. Client Components

- **Server Components (Default)**: All components in the `app` directory are Server Components by default. They are rendered on the server. Use them for fetching data or accessing backend resources.
- **Client Components**: If you need interactivity (onClick, useState, useEffect), you must add `'use client'` at the very top of your file.

```tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```
