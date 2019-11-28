# Game Design Document - GoalClicker

## Overview
- Incremental style game: 
[Wikipedia](https://en.wikipedia.org/wiki/Incremental_game)

- The theme will be a post-apocalyptic wasteland, caused by the sum of all humanity not following through with their goals.
- Art and Sounds will be open sourced
## Gameplay
- Goal Juice
    - Player clicks a button to generate 'goal juice'. 
    - This juice is used to power the 'goal generator'
- Goal Generator
    - The 'goal generator' powers humanity to resume following their goals
    - While running, the generator drains 'goal juice' at a specified rate
        - Something reasonable, but challenging
    - The goal generator must be running for humanity to make progress
- Humanities Progress
    - Tracked in 'real time'
        - 1 second = 1 day, or something
    - Productivity increases as long as the 'goal generator' is running
    - When milestones are reached, it unlocks new abilites, but causes the generator to consume more 'goal juice'
## Goals
- Help humanity be productive again
- Have the highest score at the end of the game

## Winning
A players wins the the game if:
- They generate enough 'Productivity' to fund humans to another planet

What happens?
- The score gets added to the score board
- The user is told they saved humanity!

## Losing
A player loses the game if:
- The timer counts down to 0

What happens?
- The score gets added to the score board
- The user is told they did not save humanity
