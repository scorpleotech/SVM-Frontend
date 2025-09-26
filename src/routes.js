import React, {lazy,Suspense} from 'react';
import { createBrowserRouter } from "react-router-dom";

// Lazy imports
const DefaultLayout = lazy(() => import('./Layout/defaultLayout'));
const Home = lazy(() => import('./Pages/Home/home'));
const AboutUs = lazy(() => import('./Pages/AboutUs/aboutUs'));
const StoreIndex = lazy(() => import('./Pages/store'));
const PranaIndex = lazy(() => import('./Pages/Prana'));
const PranaClass = lazy(() => import('./Pages/PranaClass')); 
const DemoDriveIndex = lazy(() => import('./Pages/Demodrive'));
const VisitUsIndex = lazy(() => import('./Pages/Visitus'));
const GuestLayout = lazy(() => import('./Layout/guestLayout'));
const Login = lazy(() => import('./Pages/Auth/login'));
const GreenChapSignup = lazy(() => import('./Pages/Auth/greenChapSignup'));
const EventsPage = lazy(() => import('./Pages/Others/eventsPage'));
const BooknowIndex = lazy(() => import('./Pages/Booknow'));
const TermsandConditions = lazy(() => import('./Pages/Others/termsandConditions'));
const Policy = lazy(() => import('./Pages/Others/policy'));
const Faq = lazy(() => import('./Pages/Others/Faq'));
const RefundPolicy = lazy(() => import('./Pages/Others/refund'));
const Index404 = lazy(() => import('./Pages/404'));
const BecomeLeader = lazy(() => import('./Pages/Others/becomeLeader'));
const GalleryPage = lazy(() => import('./Pages/gallery/GalleryPage'));
const NewsViewPage = lazy(() => import('./Pages/Others/newsViewPage'));
const TcoPage = lazy(() => import('./Pages/Others/tco'));
const CareerIndex = lazy(() => import('./Pages/Career'));
const CareerApplyform = lazy(() => import('./Pages/Career/careerApplyform'));
const ViewCareer = lazy(() => import('./Pages/Career/viewCareer'));
const MyOrders = lazy(() => import('./Pages/Home/MyOrders'));
const CookiePolicy = lazy(() => import('./Pages/Others/CookiePolicy'));
const BlogViewPage = lazy(() => import('./Pages/Others/BlogViewPage'));
const BlogPageNew = lazy(() => import('./Pages/Others/BlogPageNew'));
const PayChecks = lazy(() => import('./Pages/Booknow/PayChecks'));
const BikePayment = lazy(() => import('./Pages/Booknow/BikePayment'));

const AliveIndex = lazy(() => import('./Pages/Alive'));


const AliveReservationPopup = lazy(() => import('./Pages/Alive/AliveReservationPopup'));

const withSuspense = (Component) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(DefaultLayout),
    children: [
      { path: "/", element: withSuspense(Home) },
      { path: "/about-us", element: withSuspense(AboutUs) },
      { path: "/showrooms", element: withSuspense(StoreIndex) },
      { path: "/alive", element: withSuspense(AliveIndex) },
      { path: "/class", element: withSuspense(PranaClass) }, // NEW: Prana Plus route
      { path: "/prana", element: withSuspense(PranaIndex) },
      { path: "/book-a-test-drive", element: withSuspense(DemoDriveIndex) },
      { path: "/contact-us", element: withSuspense(VisitUsIndex) },
      { path: "/blogs", element: withSuspense(BlogPageNew) },
      { path: "/blog/:id", element: withSuspense(BlogViewPage) },
      { path: "/payment", element: withSuspense(BikePayment) },
      { path: "/paychecks", element: withSuspense(PayChecks) },
      { path: "/careers", element: withSuspense(CareerIndex) },
      { path: "/career/:id", element: withSuspense(ViewCareer) },
      { path: "/career/apply-form/:id", element: withSuspense(CareerApplyform) },
      { path: "/news", element: withSuspense(EventsPage) },
      { path: "/address-details", element: withSuspense(BooknowIndex) },
      { path: "/signup", element: withSuspense(GreenChapSignup) },
      { path: "/terms-condition", element: withSuspense(TermsandConditions) },
      { path: "/cookie-policies", element: withSuspense(CookiePolicy) },
      { path: "/policy", element: withSuspense(Policy) },
      { path: "/refund-policy", element: withSuspense(RefundPolicy) },
      { path: "/faq", element: withSuspense(Faq) },
      { path: "/total-cost-of-ownership", element: withSuspense(TcoPage) },
      { path: "/news/:id", element: withSuspense(NewsViewPage) },
      { path: "/become-dealer", element: withSuspense(BecomeLeader) },
      { path: "/myorders", element: withSuspense(MyOrders) },
      { path: "/gallery", element: withSuspense(GalleryPage) },
      
      { path: "/alive-reservation", element: withSuspense(AliveReservationPopup) },
      
      { path: "*", element: withSuspense(Index404) },
    ],
  },
  {
    path: "/",
    element: withSuspense(GuestLayout),
    children: [
      { path: "/login", element: withSuspense(Login) },
      { path: "/book-now", element: withSuspense(BooknowIndex) },
      { path: "/order-summary", element: withSuspense(BooknowIndex) },
      { path: "/payment-method", element: withSuspense(BooknowIndex) },
    ],
  },
]);

export default Router;