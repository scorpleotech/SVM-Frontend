// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HorizontalTimeline = () => {
//   const timelineData = [
//     {
//       year: "2012",
//       title:
//         "Recognized that EVs are the future and took a job at Tesla to learn it at the source.",
//       date: "December 10, 2012",
//     },
//     {
//       year: "2014",
//       title: "Prana’s concept began",
//       date: "June 10, 2014",
//     },
//     {
//       year: "2018",
//       title:
//         "Formalised SVM as a PVT Limited Company and started making Prana’s production version.",
//       date: "May 26, 2018",
//     },
//     {
//       year: "2018",
//       title: "Prototype testing",
//       date: "December 14, 2018",
//     },
//     {
//       year: "2019",
//       title: "Prana gets the thumbs up",
//       date: "January 4, 2019",
//     },
//     {
//       year: "2019",
//       title: "Prana unveiled",
//       date: "March 10, 2019",
//     },
//     {
//       year: "2019",
//       title: "Prana hits the road.",
//       date: "December 16, 2019",
//     },
//     {
//       year: "2020",
//       title: "Pre bookings started",
//       date: "January 10, 2020",
//     },
//     {
//       year: "2020",
//       title: "Dealership infrastructure development",
//       date: "June 10, 2020",
//     },
//     {
//       year: "2021",
//       title: "First batch of vehicle delivery",
//       date: "January 10, 2021",
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="cool_timeline_horizontal">
//       <Slider {...settings}>
//         {timelineData.map((item, index) => (
//           <div
//             key={index}
//             className={`year-${item.year} ${
//               index % 2 === 0 ? "even" : "odd"
//             } past-year`}
//           >
//             <a href={`#ctl-story-${index}`}>
//               <div className="ctl-story-year">
//                 <span className="rm_year">{` ${item.year}`}</span>
//               </div>
//               <div className="ctl-story-title">
//                 <p className="story_title">{item.title}</p>
//               </div>
//             </a>
//             <div id={`ctl-story-${index}`} className="ctl_hide">
//               <div className="ctl-popup-content">
//                 <h2>{item.title}</h2>
//                 <div className="story-posted-date">{item.date}</div>
//                 <div className="story-content"></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HorizontalTimeline;
