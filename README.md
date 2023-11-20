# Integrate Quest Widget
This document serves as a guide to integrating Bandit Quest into a React project utilizing Bandit Quest Widget.

Bandit's widget simplifies the process of incorporating Bandit Quest into your react app.

## Demo
A working demo of the complete integration can be found here: https://quest-widget-demo.vercel.app/

## Prerequisites
React project set up
Bandit API key

### Steps
1. Install the Quest Domain Widget
Install the @bandit-network/quest-widget package:

npm install @bandit-network/quest-widget

2. Import and Initialize the widget
In your React project, import the QuestWidget component and initialize it within your component, passing your Bandit API key:

```ts
import { QuestWidget } from "@bandit-network/quest-widget";

export default function Home() {

  return (
     <QuestWidget
        apiKey="YOUR_BANDIT_API_KEY"
        collectionId="COLLECTION_ID"
        cluster="devnet"
        dialog={true}
      />
  );
}
```

3. Widget Configuration
Configure the widget by setting the following props:

- `apiKey`: Your API key.
- `collectionId`: The ID of your collection.
- `cluster`: The network cluster (e.g., "devnet" or "mainnet").
- `dialog`: Set to true for modal dialog display. Use local state with isOpen & onClose props for more control.

That's it! You've integrated the Bandit Quest Widget into your React project. For any queries or assistance, feel free to reach out.
