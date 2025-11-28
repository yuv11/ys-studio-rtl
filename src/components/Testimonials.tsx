import { Card } from "@/components/ui/card";
const Testimonials = () => {
  const testimonials = [{
    quote: "הוא ממש ידע לקחת את הרעיון מאחורי כל עסק ולממש אותו בצורה הכי טובה והכי פשוטה למשתמש",
    author: "גילי",
    video: "/videos/testimonial-1.mp4"
  }, {
    quote: "הוא הבין מאוד מהר מה אני רוצה והיה מאוד מדויק.",
    author: "הדס",
    video: "/videos/testimonial-2.mp4"
  }];
  return <section className="py-24 px-6 md:px-12">{/* Removed bg-background to show shader */}
      <div className="container max-w-5xl mx-auto">
        
      </div>
    </section>;
};
export default Testimonials;