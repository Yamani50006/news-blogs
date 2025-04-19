import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NewsHeader } from "@/components/news-header"
import { NewsFooter } from "@/components/news-footer"
import { BreakingNewsBar } from "@/components/breaking-news-bar"
import { FeaturedNewsCard } from "@/components/featured-news-card"
import { NewsCard } from "@/components/news-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NewsHeader />
      <BreakingNewsBar />
      <main className="flex-1">
        <section className="w-full py-6 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
              <div className="space-y-6">
                <FeaturedNewsCard
                  title="الاتفاق التاريخي: توقيع معاهدة السلام بين الدولتين"
                  description="بعد سنوات من المفاوضات، تم التوصل إلى اتفاق تاريخي بين الدولتين لإنهاء النزاع الذي استمر لعقود"
                  category="سياسة"
                  image="/placeholder.svg?height=600&width=1200"
                  date="منذ ساعتين"
                  isBreaking={true}
                />
                <Tabs defaultValue="latest" className="w-full">
                  <TabsList className="w-full justify-start border-b rounded-none">
                    <TabsTrigger value="latest">أحدث الأخبار</TabsTrigger>
                    <TabsTrigger value="politics">سياسة</TabsTrigger>
                    <TabsTrigger value="economy">اقتصاد</TabsTrigger>
                    <TabsTrigger value="sports">رياضة</TabsTrigger>
                    <TabsTrigger value="tech">تكنولوجيا</TabsTrigger>
                  </TabsList>
                  <TabsContent value="latest" className="space-y-4 mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <NewsCard
                        title="إطلاق أحدث هاتف ذكي بتقنيات متطورة"
                        description="أعلنت شركة التكنولوجيا الرائدة عن إطلاق أحدث هواتفها الذكية بمواصفات غير مسبوقة"
                        category="تكنولوجيا"
                        image="/placeholder.svg?height=400&width=600"
                        date="منذ 3 ساعات"
                      />
                      <NewsCard
                        title="ارتفاع مؤشرات البورصة بنسبة 5٪"
                        description="سجلت البورصة ارتفاعاً ملحوظاً في مؤشراتها الرئيسية بنسبة 5٪ مع زيادة حجم التداول"
                        category="اقتصاد"
                        image="/placeholder.svg?height=400&width=600"
                        date="منذ 5 ساعات"
                      />
                      <NewsCard
                        title="المنتخب الوطني يتأهل للنهائيات"
                        description="حقق المنتخب الوطني فوزاً مستحقاً وتأهل للنهائيات بعد مباراة مثيرة"
                        category="رياضة"
                        image="/placeholder.svg?height=400&width=600"
                        date="منذ 6 ساعات"
                      />
                      <NewsCard
                        title="افتتاح معرض الفنون التشكيلية الدولي"
                        description="افتتح معرض الفنون التشكيلية الدولي أبوابه أمام الزوار بمشاركة فنانين من مختلف أنحاء العالم"
                        category="ثقافة"
                        image="/placeholder.svg?height=400&width=600"
                        date="منذ 8 ساعات"
                      />
                      <NewsCard
                        title="اكتشاف علمي جديد في مجال الطب"
                        description="توصل فريق من العلماء إلى اكتشاف علمي مهم قد يساهم في علاج العديد من الأمراض المستعصية"
                        category="علوم"
                        image="/placeholder.svg?height=400&width=600"
                        date="منذ 10 ساعات"
                      />
                      <NewsCard
                        title="إطلاق مبادرة وطنية للحفاظ على البيئة"
                        description="أطلقت الحكومة مبادرة وطنية للحفاظ على البيئة بمشاركة العديد من المؤسسات والجمعيات"
                        category="بيئة"
                        image="/placeholder.svg?height=400&width=600"
                        date="منذ 12 ساعة"
                      />
                    </div>
                    <Button className="w-full" variant="outline">
                      المزيد من الأخبار
                    </Button>
                  </TabsContent>
                  <TabsContent value="politics" className="space-y-4 mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <NewsCard
                        title="الاتفاق التاريخي: توقيع معاهدة السلام"
                        description="بعد سنوات من المفاوضات، تم التوصل إلى اتفاق تاريخي لإنهاء النزاع"
                        category="سياسة"
                        image="/placeholder.svg?height=400&width=600"
                        date="منذ ساعتين"
                        isBreaking={true}
                      />
                      <NewsCard
                        title="انعقاد القمة الاقتصادية الدولية"
                        description="بدأت أعمال القمة الاقتصادية الدولية بمشاركة قادة الدول الكبرى لمناقشة التحديات الاقتصادية"
                        category="سياسة"
                        image="/placeholder.svg?height=400&width=600"
                        date="منذ 4 ساعات"
                      />
                      <NewsCard
                        title="تعيين سفراء جدد في عدة دول"
                        description="أعلنت وزارة الخارجية عن تعيين سفراء جدد في عدة دول ضمن حركة التغييرات الدبلوماسية"
                        category="سياسة"
                        image="/placeholder.svg?height=400&width=600"
                        date="منذ 7 ساعات"
                      />
                    </div>
                  </TabsContent>
                  {/* المحتوى للتبويبات الأخرى سيكون مشابهاً */}
                </Tabs>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>الأكثر قراءة</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Link href="#" className="font-medium hover:underline">
                        الاتفاق التاريخي: توقيع معاهدة السلام بين الدولتين
                      </Link>
                      <p className="text-xs text-muted-foreground">منذ ساعتين • سياسة</p>
                    </div>
                    <div className="space-y-2">
                      <Link href="#" className="font-medium hover:underline">
                        إطلاق أحدث هاتف ذكي بتقنيات متطورة
                      </Link>
                      <p className="text-xs text-muted-foreground">منذ 3 ساعات • تكنولوجيا</p>
                    </div>
                    <div className="space-y-2">
                      <Link href="#" className="font-medium hover:underline">
                        ارتفاع مؤشرات البورصة بنسبة 5٪
                      </Link>
                      <p className="text-xs text-muted-foreground">منذ 5 ساعات • اقتصاد</p>
                    </div>
                    <div className="space-y-2">
                      <Link href="#" className="font-medium hover:underline">
                        المنتخب الوطني يتأهل للنهائيات
                      </Link>
                      <p className="text-xs text-muted-foreground">منذ 6 ساعات • رياضة</p>
                    </div>
                    <div className="space-y-2">
                      <Link href="#" className="font-medium hover:underline">
                        اكتشاف علمي جديد في مجال الطب
                      </Link>
                      <p className="text-xs text-muted-foreground">منذ 10 ساعات • علوم</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>اشترك في النشرة الإخبارية</CardTitle>
                    <CardDescription>احصل على أهم الأخبار مباشرة إلى بريدك الإلكتروني</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="example@example.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <Button className="w-full">اشترك الآن</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>الطقس</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <circle cx="12" cy="12" r="4" />
                          <path d="M12 2v2" />
                          <path d="M12 20v2" />
                          <path d="m4.93 4.93 1.41 1.41" />
                          <path d="m17.66 17.66 1.41 1.41" />
                          <path d="M2 12h2" />
                          <path d="M20 12h2" />
                          <path d="m6.34 17.66-1.41 1.41" />
                          <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                        <span className="text-xl font-bold">28°</span>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">العاصمة</p>
                        <p className="text-sm text-muted-foreground">مشمس</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <NewsFooter />
    </div>
  )
}
