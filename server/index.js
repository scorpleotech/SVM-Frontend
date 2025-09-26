const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 5050;
const axios = require("axios");

async function handleMeta(my_url) {
  console.log("my url =",my_url);
  let result;
  if (my_url) {
    switch (my_url) {
      case "/about-us":
        return (result = {
          meta_title: "About Srivaru Motors Private Limited",
          meta_desc:
            "SVM is dedicated to designing and manufacturing premium electric motorbikes in India. Click here to know more.",
        });
        break;

      case "/contact-us":
        return (result = {
          meta_title: "Contact - Prana E-Bikes",
          meta_desc:
            "Contact Prana E-bikes: +91 80 98 20 20 30 / +91 63 74 99 92 16, email: info@srivarumotors.com for all your e-bike queries",
        });
        break;

      case "/prana-electric-bike":
        return (result = {
          meta_title: "Prana Electric Bike | Price List",
          meta_desc:
            "Check out the updated price list of Prana Electric Bikes.",
        });
        break;

      case "/showrooms":
        return (result = {
          meta_title: "Prana Electric Bike Showroom & Service Center",
          meta_desc:
            "Visit the showroom & service centre of Prana Electric Bikes.",
        });
        break;

      case "/book-a-test-drive":
        return (result = {
          meta_title: "Prana E-Bikes | Book a Test Drive",
          meta_desc: "Booke your Prana e-bikes for a test drive.",
        });
        break;

      case "/news":
        return (result = {
          meta_title: "Srivaru Motors | News and Events",
          meta_desc:
            "Check out SVM News and Events, and stay tuned for the latest updates on Srivaru Motors and Prana e-bikes.",
        });
        break;

      case "/blogs":
        return (result = {
          meta_title: "Srivaru Motors | E-bike Blogs | Read More",
          meta_desc:
            "Check out & take a quick read at the E-Bike Blogs by Srivaru Motors.",
        });
        break;

      case "/careers":
        return (result = {
          meta_title: "Srivaru Motors | Careers | Job Opportunities",
          meta_desc:
            "Click to know more about the career & job opportunities at Srivaru Motors.",
        });
        break;

      case "/become-dealer":
        return (result = {
          meta_title: "Srivaru Motors | Prana | E-bike Dealers",
          meta_desc:
            "Looking for authorized electric bike dealers? Then check out Srivaru Motors.",
        });
        break;

      case "/faq":
        return (result = {
          meta_title: "Srivaru Motors | E-bikes | FAQ",
          meta_desc:
            "View the FAQs & Clear your queries on electric bikes through Srivaru Motors.",
        });
        break;

      case "/total-cost-of-ownership":
        return (result = {
          meta_title: "Srivaru Motors | TCO | Total Cost of Ownership",
          meta_desc:
            "Calculate the Total Cost of Ownership by clicking on the above link which takes you to the Srivaru Motor's calculator.",
        });
        break;

      case "/terms-condition":
        return (result = {
          meta_title: "Srivaru Motors | Terms & Conditions",
          meta_desc:
            "Terms and Conditions of Srivaru Motors. Book your eBike Online",
        });
        break;

      case "/policy":
        return (result = {
          meta_title: "Srivaru Motors | Policy",
          meta_desc:
            "Privacy Policy of Srivaru Motors. Visit us to book you ebike online.",
        });
        break;

      case "/cookie-policies":
        return (result = {
          meta_title: "Srivaru Motors | Cookie Policies",
          meta_desc:
            "Cookie Policies of Srivaru Motors. Click to know more about ebikes",
        });
        break;

      case "/refund-policy":
        return (result = {
          meta_title: "Srivaru Motors | Refund Policy",
          meta_desc:
            "Refund Policies of Srivaru Motors. Book your ebike with us.",
        });
        break;

      case "/book-now":
        return (result = {
          meta_title: "Srivaru Motors | Prana E-bikes | Book Now",
          meta_desc: "Book your Electric Bikes Online at Srivaru Motors",
        });
        break;

      case "/myorders":
        return (result = {
          meta_title: "Srivaru Motors | Track Your Orders",
          meta_desc:
            "Click here to track your orders in Srivaru Motors & know your order details.",
        });
        break;

      default:
         await axios.get(`https://api.srivarumotors.com${my_url}`).then((info)=>{
          console.log("info =",info)
          if (info) {
            return (result = {
              meta_title:info?.data?.metaTitle,
              meta_desc:info?.data?.metaDescription,
            })
          }
         }).catch((err)=>{
          return (result = {
            meta_title:"Srivaru Motors Prana | Electric Bikes in India",
            meta_desc:"SVM PRANA premium electric bike company in India, Srivaru Motors offers sustainable solutions with eBikes that offer rider comfort, safety & eco-friendly performance",
          })
         })
        break;
    }
  }

  return result;
}

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, "..", "build")));

// Handle any other route by sending the React app's index.html
app.get("*", async (req, res) => {
  let _url = req?.url;
  console.log("_url =", _url);
  let arr = [
    "/about-us",
    "/contact-us",
    "/prana-electric-bike",
    "/showrooms",
    "/book-a-test-drive",
    "/news",
    "/blogs",
    "/careers",
    "/become-dealer",
    "/faq",
    "/total-cost-of-ownership",
    "/terms-condition",
    "/policy",
    "/cookie-policies",
    "/refund-policy",
    "/book-now",
    "/myorders",
    "/news/srivaru-svmh-deploys-advanced-ai-platform-to-manage-leads",
    "/news/best-electric-motorcycle-manufacturers",
    "/news/proactiveinvestors",
    "/news/emc-emi-testing-for-prana",
    "/news/completes-production-model-of-prana",
    "/news/prana-battery-test",
    "/news/prana-road-performance-testing",
    "/news/ev-motorcycle-manufacturing",
    "/news/nasdaq-non-compliance-Notices",
    "/news/minimum-bid-price-deficiency",
    "/news/expansion-of-manufacturing-facility",
    "/news/premium-e-motorbikes",
    "/blog/prana-first-ride-review",
    "/blog/India-fastest-electric-bike-prana-video-review",
    "/blog/prana-first-electric-sports-bike-launched-in-india"
  ];
  if (arr.includes(_url)) {
    let my_response = await handleMeta(_url);
    console.log("my_response =", my_response);

    let _paths = path.join(__dirname, "..", "build", "index.html");
    fs.readFile(_paths, "utf8", (err, data) => {
      if (err) {
        return;
      }

      let modifiedHtml = data
        .replace(
          /<title>(.*?)<\/title>/,
          `<title>${my_response?.meta_title}</title>`
        )
        .replace(
          /<meta name="description" content="(.*?)">/,
          `<meta name="description" content="${my_response?.meta_desc}">`
        )
        .replace(
          /<meta name="title" content="(.*?)"\s*\/>/,
          `<meta name="title" content="${my_response?.meta_title}" />`
        );

      res.send(modifiedHtml);
    });
  } else {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
