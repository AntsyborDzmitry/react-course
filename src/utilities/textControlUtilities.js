export const colors = ["white", "blue", "green", "yellow", "red"];

export function calculateCounterState(state, counterLimit) {
    let {textDisplay, counter} = state;
      if(!textDisplay){
          return counter;
      }
      return counter < counterLimit ? counter + 1 : 0;
}
