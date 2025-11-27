import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "הוא ממש ידע לקחת את הרעיון מאחורי כל עסק ולממש אותו בצורה הכי טובה והכי פשוטה למשתמש",
      author: "גילי",
      video: "/videos/testimonial-1.mp4",
    },
    {
      quote: "הוא הבין מאוד מהר מה אני רוצה והיה מאוד מדויק.",
      author: "הדס",
      video: "/videos/testimonial-2.mp4",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12">{/* Removed bg-background to show shader */}
      <div className="container max-w-5xl mx-auto">
        <div className="space-y-12 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
            מה הלקוחות אומרים
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-card border-border p-8 space-y-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                  <video 
                    src={testimonial.video}
                    controls
                    className="w-full h-full rounded-lg object-cover"
                    preload="metadata"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-light leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-muted-foreground font-medium">
                    — {testimonial.author}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
