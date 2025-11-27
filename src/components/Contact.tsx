import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleClick = () => {
    toast({
      title: "שכרגע אני לא בונה דפי נחיתה",
    });
  };

  return <section id="contact" className="py-24 px-6 md:px-12">{/* Removed bg-background to show shader */}
      <div className="container max-w-3xl mx-auto">
        <div className="space-y-10 text-center fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white">בואו נבנה את דף הנחיתה שלכם </h2>

          <p className="text-lg md:text-2xl text-muted-foreground font-light leading-relaxed">
            רוצים דף שנראה מיליון דולר ומביא לקוחות אמיתיים?<br />
            דברו איתי בווטסאפ ונבנה לכם משהו שיגרום לאנשים לעצור ולהגיד — <span className="font-medium text-foreground italic">וואו.</span>
          </p>

          <div className="flex justify-center">
            <Button variant="whatsapp" size="lg" className="mt-8 gap-3" onClick={handleClick}>
              <MessageCircle className="w-5 h-5" />
              דברו איתי עכשיו בוואטסאפ
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;