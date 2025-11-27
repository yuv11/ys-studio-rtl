import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import profileAvatar from '@/assets/profile-avatar.png';
const About = () => {
  return <section id="about" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl text-white">מי אני וקצת עליי</h2>
          <p className="text-lg text-muted-foreground">בונה דפי נחיתה שגורמים לאנשים לעצור, להתחבר, ולהשאיר פרטים</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <div className="text-5xl">✨</div>
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">"היי, אני יובל סיטי. ואני פשוט אוהב לגרום לעסקים להיראות טוב — באמת טוב. אני מאמין שדף נחיתה טוב זה לא רק עיצוב יפה, זה דף שגורם לבן אדם לעצור, להבין בשנייה מה אתם מציעים, ולהרגיש שהוא חייב להשאיר פרטים."</p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage src={profileAvatar} alt="יובל סיטי" height="400" width="400" loading="lazy" />
                    <AvatarFallback>YS</AvatarFallback>
                  </Avatar>

                  <div className="text-right">
                    <cite className="text-sm font-medium">יובל סיטי</cite>
                    <span className="text-muted-foreground block text-sm">מעצב ומפתח דפי נחיתה</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">"אני בונה כל דף כאילו הוא שלי — עם מחשבה על מה שגורם לאנשים להישאר, להתחבר לעסק שלך, ולהקשיב לפתרון שיש לך להציע."</p>

                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <cite className="text-sm font-medium">הגישה שלי</cite>
                    <span className="text-muted-foreground block text-sm">תשומת לב לפרטים</span>
                  </div>
                  <div className="text-3xl">🎯</div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>עיצוב שמדבר ישירות ללקוח ומביא תוצאות אמיתיות</p>

                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <cite className="text-sm font-medium">המטרה</cite>
                    <span className="text-muted-foreground block text-sm">המרות גבוהות</span>
                  </div>
                  <div className="text-3xl">📈</div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>תהליך מהיר, קל ופשוט - אתם רק ממלאים שאלון ומקבלים תוצר ראשוני תוך 7 ימים</p>

                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <p className="text-sm font-medium">התהליך</p>
                    <span className="text-muted-foreground block text-sm">מהיר ופשוט</span>
                  </div>
                  <div className="text-3xl">⚡</div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;