export const SumArray = (myArray: number[]): number => {
  let Count = 0;

  if (myArray.length > 1) {
    for (let count = 0; count <= myArray.length - 2; count++) {
      Count = Count + myArray[count];
    }
  } else {
    Count = myArray[0];
  }

  return Count;
};
