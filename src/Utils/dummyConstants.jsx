import DemoredBike from "../Assets/Images/demoDrive1.png";
import DemoGreeBike from "../Assets/Images/demoDrive2.png";

export const avatarArray = [
  {
    topic: "Super Helpful !!!!",
    content:
      "There’s no other program that walks you through exactly what you need to know to start an online store fast,",
    name: "Anna James",
    designation: "Web Designer",
    gender: "female",
  },
  {
    topic: "Impressive Content !!!",
    content:
      "This content is impressive and covers a wide range of topics. It's a must-read for anyone in the field.",
    name: "John Smith",
    designation: "Digital Marketer",
    gender: "male",
  },
  {
    topic: "Great Insights !!!",
    content:
      "I gained great insights into the industry. The program provides practical knowledge for success.",
    name: "Emily Johnson",
    designation: "Ecommerce Enthusiast",
    gender: "female",
  },
  {
    topic: "Fantastic Resource !!!",
    content:
      "A fantastic resource for anyone looking to enhance their skills and succeed in the online business world.",
    name: "Michael Brown",
    designation: "Business Owner",
    gender: "male",
  },
  {
    topic: "Informative Read !!!",
    content:
      "The information provided is valuable and well-presented. I highly recommend this program.",
    name: "Sophia Clark",
    designation: "Content Creator",
    gender: "female",
  },
  {
    topic: "Insightful Guide !!!",
    content:
      "An insightful guide that helped me navigate the complexities of starting an online store successfully.",
    name: "Daniel White",
    designation: "Entrepreneur",
    gender: "male",
  },
  {
    topic: "Helpful Content !!!",
    content:
      "The content is helpful and easy to understand, making it a perfect resource for beginners.",
    name: "Olivia Taylor",
    designation: "Marketing Specialist",
    gender: "female",
  },
  {
    topic: "Valuable Information !!!",
    content:
      "Valuable information presented in a clear and concise manner. I found it extremely beneficial.",
    name: "Matthew Miller",
    designation: "Tech Enthusiast",
    gender: "male",
  },
  {
    topic: "Practical Tips !!!",
    content:
      "Practical tips and real-world advice. I applied the knowledge gained to enhance my online business.",
    name: "Emma Davis",
    designation: "Small Business Owner",
    gender: "female",
  },
  {
    topic: "Excellent Program !!!",
    content:
      "An excellent program that covers all aspects of starting an online store. Highly recommended!",
    name: "Christopher Turner",
    designation: "Ecommerce Consultant",
    gender: "male",
  },
];

export const DemoPageImageArray = [
  {
    image: DemoGreeBike,
    Name: "Lite",
    value: "lite",
  },
  {
    image: DemoredBike,
    Name: "Grand",
    value: "grand",
  },
];

export const CategorySliderResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 850 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
  },
};

export const eventsNewsSliderResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1180 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1180, min: 450 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 450, min: 0 },
    items: 1,
  },
};

export const responsiveSlider = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 850 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
  },
};

export const bikeDetails = [
  {
    manufacturer: "SVM",
    model: "Prana (Grand)",
    vehicleClassType: "Premium/Sports Performance",
    topSpeedKMH: 123,
    accelerationSec: "<3.8",
    releaseDate: "Q121",
    acquisition: {
      cost: 255159.65,
      gst: 12757.98,
      totalCost: 267917.64,
      financing: {
        totalCost: 267917.64,
        downPayment: 53583.53,
        residual: 0,
        amountToFinance: 214334.11,
        annualPMT: 92320.45,
      },
    },
    operatingCosts: {
      rangeOrLitres: 126.0,
      chargingTimeToFull: "4 3/4",
      kWhOrLpa: 904.76,
      fuelPa: 6242.86,
      maintenance: 3000.0,
      totalTCOpA: 101563.31,
      totalTCO3Years: 304689.92,
    },
  },
  {
    manufacturer: "SVM",
    model: "Prana (Elite)",
    vehicleClassType: "Premium/Sports Performance",
    topSpeedKMH: 123,
    accelerationSec: "<3.8",
    releaseDate: "H223",
    acquisition: {
      cost: 317724.0,
      gst: 15886.2,
      totalCost: 333610.2,
      financing: {
        totalCost: 333610.2,
        downPayment: 66722.04,
        residual: 0,
        amountToFinance: 266888.16,
        annualPMT: 114957.13,
      },
    },
    operatingCosts: {
      rangeOrLitres: 225.0,
      chargingTimeToFull: "6.00",
      kWhOrLpa: 640.0,
      fuelPa: 4416.0,
      maintenance: 3000.0,
      totalTCOpA: 122373.13,
      totalTCO3Years: 367119.4,
    },
  },
  {
    manufacturer: "Yamaha",
    model: "R15",
    vehicleClassType: "Premium/Sports",
    topSpeedKMH: 135,
    accelerationSec: "4.3",
    releaseDate: ">10 YRS",
    acquisition: {
      cost: 124749.0,
      gst: 34929.72,
      totalCost: 159678.72,
      financing: {
        totalCost: 159678.72,
        downPayment: 31935.74,
        residual: 0,
        amountToFinance: 127742.98,
        annualPMT: 55022.92,
      },
    },
    operatingCosts: {
      rangeOrLitres: 32.5,
      chargingTimeToFull: "0.00",
      kWhOrLpa: 738.46,
      fuelPa: 76135.38,
      maintenance: 5000.0,
      totalTCOpA: 136158.31,
      totalTCO3Years: 408474.92,
    },
  },
  {
    manufacturer: "KTM",
    model: "RC125",
    vehicleClassType: "Sports",
    topSpeedKMH: 120,
    accelerationSec: "4.3",
    releaseDate: ">10 YRS",
    acquisition: {
      cost: 133049.0,
      gst: 37253.72,
      totalCost: 170302.72,
      financing: {
        totalCost: 170302.72,
        downPayment: 34060.54,
        residual: 0,
        amountToFinance: 136242.18,
        annualPMT: 58683.79,
      },
    },
    operatingCosts: {
      rangeOrLitres: 40.0,
      chargingTimeToFull: "0.00",
      kWhOrLpa: 600.0,
      fuelPa: 61860.0,
      maintenance: 5000.0,
      totalTCOpA: 125543.79,
      totalTCO3Years: 376631.38,
    },
  },
  {
    manufacturer: "Royal Enfield",
    model: "Classic 350",
    vehicleClassType: "Premium",
    topSpeedKMH: 130,
    accelerationSec: "6.1",
    releaseDate: ">10 YRS",
    acquisition: {
      cost: 186252.0,
      gst: 52150.56,
      totalCost: 238402.56,
      financing: {
        totalCost: 238402.56,
        downPayment: 47680.51,
        residual: 0,
        amountToFinance: 190722.05,
        annualPMT: 82149.99,
      },
    },
    operatingCosts: {
      rangeOrLitres: 32.5,
      chargingTimeToFull: "0.00",
      kWhOrLpa: 738.46,
      fuelPa: 76135.38,
      maintenance: 5000.0,
      totalTCOpA: 163285.37,
      totalTCO3Years: 489856.12,
    },
  },
  {
    manufacturer: "Tork",
    model: "Kratos R",
    vehicleClassType: "Premium",
    topSpeedKMH: 105,
    accelerationSec: "5.3",
    releaseDate: "Q222",
    acquisition: {
      cost: 229744.0,
      gst: 11487.2,
      totalCost: 241231.2,
      financing: {
        totalCost: 241231.2,
        downPayment: 48246.24,
        residual: 0,
        amountToFinance: 192984.96,
        annualPMT: 83124.7,
      },
    },
    operatingCosts: {
      rangeOrLitres: 120.0,
      chargingTimeToFull: "4 1/2",
      kWhOrLpa: 900.0,
      fuelPa: 6210.0,
      maintenance: 3000.0,
      totalTCOpA: 92334.7,
      totalTCO3Years: 277004.09,
    },
  },
  {
    manufacturer: "Ultraviolette",
    model: "F-77",
    vehicleClassType: "Premium/Sports Performance",
    topSpeedKMH: 151,
    accelerationSec: "2.9",
    releaseDate: "Q422",
    acquisition: {
      cost: 553195.0,
      gst: 27659.75,
      totalCost: 580854.75,
      financing: {
        totalCost: 580854.75,
        downPayment: 116170.95,
        residual: 0,
        amountToFinance: 464683.8,
        annualPMT: 200153.94,
      },
    },
    operatingCosts: {
      rangeOrLitres: 135.0,
      chargingTimeToFull: "5.00",
      kWhOrLpa: 888.89,
      fuelPa: 6133.33,
      maintenance: 3000.0,
      totalTCOpA: 209287.27,
      totalTCO3Years: 627861.82,
    },
  },
  {
    manufacturer: "Revolt",
    model: "400",
    vehicleClassType: "Commuter",
    topSpeedKMH: 80,
    accelerationSec: ">9",
    releaseDate: "Q419",
    acquisition: {
      cost: 159609.0,
      gst: 7980.45,
      totalCost: 167589.45,
      financing: {
        totalCost: 167589.45,
        downPayment: 33517.89,
        residual: 0,
        amountToFinance: 134071.56,
        annualPMT: 57748.84,
      },
    },
    operatingCosts: {
      rangeOrLitres: 100.0,
      chargingTimeToFull: "4 1/2",
      kWhOrLpa: 1080.0,
      fuelPa: 7452.0,
      maintenance: 3000.0,
      totalTCOpA: 68200.84,
      totalTCO3Years: 204602.52,
    },
  },
];

export const GetDataFromBikes = async (
  svmBike,
  otherBike,
  distanceTravelDaily
) => {
  const kilometers = distanceTravelDaily ? distanceTravelDaily : 15;
  const ToalKilometer = kilometers * 300 * 5;
  const montlyKilometer = ToalKilometer / 5;
  const array = await [0, 1, 2, 3, 4, 5].map((x) => montlyKilometer * x);

  const svmBikeRangePrice = array.map((x) => {
    console.log(x, svmBike.operatingCosts.rangeOrLitres);
    const range =
      (x / svmBike.operatingCosts.range) *
      6.9 *
      parseInt(svmBike.battery_capacity);
    return Math.round(range);
  });

  const otherBikeRangePrice = array.map((x) => {
    console.log(x, otherBike.operatingCosts.range);
    const value = otherBike.vehicle === "ICE" ? 103.1 : 6.9;
    const range = (x / otherBike.operatingCosts.range) * value;
    return Math.round(range);
  });

  console.log(array, svmBikeRangePrice, otherBikeRangePrice);

  const optionData = {
    series: [
      {
        name: "Other Bikes",
        data: otherBikeRangePrice,
        color: "#BA9BFF",
      },
      {
        name: "SVM Bikes",
        data: svmBikeRangePrice,
        color: "#FFC700",
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
          tools: {
            download: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      // title: {
      //   text: "Cost per Kilometer",
      //   align: "left",
      // },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: array,
        title: {
          text: "Distance in Kms",
        },
      },
      yaxis: {
        tickAmount: 4, // Specify the number of ticks you want on the y-axis
      },
      legend: {
        show: false, // Hide the legend
      },
    },
  };
  return optionData;
};

export const getBarDataFromBikes = async (
  svmBike,
  otherBike,
  distanceTravelDaily
) => {
  const array = [1, 2, 3];

  const svmBikeRangePrice = array.map((x) => {
    console.log(x, svmBike.operatingCosts.rangeOrLitres);
    const range = x * svmBike.operatingCosts.maintenance;
    return Math.round(range);
  });

  const otherBikeRangePrice = array.map((x) => {
    console.log(x, otherBike.operatingCosts.range);
    const range = x * otherBike.operatingCosts.maintenance;
    return Math.round(range);
  });

  console.log(array, svmBikeRangePrice, otherBikeRangePrice);

  const optionData = {
    series: [
      {
        name: "SVM Bikes",
        data: svmBikeRangePrice,
        color: "#FFC700",
      },
      {
        name: "Other Bikes",
        data: otherBikeRangePrice,
        color: "#BA9BFF",
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "bar",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
          tools: {
            download: false,
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      // title: {
      //   text: "Cost per Kilometer",
      //   align: "left",
      // },
      // grid: {
      //   row: {
      //     colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      //     opacity: 0.5,
      //   },
      // },
      xaxis: {
        categories: array,
        title: {
          text: "Years in Numbers",
        },
      },
      yaxis: {
        tickAmount: 4, // Specify the number of ticks you want on the y-axis
      },

      fill: {
        opacity: 1,
      },

      legend: {
        show: false, // Hide the legend
      },
    },
  };
  return optionData;
};
