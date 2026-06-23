export interface Testimonial {
  id: number;
  name: string;
  business: string;
  industry: string;
  text: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Sandeep Kumar",
    business: "Pearl 32 Dental",
    industry: "Dental Clinic",
    text: "Pixora Studios transformed our clinic's online presence. The booking system they built has reduced our front-desk calls by 40%. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Mohanty",
    business: "Aroma Cafe",
    industry: "Cafe",
    text: "Our new website is beautiful and works perfectly on mobile. We've seen a significant increase in new customers finding us through Google Search.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sonia Sharma",
    business: "FitLife Gym",
    industry: "Gym",
    text: "The team at Pixora Studios is incredibly professional. They delivered our gym's website in just 3 weeks, and the SEO results have been amazing.",
    rating: 5,
  },
  {
    id: 4,
    name: "Aman Gupta",
    business: "Spice Garden",
    industry: "Restaurant",
    text: "We used to pay huge commissions to Zomato for table bookings. Now, our customers book directly on our site. It's a game-changer for our business.",
    rating: 5,
  },
  {
    id: 5,
    name: "Prachi Dash",
    business: "Prachi's Dental Hub",
    industry: "Dental Clinic",
    text: "Debidutta understands both code and business. He didn't just build a site; he built a lead machine that actually works.",
    rating: 5,
  },
];
