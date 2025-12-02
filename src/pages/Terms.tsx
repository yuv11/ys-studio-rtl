import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          חזרה לדף הבית
        </Link>
        
        <article className="prose prose-invert max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            תקנון שימוש ומדיניות פרטיות – yuvalsiti.com
          </h1>
          
          <p className="text-muted-foreground mb-8">תאריך עדכון אחרון: 2.12.2025</p>
          
          <p className="text-foreground/90 mb-6">
            מסמך זה מהווה את תנאי השימוש ומדיניות הפרטיות באתר yuvalsiti.com, המופעל על־ידי:
          </p>
          
          <div className="bg-card/50 border border-border/50 rounded-xl p-6 mb-8">
            <p className="font-bold text-foreground">יובל סיטי</p>
            <p className="text-muted-foreground">עוסק פטור מס' 217248921</p>
            <p className="text-muted-foreground">(להלן: "החברה")</p>
          </div>
          
          <p className="text-foreground/90 mb-8">
            השימוש באתר ובקורסים הדיגיטליים המוצעים בו מהווה הסכמה מלאה ובלתי מותנית לכל תנאי התקנון.
            התקנון מנוסח בלשון זכר מטעמי נוחות בלבד ומתייחס לכל המגדרים באופן שווה.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. הגדרות והקדמה</h2>
            <ul className="space-y-2 text-foreground/90 list-none pr-0">
              <li>1.1 האתר מציע קורס דיגיטלי בשם SiteMaster AI, כולל תכנים דיגיטליים ובונוסים (סוכני AI, פרומפטים, כלים והדרכות).</li>
              <li>1.2 שימוש באתר מותר לבני 18 ומעלה בלבד.</li>
              <li>1.3 אדם הגולש, רוכש או משתמש באתר מוגדר כ–"המשתמש".</li>
              <li>1.4 כל שימוש באתר מהווה הסכמה מלאה לתנאי התקנון.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. שימוש באתר – מותר ואסור</h2>
            <p className="text-foreground/90 mb-4">2.1 המשתמש מתחייב להשתמש באתר בהתאם להוראות הדין ולתנאי התקנון.</p>
            <p className="text-foreground/90 mb-2">2.2 חל איסור מוחלט לבצע באתר את הפעולות הבאות:</p>
            <ul className="space-y-2 text-foreground/90 list-disc pr-6 mb-4">
              <li>שימוש לא חוקי או הפוגע באתר או במפעיליו.</li>
              <li>ניסיון להפריע לפעילות האתר או לעקוף מנגנוני אבטחה.</li>
              <li>התחזות לאחר, מסירת פרטים כוזבים או שימוש מפר.</li>
              <li>גישה לא מורשית למידע או לתכנים באתר.</li>
              <li>העתקה, פריצה, הפצה או שיבוש התוכן הדיגיטלי.</li>
            </ul>
            <p className="text-foreground/90">2.3 אין באתר אפשרות למשתמשים להעלות תוכן מכל סוג.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. רכישות ותשלומים</h2>
            <ul className="space-y-2 text-foreground/90 list-none pr-0">
              <li>3.1 רכישת הקורס נעשית בתשלום חד־פעמי בלבד.</li>
              <li>3.2 התשלום מתבצע באמצעות חברת הסליקה GROW, בדף סליקה חיצוני מאובטח.</li>
              <li>3.3 החברה אינה שומרת ואינה נחשפת לפרטי אשראי.</li>
              <li>3.4 עם השלמת התשלום, המשתמש מקבל גישה מיידית לקורס ולתכנים.</li>
              <li>3.5 לא תינתן כל אפשרות להחזר כספי לאחר פתיחת הגישה לתכנים, בהתאם לחוק הגנת הצרכן – מוצרים דיגיטליים.</li>
              <li>3.6 במקרה של תקלה בגישה, המשתמש רשאי לפנות לתמיכה, והחברה תטפל בהתאם.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. אספקה</h2>
            <ul className="space-y-2 text-foreground/90 list-none pr-0">
              <li>4.1 כל השירותים והמוצרים באתר הם דיגיטליים בלבד.</li>
              <li>4.2 אין מוצרים פיזיים ואין משלוחים מכל סוג.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. זכויות יוצרים וקניין רוחני</h2>
            <p className="text-foreground/90 mb-2">5.1 כל התכנים באתר ובקורס – כולל סרטונים, טקסטים, קבצים, מצגות, פרומפטים, סוכני AI, עיצוב וחומרים – מוגנים בזכויות יוצרים.</p>
            <p className="text-foreground/90 mb-2">5.2 השימוש בקורס הוא אישי בלבד.</p>
            <p className="text-foreground/90 mb-2">5.3 חל איסור מוחלט:</p>
            <ul className="space-y-2 text-foreground/90 list-disc pr-6 mb-4">
              <li>להעביר את הקורס לאחרים</li>
              <li>לשתף בונוסים / פרומפטים / סוכני AI</li>
              <li>להעלות חלקים מהקורס לרשת</li>
              <li>למכור, להפיץ או לשכפל את החומרים</li>
              <li>לבצע שימוש מסחרי כלשהו בתוכן</li>
            </ul>
            <p className="text-foreground/90">5.4 החברה רשאית לנקוט בכל פעולה משפטית במקרה של הפרת זכויות יוצרים.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. איסוף מידע ופרטיות</h2>
            <p className="text-foreground/90 mb-2">6.1 החברה אוספת מידע שמוסר המשתמש מרצונו:</p>
            <ul className="space-y-1 text-foreground/90 list-disc pr-6 mb-4">
              <li>שם</li>
              <li>אימייל</li>
              <li>טלפון</li>
            </ul>
            <ul className="space-y-2 text-foreground/90 list-none pr-0">
              <li>6.2 האתר עושה שימוש ב־פיקסל של פייסבוק לצורך סטטיסטיקה ופרסום.</li>
              <li>6.3 פרטי אשראי אינם נשמרים על־ידי החברה. הם מנוהלים על ידי GROW בלבד.</li>
              <li>6.4 ייתכן שבעתיד הפרטים יועברו למערכת דיוור חיצונית, לצורך שליחת עדכונים ותוכן בלבד ובהסכמת המשתמש.</li>
              <li>6.5 החברה אינה מוכרת, אינה מעבירה ואינה משתפת מידע עם צדדים שלישיים, למעט לצורך תפעול שירותים המוזכרים כאן.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. עוגיות (Cookies)</h2>
            <ul className="space-y-2 text-foreground/90 list-none pr-0">
              <li>7.1 האתר משתמש בעוגיות לצורך תפעול תקין ושיפור חוויית המשתמש.</li>
              <li>7.2 האתר משתמש בפיקסל פייסבוק בלבד, ואינו מפעיל Google Analytics בשלב זה.</li>
              <li>7.3 המשתמש יכול לחסום שימוש בעוגיות דרך הגדרות הדפדפן.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. אבטחת מידע</h2>
            <ul className="space-y-2 text-foreground/90 list-none pr-0">
              <li>8.1 החברה עושה מאמצים סבירים לאבטחת האתר, המידע והתכנים.</li>
              <li>8.2 החברה אינה אחראית לכל נזק ישיר או עקיף שייגרם עקב תקלה, פריצה, כשל טכני או אירוע בלתי צפוי.</li>
              <li>8.3 אבטחת התשלומים נתונה לאחריות GROW, בהתאם למדיניותה.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. יצירת קשר</h2>
            <p className="text-foreground/90 mb-4">לשירות ותמיכה ניתן לפנות:</p>
            <div className="bg-card/50 border border-border/50 rounded-xl p-6">
              <p className="text-foreground/90">📧 דוא"ל: sitiyuval@gmail.com</p>
              <p className="text-foreground/90">💬 וואטסאפ: 055-9384600</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. סמכות שיפוט</h2>
            <p className="text-foreground/90">כל מחלוקת תידון בבית משפט בישראל – מחוז מרכז בלבד.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. עדכון תקנון</h2>
            <p className="text-foreground/90 mb-2">החברה רשאית לעדכן את התקנון בכל עת.</p>
            <p className="text-muted-foreground">תאריך עדכון אחרון: 2.12.2025</p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Terms;
