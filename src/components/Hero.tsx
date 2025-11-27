import { GradientButton } from "@/components/ui/gradient-button";
import heroImage from "@/assets/hero-gradient.jpg";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const handleClick = () => {
    toast({
      title: "שכרגע אני לא בונה דפי נחיתה",
    });
  };

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">{/* Removed bg-background to show shader */}
      
      <div className="container relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl leading-tight fade-in font-medium lg:text-7xl text-white">דפי נחיתה שנראים מיליון דולר - ומביאים לך מלא לקוחות.</h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto fade-in-delay-1">
            אני בונה דפי נחיתה לעסקים, קורסים ותוכניות ליווי שנראים טוב, עובדים חכם,<br />
            ומביאים אנשים להשאיר פרטים כי הם פשוט מרגישים שזה הדבר הנכון לעשות.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 fade-in-delay-2">
            <GradientButton className="px-14" onClick={handleClick}>
              בואו נתחיל
            </GradientButton>
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;