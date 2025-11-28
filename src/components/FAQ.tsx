import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [{
    question: "אני לא טכני בכלל… זה מתאים לי?",
    answer: "חד משמעית כן. הקורס בנוי לאנשים שלא באים מהעולם הזה. אין פה קוד, אין פה הגדרות מסובכות – הכול ממש צעד־אחרי־צעד. ובקטעים ה'מפחידים'? AI עושה את זה בשבילך."
  }, {
    question: "כמה זמן לוקח לבנות את האתר בסוף?",
    answer: "בממוצע? שעתיים–שלוש. ראיתי אנשים עושים את זה אפילו יותר מהר. זה תלוי כמה אתה רוצה לשחק עם העיצוב… אבל התהליך עצמו קצר ממש."
  }, {
    question: "מאיה באמת כותבת את כל הטקסטים?",
    answer: "כן. היא פשוט תשאל אותך כמה שאלות, תבין מי אתה ומה העסק שלך – ותוציא לך טקסטים שנראים כאילו קופירייטר מקצועי ישב עליהם."
  }, {
    question: "ומה אם אני לא יודע מי הקהל שלי או מה לכתוב עליו?",
    answer: "בשביל זה מאיה קיימת. היא תעזור לך לחדד הכול. אתה רק צריך לענות בכנות. וזהו."
  }, {
    question: "Lovable זה באמת מספיק טוב לבנות אתר מקצועי?",
    answer: "כן. פשוט צריך לדעת 'לדבר איתו' נכון… וזה בדיוק מה שלומדים בקורס. כשתראה את האתרים שנבנו איתו – תבין."
  }, {
    question: "אוקיי… אבל זה באמת יביא לי יותר לקוחות?",
    answer: "אם אתה בונה אתר שנראה טוב, כתוב טוב ויש לו מבנה נכון – התשובה היא כן. זה לא קסם, זה פשוט עובד כי זה גורם לאנשים לסמוך עליך יותר."
  }, {
    question: "אני יכול לעדכן דברים לבד אחרי הקורס?",
    answer: "ברור. זה אחד היתרונות. אתה לא תלוי באף מעצב, לא משלם על כל שינוי קטן. רוצה לשנות תמונה? מחליף. רוצה לשנות טקסט? מדביק חדש. קל."
  }, {
    question: "כמה זמן יש לי גישה לקורס?",
    answer: "גישה לכל החיים. ללא הגבלת זמן. תוכל לחזור לשיעורים אפילו עוד שנה."
  }, {
    question: "ואם אני נתקע?",
    answer: "תמיד אפשר לפנות אליי בוואטספ לכל שאלה או תהייה, אני זמין תמיד."
  }, {
    question: "אני יכול לבנות יותר מאתר אחד עם השיטה?",
    answer: "ברור. אחרי שאתה לומד את התהליך – אתה יכול לשכפל אותו שוב ושוב ולבנות כמה אתרים שתרצה."
  }];
  return <section className="py-24 px-6 md:px-12">{/* Removed bg-background to show shader */}
      <div className="container max-w-3xl mx-auto px-[5px]">
        <div className="space-y-12 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
            שאלות נפוצות
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 hover:border-primary/50 transition-colors">
                <AccordionTrigger className="text-right text-lg md:text-xl font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-base md:text-lg text-muted-foreground font-light leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQ;