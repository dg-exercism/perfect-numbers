//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if (number < 1) {
    throw new Error('Classification is only possible for natural numbers.')
  } else {
    let factors = [];
    for (let i = 0; i < number; i++) {
      if (number % i === 0) {
        factors.push(i)
      }
    }
    let aliquot = factors.reduce((sum, factor) => sum + factor, 0);
    return aliquot === number ? 'perfect' : aliquot > number ? 'abundant' : 'deficient'
  }
};
