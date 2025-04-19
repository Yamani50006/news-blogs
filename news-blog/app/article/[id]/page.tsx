import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NewsHeader } from "@/components/news-header"
import { NewsFooter } from "@/components/news-footer"
import { NewsCard } from "@/components/news-card"

export default function ArticlePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NewsHeader />
      <main className="flex-1">
        <article className="container px-4 py-6 md:px-6 md:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-2 mb-8">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">سياسة</Badge>
                <Badge variant="destructive">عاجل</Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                الاتفاق التاريخي: توقيع معاهدة السلام بين الدولتين
              </h1>
              <p className="text-muted-foreground">نشر بتاريخ 15 أبريل 2023 • بواسطة أحمد محمد</p>
            </div>
            <div className="relative mb-8">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="صورة المقال"
                width={1200}
                height={600}
                className="rounded-lg object-cover w-full aspect-[2/1]"
              />
              <p className="mt-2 text-sm text-muted-foreground text-center">
                لحظة توقيع الاتفاقية التاريخية بين رئيسي الدولتين
              </p>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                بعد سنوات من المفاوضات المكثفة والجهود الدبلوماسية، تم التوصل أخيرًا إلى اتفاق تاريخي بين الدولتين لإنهاء
                النزاع الذي استمر لعقود. وقد تم توقيع معاهدة السلام في حفل رسمي حضره قادة العالم وممثلو المنظمات
                الدولية.
              </p>
              <p>
                وصرح رئيس الدولة الأولى قائلاً: "هذا يوم تاريخي لشعبينا ولمنطقتنا بأكملها. لقد اخترنا طريق السلام
                والتعاون بدلاً من الصراع والمواجهة. إن هذه المعاهدة تمثل بداية حقبة جديدة من العلاقات بين بلدينا."
              </p>
              <h2>بنود الاتفاقية</h2>
              <p>تتضمن الاتفاقية عدة بنود رئيسية تشمل:</p>
              <ul>
                <li>إنهاء جميع أشكال العداء والصراع بين الدولتين</li>
                <li>فتح الحدود وتسهيل حركة التنقل بين البلدين</li>
                <li>إقامة علاقات دبلوماسية كاملة وتبادل السفراء</li>
                <li>التعاون الاقتصادي والتجاري وإزالة الحواجز الجمركية</li>
                <li>التعاون في مجالات الطاقة والمياه والبيئة</li>
              </ul>
              <p>
                من جانبه، أكد رئيس الدولة الثانية أن "هذه المعاهدة تمثل انتصارًا للعقل والحكمة على منطق الحرب والدمار.
                إننا نتطلع إلى مستقبل مشرق يسوده التعاون والازدهار المشترك."
              </p>
              <h2>ردود الفعل الدولية</h2>
              <p>
                رحبت الأمم المتحدة والمجتمع الدولي بهذه الخطوة التاريخية، واعتبروها نموذجًا يحتذى به في حل النزاعات
                الدولية بالطرق السلمية.
              </p>
              <blockquote>
                "هذه المعاهدة تثبت أن الدبلوماسية والحوار هما السبيل الوحيد لتحقيق السلام الدائم والعادل" - الأمين العام
                للأمم المتحدة
              </blockquote>
              <p>
                وقد أعلنت عدة دول عن استعدادها للمساهمة في دعم جهود إعادة الإعمار والتنمية في المناطق المتضررة من
                النزاع، وتقديم المساعدات الاقتصادية والفنية للدولتين.
              </p>
              <h2>التحديات المستقبلية</h2>
              <p>
                على الرغم من هذا الإنجاز التاريخي، لا تزال هناك تحديات كبيرة تواجه تنفيذ بنود المعاهدة، خاصة فيما يتعلق
                بترسيم الحدود وحل قضايا اللاجئين والنازحين، وإعادة إعمار المناطق المتضررة من النزاع.
              </p>
              <p>
                ويرى المحللون أن نجاح هذه المعاهدة سيعتمد بشكل كبير على مدى التزام الطرفين بتنفيذ بنودها، ودعم المجتمع
                الدولي لجهود السلام والتنمية في المنطقة.
              </p>
            </div>
            <Separator className="my-8" />
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  مشاركة
                </Button>
                <Button variant="outline" size="sm">
                  حفظ
                </Button>
                <Button variant="outline" size="sm">
                  طباعة
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Link href="#" className="text-sm font-medium hover:underline">
                  الأخبار السابقة
                </Link>
                <Separator orientation="vertical" className="h-4" />
                <Link href="#" className="text-sm font-medium hover:underline">
                  الأخبار التالية
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">أخبار ذات صلة</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <NewsCard
                title="انعقاد القمة الاقتصادية الدولية بمشاركة قادة الدول الكبرى"
                description="بدأت أعمال القمة الاقتصادية الدولية بمشاركة قادة الدول الكبرى لمناقشة التحديات الاقتصادية"
                category="سياسة"
                image="/placeholder.svg?height=400&width=600"
                date="منذ 4 ساعات"
              />
              <NewsCard
                title="تعيين سفراء جدد في عدة دول ضمن حركة التغييرات الدبلوماسية"
                description="أعلنت وزارة الخارجية عن تعيين سفراء جدد في عدة دول ضمن حركة التغييرات الدبلوماسية"
                category="سياسة"
                image="/placeholder.svg?height=400&width=600"
                date="منذ 7 ساعات"
              />
              <NewsCard
                title="إطلاق مبادرة دولية للتنمية المستدامة بتمويل قدره 10 مليارات دولار"
                description="تم إطلاق مبادرة دولية للتنمية المستدامة بتمويل قدره 10 مليارات دولار لدعم المشاريع البيئية"
                category="اقتصاد"
                image="/placeholder.svg?height=400&width=600"
                date="منذ 9 ساعات"
              />
            </div>
          </div>
        </article>
      </main>
      <NewsFooter />
    </div>
  )
}
