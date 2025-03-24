# Tic Tac Toe Game

This is a simple Tic Tac Toe game built with React.

## Features

-   Play Tic Tac Toe against another player.
-   Displays the current player's turn.
-   Detects and announces the winner.
-   Provides a "Play Again" button to reset the game.

## Technologies Used

-   React

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```

5.  **Open your browser and navigate to `http://localhost:3000` to play the game.**

## Project Structure

-   `src/`: Contains the React application source code.
    -   `components/`: Contains the React components.
        -   `Square.js`: Represents a single square on the Tic Tac Toe board.
        -   `Board.js`: Represents the Tic Tac Toe board and game logic.
    -   `index.js`: The entry point of the React application.

## Usage

-   Click on a square to place your mark (X or O).
-   The game will automatically detect a winner or a draw.
-   Click the "Play Again" button to start a new game.

## Example

```jsx
// Example from Square.js
<div
    onClick={props.onClick}
    className="w-[50%] h-30 flex items-center justify-center border-1 border-white"
>
    <h1 className="text-white font-bold">{props.value}</h1>
</div>

//Example from Board.js
<button className='bg-blue-500 p-3 m-2 rounded-md font-xl font-bold' onClick={handleReset}>Play Again</button>
