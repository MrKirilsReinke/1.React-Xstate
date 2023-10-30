# TypeScript, React, and XState Traffic Light Controller

## Description

This project is a TypeScript, React, and XState implementation of a traffic light controller. It provides various traffic light machine configurations, including base configurations, conditional actions, delayed transitions, hierarchical structures, and parallel states. You can use these machines to simulate and control traffic lights in your applications.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)

## Installation

To get started with this project, you need to install the required dependencies and run it. Follow these steps:

1. Clone the repository to your local machine.

```bash
git clone <repository_url>
```

2. Navigate to the project directory.

```bash
cd <project_directory>
```

3. Install the project dependencies using npm.

```bash
npm install
```

4. Run the development server to start the application.

```bash
npm run dev
```

## Usage

To use the TypeScript, React, and XState traffic light controller in your project, follow these steps:

1. Import the traffic light machine you want to use from the machines directory.

```typescript
import trafficLightMachine from "./machines/trafficLightMachine"; // Replace with the specific machine you need
```

2. Initialize the machine with useMachine from the @xstate/react library.

```typescript
import { useMachine } from "@xstate/react";

const [current, send] = useMachine(trafficLightMachine, {
  devTools: true, // Add this for development tools support
});
```

You can now interact with the traffic light machine by using current to get the current state and send to send events and trigger state transitions.
For example, if you're using a machine with a "SWITCH_LIGHT" event, you can use send("SWITCH_LIGHT") to switch the traffic light state.

## Features

* Multiple traffic light machine configurations
* Conditional actions and state transitions
* Delayed state transitions
* Hierarchical state structure
* 2Parallel state handling

## Credits

This project is built with TypeScript, React, and XState, making use of their respective libraries and tools. Special thanks to the XState library for making state management and finite state machines more accessible in React applications.

## License

This project is open-source and is available under the [MIT License](LICENSE). You are free to use, modify, and distribute this project for any purpose.

## How to Contribute

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your feature or bug fix.

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them.

```bash
git add .
git commit -m "Added a new feature"
```

4. Push your changes to your forked repository.

```bash 
git push origin feature/your-feature-name
```

5. Create a Pull Request (PR) to the main repository, explaining your changes and improvements.
