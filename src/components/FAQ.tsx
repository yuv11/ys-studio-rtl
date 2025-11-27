import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "כמה זמן לוקח עד שהאתר מוכן?",
      answer: "תוך 7 ימים תהיה גרסה ראשונית לאתר, ואז נעבור יחד על כל התיקונים כדי לוודא שהכול מושלם. בדרך כלל זה לוקח עוד כמה ימים בודדים עד לגרסה הסופית.",
    },
    {
      question: "מה כולל הדף?",
      answer: "כל מה שצריך כדי להתחיל לשווק — עיצוב מלא, כתיבה שיווקית בסיסית, התאמה לנייד, וחיבור לטופס יצירת קשר בווטסאפ או במייל.",
    },
    {
      question: "מה אני צריך להכין מראש?",
      answer: "לוגו (אם יש), תמונות, וטקסט בסיסי על העסק או על השירות. אם אין לך הכול מסודר — אל דאגה, אני עוזר לך להבין בדיוק מה להביא.",
    },
    {
      question: "מה קורה אחרי שהדף מוכן?",
      answer: "אני מדריך אותך איך לאחסן את האתר אצלך, ואחרי זה אתה יכול פשוט להתחיל לשווק ולהביא לקוחות 🚀",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12">{/* Removed bg-background to show shader */}
      <div className="container max-w-3xl mx-auto">
        <div className="space-y-12 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
            שאלות נפוצות
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-right text-lg md:text-xl font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-base md:text-lg text-muted-foreground font-light leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
