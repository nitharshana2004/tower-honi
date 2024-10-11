# Tower of Hanoi Visualization

This project is a dynamic and interactive visualization of the Tower of Hanoi puzzle using HTML, CSS, and JavaScript. Users can input the number of disks and see the puzzle being solved step by step.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [How to Run](#how-to-run)
- [Game Rules](#game-rules)
- [Technologies](#technologies)
- [Future Improvements](#future-improvements)
- [License](#license)

## Overview

The **Tower of Hanoi** is a classic puzzle where you must move a set of disks from one peg to another, with the help of an auxiliary peg. The puzzle follows specific rules regarding the movement of disks.

This project allows users to visualize how the Tower of Hanoi puzzle is solved, with a dynamic interface that updates after every move.

## Features

- Set the number of disks dynamically using an input field.
- Visualize the step-by-step solution of the puzzle.
- Fully responsive and styled using CSS.
- Recursive algorithm implemented in JavaScript to solve the puzzle.
  
## How to Run

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/tower-of-hanoi-visualization.git
    ```

2. Navigate to the project directory:
    ```bash
    cd tower-of-hanoi-visualization
    ```

3. Open the `index.html` file in any web browser to start the visualization.

4. Enter the number of disks you want to play with and click "Make Move" to begin the Tower of Hanoi puzzle visualization.

## Game Rules

1. You can only move one disk at a time.
2. A disk can only be placed on top of a larger disk or an empty peg.
3. The goal is to move all the disks from the first peg to the last peg.

## Technologies

- **HTML**: For structuring the game interface.
- **CSS**: For styling the pegs, disks, and background.
- **JavaScript**: For implementing the recursive Tower of Hanoi algorithm and dynamic DOM manipulation.

## Future Improvements

- Add animations for smoother disk movement.
- Provide a UI slider for adjusting the number of disks.
- Add a reset button to restart the game.
- Include move counter and optimal move suggestions.
  
## License

This project is licensed under the [MIT License](LICENSE).

