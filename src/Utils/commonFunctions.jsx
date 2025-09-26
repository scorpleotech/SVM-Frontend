const characters = "0123456789";

export const createDecimalOdometer = (
  number,
  variants,
  classes,
  cycleSpin,
  motion
) => {
  // Ensure the provided number is a valid float
  const targetNumber = parseFloat(number);

  // Combine integer and decimal parts into an array for the odometer effect
  const odometerArray = [];

  // Generate odometer effect for the integer part (0)
  const integerString = "00";
  integerString.split("").forEach((letter, index) => {
    const letters = generateString((index + 2) * 3) + letter;
    odometerArray.push(letters);
  });

  // Add a separator between the integer and decimal parts
  odometerArray.push(".");

  // Generate odometer effect for the decimal part
  const decimalString = targetNumber.toFixed(1).split(".")[1];
  decimalString.split("").forEach((letter, index) => {
    const letters = generateString((index + 2) * 3) + letter;
    odometerArray.push(letters);
  });

  // Map each character to a motion.div with the appropriate animation
  return odometerArray.map((letter, index) => (
    <motion.div
      key={index}
      variants={variants}
      initial="initial"
      animate={cycleSpin}
      className={`${classes.odometerItem} ${`div${index}`}`}
      transition={{
        duration: 1, // Total duration of 1 second
      }}
    >
      {letter}
    </motion.div>
  ));
};

export const createOdometer = (
  number,
  variants,
  classes,
  cycleSpin,
  motion
) => {
  const numberString = number.toString().padStart(2, "0"); // Ensure at least two digits
  const odometerArray = [];

  numberString.split("").forEach((letter, index) => {
    const letters = generateString((index + 2) * 3) + letter;
    odometerArray.push(letters);
  });

  return odometerArray.map((letter, index) => {
    return (
      <motion.div
        key={index}
        variants={variants}
        initial="initial"
        animate={cycleSpin}
        className={`${classes.odometerItem} ${`div${index}`}`}
        transition={{
          duration: 1,
        }}
      >
        {letter}
      </motion.div>
    );
  });
};

export const Numeric = (event) => {
  var x = event.charCode || event.keyCode;
  if (x > 47 && x < 58) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
};
export const Alphabetic = (event) => {
  var x = event.charCode || event.keyCode;
  if (
    (x > 96 && x < 123) ||
    (x > 64 && x < 91) ||
    x === 32 ||
    x === 46 || // dot "."
    x === 45
  ) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
};

export const generateString = (length) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const generateCaptcha = (setState, setNumber1, setNumber2) => {
  const randomNr1 = Math.floor(Math.random() * 10);
  const randomNr2 = Math.floor(Math.random() * 10);

  setState(randomNr1 + randomNr2);
  setNumber1(randomNr1);
  setNumber2(randomNr2);
};

// utilities.js or any other utility file
export function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

