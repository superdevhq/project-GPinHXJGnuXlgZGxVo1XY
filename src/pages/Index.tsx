
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon, PlayIcon, VolumeIcon } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  // Add Google Fonts for the serif font used in headers and Hebrew font support
  useEffect(() => {
    // Add Playfair Display for the serif headers
    const playfairLink = document.createElement("link");
    playfairLink.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap";
    playfairLink.rel = "stylesheet";
    document.head.appendChild(playfairLink);

    // Add Heebo for Hebrew text
    const heeboLink = document.createElement("link");
    heeboLink.href = "https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap";
    heeboLink.rel = "stylesheet";
    document.head.appendChild(heeboLink);

    return () => {
      document.head.removeChild(playfairLink);
      document.head.removeChild(heeboLink);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ fontFamily: "'Heebo', sans-serif", direction: "rtl" }}>
      {/* Red banner at top */}
      <div className="bg-red-600 text-white text-center py-1 px-4">
        <p className="text-sm font-medium">סודי ביותר מהכספת של הנקסט לבל: בעקבות המלחמה ל 72 שעות בלבד</p>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-gray-700 text-xl mb-2">לעצלנים שלא רוצים לקרוע את התחת באורגני רק בשביל לראות 'קארדקום רכישות' במייל…</h2>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ברוכים הבאים לדף שישנה לכם את החיים
              </h1>
              <p className="text-lg md:text-xl mb-6 font-bold">
                ״GAME CHANGER״
              </p>
              <p className="text-lg md:text-xl mb-6">
                איך מהלך שלקח לי 30 דק' להכין הביא 1,398 סליקות בחודש של המלחמה
              </p>

              {/* Video placeholder */}
              <div className="relative bg-gray-900 aspect-video rounded-lg mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <PlayIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <VolumeIcon className="h-5 w-5 text-white" />
                  <span className="text-white text-sm">SOUND ON</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="/placeholder.svg" 
                alt="ספר Game Changer" 
                className="w-full max-w-[300px] mb-4"
              />
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="mr-2 text-gray-700">4.6 - 2,340 דירוגים</span>
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md">
                יהב אני בפנים!
              </Button>
              <p className="text-xs text-gray-500 mt-2">תקרא לי משוגע ותחזיק חזק כי ל 72 שעות הקרובות</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Message Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-right">
            <p className="text-lg mb-4">
              החלטתי לחשוף מהלך GAME CHANGER שהולך לעזור לך 'לגנוב' בצורה חוקית את כל הלקוחות הפוטנציאלים בשוק
            </p>
            <p className="text-lg mb-4">
              (לפני שהמתחרים שלך עושים את זה)
            </p>
            <p className="text-lg font-bold mb-4">
              חוקי המשחק השתנו.
            </p>
            <p className="text-lg mb-4">
              פעם בתקופה זה קורה…
            </p>
            <p className="text-lg mb-4">
              מערבבים את החבילת קלפים ומחלקים מחדש…
            </p>
            <p className="text-lg mb-4">
              אלו עם עשרות אלפי עוקבים מאבדים שליטה
            </p>
            <p className="text-lg mb-4">
              ונפתח מקום לשחקנים חדשים.
            </p>
            <p className="text-lg mb-4">
              אני קורא לתקופה הזאת:
            </p>
            <p className="text-xl font-bold mb-6">
              ״GAME CHANGER״ עבור שחקנים החדשים.
            </p>
            <div className="flex justify-center mt-4 mb-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md">
                יהב אני בפנים!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-right">
            <h2 className="text-2xl font-bold mb-6">לא הייתי מוכן לזה…</h2>
            <p className="text-lg mb-4">
              בשבוע הראשון של המלחמה, כמו 99% מהעסקים בישראל, הפעילות העסקית שלי קפאה.
            </p>
            <p className="text-lg mb-4">
              המכירות הפסיקו… הסליקות נעצרו והמשק הישראלי נכנס ל…
            </p>
            <p className="text-lg font-bold mb-4">
              פסק זמן.
            </p>
            <p className="text-lg mb-4">
              ישראל בהלם. ובצדק.
            </p>
            <p className="text-lg mb-4">
              אבל כמו כל בעל עסק הבנתי שהמדינה לא תאכיל אותי במענקים (וצדקתי)
            </p>
            <p className="text-lg mb-4">
              מי שמשלם בסוף את כל הוצאות המלחמה אלו משלמי המיסים.
            </p>
            <p className="text-lg mb-4">
              כמוני. כמוך.
            </p>
            <p className="text-lg mb-4">
              אז…
            </p>
            <p className="text-lg mb-4">
              הייתי חייב לרכז את כל יכולות המרקטינג שלי
            </p>
            <p className="text-lg mb-4">
              את כל האסטרטגיות העסקיות שלי שהביאו את הלקוחות שלנו להכנסות משותפות של יותר מ 50M שקל בשנה.
            </p>
            <p className="text-lg mb-4">
              את כל הניסיון היזמי שלי שהאחראי על יותר מ 15M שקל מכירות אונליין ב 5 שנים האחרונות
            </p>
            <p className="text-lg font-bold mb-4">
              למהלך אחד.
            </p>
            <p className="text-lg mb-4">
              מהלך אחד שיעשה מהפך. מהלך אחד שישנה הכל.
            </p>
            <p className="text-lg mb-4">
              אחרי שעות של מחשבה, מחקר ופיתוח זה קרה…
            </p>
            <p className="text-lg font-bold mb-4">
              מצאתי מהלך שמשנה הכל. מצאתי מהלך GAME CHANGER
            </p>
            <p className="text-lg mb-4">
              לקח לי 30 דקות על השעון להכין ולשגר לאוויר
            </p>
            <p className="text-lg mb-4">
              התוצאה?
            </p>
            <p className="text-lg font-bold mb-4">
              גשם של סליקות באונליין.
            </p>
            <p className="text-xl font-bold mb-6 text-center">
              1,398 סליקות בחודש של מלחמה.
            </p>
          </div>
        </div>
      </section>

      {/* No Story Grinding Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-right">
            <h2 className="text-2xl font-bold mb-6">בלי לטחון בסטורי.</h2>
            <p className="text-lg mb-4">
              אם אתה עוקב אחרי באינסטה אתה יודע שאני כמעט לא מעלה לינקים בסטורי, למה? כי אני יודע להפוך גולשים זרים שפגשו אותי בפעם הראשונה ללקוחות מעריצים שסולקים כל מה שאני מציע.
            </p>
            <p className="text-lg mb-4">
              (ועכשיו תגלה איך)
            </p>
            <div className="flex justify-center mt-4 mb-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md">
                יהב אני בפנים!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lucky Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-right">
            <h2 className="text-2xl font-bold mb-6">אתה בר מזל.</h2>
            <p className="text-lg mb-4">
              אתה יודע, לא היית אמור לקרוא את הדף הזה לעולם… הדף הזה לא היה אמור לעלות לאוויר.
            </p>
            <p className="text-lg mb-4">
              עד שזה קרה.
            </p>
            <p className="text-lg mb-4">
              לפני חודשיים, עליתי להדרכה אקסקלוסיבית ללקוחות של הנקסט לבל בלבד.
            </p>
            <p className="text-lg mb-4">
              (כאלה ששילמו 35,000 + מע״מ על ליווי עסקי)
            </p>
            <p className="text-lg mb-4">
              עם ניתוח, מסקנות, תובנות וים פרקטיקה על מהלך ה - ״GAME CHANGER״
            </p>
            <p className="text-lg mb-4">
              שאחראי על 1,398 סליקות בחודש.
            </p>
            <p className="text-lg mb-4">
              אלו ההודעות שקיבלתי 30 דק' לאחר שההדרכה הסתיימה:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="text-gray-700">[תמונה של הודעות]</p>
            </div>
            <p className="text-lg mb-4">
              ברגע ששיתפתי בסטורי כל העוקבים התנפלו ודרשו גם:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="text-gray-700">[תמונה של הודעות]</p>
            </div>
            <p className="text-lg mb-4">
              אחרי התלבטות של 24 שעות הגעתי למסקנה -
            </p>
            <p className="text-lg font-bold mb-4">
              אני אתן הזדמנות רק לעוקבים שלי…
            </p>
            <p className="text-lg mb-4">
              בלי להריץ ממומן ובלי להכניס זרים הביתה.
            </p>
            <p className="text-lg mb-4">
              החלטתי לפתוח את הכספת של הנקסט לבל ולהוציא את ההדרכה שתשנה עבורך הכל…
            </p>
            <p className="text-lg mb-4">
              יותר חזק מלידים… יותר חזק מעוקבים…
            </p>
            <p className="text-lg font-bold mb-4">
              אני רוצה לגלות לך:
            </p>
            <p className="text-xl font-bold mb-6 text-center">
              איך להביא 1,000 לקוחות חדשים בחודש.
            </p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-4">
              ל 72 שעות הקרובות בלבד… אני גאה לשחרר לאוויר את המאסטרקלאס:
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ״GAME CHANGER״
            </h2>
            <p className="text-lg mb-8">
              מהלך אחד שהולך לשנות עבורך הכל ולהוריד גשם של סליקות באונליין.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8 text-right">
              <h3 className="text-xl font-bold mb-4">במשך 120 דקות מאסטרקלאס תגלה:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>איך לעלות על GAME CHANGER OFFER ולתת הצעה שתגרום לכל הלקוחות הפוטנציאלים לבחור דווקא בך!</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>איך לחשוב על רעיון רב מכר שמייצר באזזז היסטרי ברשת וגורם לגולשים 'לרכל' על העסק שלך</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>איך לחבר הכל לאסטרטגיה עסקית באונליין בסטייל מעגל האקו סיסטם</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>איך להרכיב את כל החתיכות בפאזל למהלך GAME CHANGER שהולך להביא 1,000 לקוחות בחודש</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold mb-4">אבל רגע, זה לא הכל…</h3>
            <p className="text-lg mb-6">
              החלטתי לשבור את השוק (שוב) ולתת לך בונוסים בשווי מאות שקלים שמטופש לסרב להם!
            </p>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Bonus 1 */}
            <Card>
              <CardContent className="p-4 text-right">
                <h3 className="text-xl font-bold mb-3">בונוס 1: מיליון דולר מוקאפ</h3>
                <p className="text-sm text-gray-700 mb-3">
                  חוסך לך מאות שקלים על גרפיקאיות - אם אתה מוכר קורסים, אתה מוכר ערך עטוף באוויר זה למה אתה חייב המחשה ויזואלית. בשפה המקצועית אנחנו קוראים לזה: מוקאפ. עיצבנו לך מוקאפ בקאנבה. אתה רק צריך להכניס את התמונות שלך ויש לך מיליון דולר מוקאפ להשתיל בדפי מכירה בשביל להטיס את היחס המרה.
                </p>
              </CardContent>
            </Card>

            {/* Bonus 2 */}
            <Card>
              <CardContent className="p-4 text-right">
                <h3 className="text-xl font-bold mb-3">בונוס 2: הפריצה לחו״ל עם קורסים דיגיטליים</h3>
                <p className="text-sm text-gray-700 mb-3">
                  ב 2020 תרגמנו את כל הקורסים הדיגיטליים שלנו לאנגלית וככה כל קורס הפך לבינלאומי. פתחתי חברה בע״מ חדשה שהגיע למחזור מכירות של מיליון דולר בשנה הראשונה. בבונוס השני, ריכזתי לך 7 צעדים שעברנו בדרך למיליון דולר.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">השווי האמיתי של המאסטרקלאס פלוס בונוסים הוא בעיניים עצומות:</h3>
            <p className="text-3xl font-bold mb-6">12,248 ש״ח</p>
            <p className="text-lg mb-4">
              עכשיו מה שאני הולך להציע לך עוד רגע, לא הגיוני.
            </p>
            <p className="text-lg mb-4">
              אני עדיין בהלם שאני כותב את זה…
            </p>
            <p className="text-lg mb-4">
              אבל הבטחתי לעצמי לתת לך את המקסימום במינימום. הבטחתי לעזור לכמה שיותר בעלי עסקים בתקופת מלחמה.
            </p>
            <p className="text-lg mb-4">
              הבטחתי לעצום עיניים ולנשוך שפתיים
            </p>
            <p className="text-lg font-bold mb-4">
              ל 72 שעות בלבד -
            </p>
            <p className="text-lg mb-4">
              ההזדמנות שלך לקבל יתרון משמעותי על כל המתחרים ב 2024
            </p>
            <p className="text-lg mb-4">
              היא רק
            </p>
            <p className="text-4xl font-bold text-red-600 mb-6">47 שקל</p>
            <p className="text-lg mb-4">
              לא חסר אפס.
            </p>
            <p className="text-lg mb-4">
              המחיר שלך הוא רק:
            </p>
            <p className="text-3xl font-bold mb-6">47 שקל!</p>
            <p className="text-lg mb-6">
              ובסיום התשלום אתה מקבל את כל מה שכתבתי תוך 17 שניות ישר למייל.
            </p>
            <p className="text-lg mb-4">
              אז קדימה.
            </p>
            <p className="text-lg mb-6">
              תלחץ על הכפתור כאן למטה, מלא את המייל בטופס, תאשר את התשלום ותרים מהלך שהולך לשנות בשבילך הכל…
            </p>
            <p className="text-lg mb-2">
              שווי אמיתי: 12,248 שקל!
            </p>
            <p className="text-lg mb-6">
              בשבילך ל 72 שעות בלבד:
            </p>
            <p className="text-2xl font-bold mb-6">רק 47 שקל</p>
            <Button className="w-full max-w-md mx-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-md text-lg">
              יהב אני בפנים!
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-right">
            <h2 className="text-2xl font-bold mb-6">אם אנחנו עדיין לא מכירים…</h2>
            <p className="text-lg mb-4">
              אז היי, קוראים לי יהב רובין מחבר רב המכר ״איך באמת להתעשר באונליין״ ומייסד מועדון העסקים המוביל בישראל נקסט לבל בע״מ.
            </p>
            <p className="text-lg mb-4">
              אחרי שהצמחתי את העסק של ארוסה שלי (נטלי מילוא) ל 10M שקל ממכירות באונליין,
            </p>
            <p className="text-lg mb-4">
              אחרי שיצאתי לחו״ל עם קורסים דיגיטליים והכנסתי מיליון דולר בשנה הראשונה,
            </p>
            <p className="text-lg mb-4">
              הקמתי את מועדון העסקים המוביל בישראל: נקסט לבל בע״מ שכיום ליווה מעל 100 יזמים (החזקים בישראל) למעל 50,000,000 שקל הכנסות.
            </p>
            <p className="text-lg mb-4">
              יש מכנים אותי 'הקוסם באונליין' ויש מספרים שאני גאון עסקי
            </p>
            <p className="text-lg mb-4">
              אבל האמת?
            </p>
            <p className="text-lg font-bold mb-4">
              אני אדם פשוט בדיוק כמוך.
            </p>
            <p className="text-lg mb-4">
              (לפי הנתונים שקיבלתי אני נחשב אפילו 'מתחת לממוצע').
            </p>
            <p className="text-lg mb-4">
              לא גדלתי למשפחה עשירה אין לי בגרות ויש לי מחלה גנטית שמונעת ממני לעבוד פיזית קשה
            </p>
            <p className="text-lg mb-4">
              סיימתי את הצבא עם 2 אופציות:
            </p>
            <p className="text-lg font-bold mb-4">
              להתעשר או להיזרק לרחוב.
            </p>
            <p className="text-lg mb-4">
              אחרי אינסוף צלקות בעולם היזמות,
            </p>
            <p className="text-lg mb-4">
              הצלחתי.
            </p>
            <p className="text-lg mb-4">
              ועכשיו אחרי שנה וחצי בתור יועץ עסקי לצמיחה באונליין - עם מעל 100 לקוחות פרימיום ומעל 5,000 תלמידים שרכשו את הקורסים שלי.
            </p>
            <p className="text-lg mb-4">
              הבאתי את הדבר הגדול הבא…
            </p>
            <p className="text-xl font-bold mb-6 text-center">
              ״GAME CHANGER״
            </p>
            <p className="text-lg mb-4">
              מהלך מהיר שהולך לעזור לך 'לגנוב' בצורה חוקית את כל הלקוחות הפוטנציאלים בשוק (לפני שהמתחרים שלך עושים את זה)
            </p>
            <p className="text-lg mb-4">
              במקום שווי אמיתי של 12,480 שקל!
            </p>
            <p className="text-lg mb-4">
              המחיר שלך להיום בלבד הוא רק:
            </p>
            <p className="text-2xl font-bold mb-6 text-center">
              47 שקל!
            </p>
            <div className="flex justify-center mt-4 mb-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md">
                יהב אני בפנים!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-right">
            <h2 className="text-2xl font-bold mb-6">״יהב, איך אני יודע אם מהלך GAME CHANGER מתאים לעסק שלי?״</h2>
            <p className="text-lg mb-4">
              אם יש לך עסק ולא נכנסים לך כל יום לקוחות חדשים אז מהלך GAME CHANGER בול בשבילך.
            </p>
            <p className="text-lg mb-4">
              במאסטרקלאס, אני מגלה לך כל מה שאתה צריך בשביל לטוס לנקסט לבל ולגייס 1,000 לקוחות חדשים כל חודש.
            </p>
            <p className="text-lg mb-4">
              תבין, 1,000 לקוחות בחודש הולכים לשנות את החיים.
            </p>
            <p className="text-lg mb-4">
              מדובר על עוד 1,000 אנשים שפתחו את הארנק וסלקו אצלך בעסק… יותר חזק מלידים, יותר חזק מעוקבים, מדובר על לקוחות משלמים.
            </p>
            <p className="text-lg mb-4">
              ועכשיו? יש לך הזדמנות לשים יד -
            </p>
            <p className="text-lg mb-4">
              במקום שווי אמיתי של 12,480 שקל!
            </p>
            <p className="text-lg mb-4">
              המחיר שלך להיום בלבד הוא רק:
            </p>
            <p className="text-2xl font-bold mb-6 text-center">
              47 שקל!
            </p>
            <div className="flex justify-center mt-4 mb-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md">
                יהב אני בפנים!
              </Button>
            </div>

            <h2 className="text-2xl font-bold mb-6">״אני לא איזה אושיית רשת עם מיליון עוקבים באינסטה, המהלך עדיין מתאים לי?״</h2>
            <p className="text-lg mb-4">
              גם אני לא אושיית רשת עם מיליון עוקבים ו - 90% מהמכירות שלי מגיעות דרך פרסום ממומן, במקום שכמות עוקבים לא מעניינת אף אחד.
            </p>
            <p className="text-lg mb-4">
              אז כן, מהלך GAME CHANGER בהחלט מתאים לך.
            </p>
            <p className="text-lg mb-4">
              גם אין לך עוקבים ואתה לא מוכר בתחום, מהלך GAME CHANGER יכול לייצר מהפך בעסק שלך
            </p>
            <p className="text-lg mb-4">
              המחיר שלך להיום בלבד הוא רק:
            </p>
            <p className="text-2xl font-bold mb-6 text-center">
              47 שקל!
            </p>
            <div className="flex justify-center mt-4 mb-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md">
                יהב אני בפנים!
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
