export const intGenerator = (maxNumber = 100) => Math.floor(Math.random() * maxNumber);

export const gcd = (num1, num2) => {
  const iter = (a, b) => {
    if (b === 0) {
      return a;
    }
    return iter(b, a % b);
  };
  return num1 > num2 ? iter(num1, num2) : iter(num2, num1);
};
