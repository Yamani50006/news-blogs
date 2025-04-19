import { Button } from "@/components/ui/button"
import Link from "next/link"

export function NewsFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">المدونة الإخبارية</h3>
            <p className="text-sm text-muted-foreground">
              موقع إخباري شامل يقدم أحدث الأخبار المحلية والعالمية في مختلف المجالات
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">فيسبوك</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">تويتر</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">انستغرام</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">لينكد إن</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">الأقسام</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                الرئيسية
              </Link>
              <Link href="/politics" className="text-sm text-muted-foreground hover:text-foreground">
                سياسة
              </Link>
              <Link href="/economy" className="text-sm text-muted-foreground hover:text-foreground">
                اقتصاد
              </Link>
              <Link href="/sports" className="text-sm text-muted-foreground hover:text-foreground">
                رياضة
              </Link>
              <Link href="/tech" className="text-sm text-muted-foreground hover:text-foreground">
                تكنولوجيا
              </Link>
              <Link href="/culture" className="text-sm text-muted-foreground hover:text-foreground">
                ثقافة
              </Link>
              <Link href="/science" className="text-sm text-muted-foreground hover:text-foreground">
                علوم
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">روابط مهمة</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                من نحن
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                اتصل بنا
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                شروط الاستخدام
              </Link>
              <Link href="/advertise" className="text-sm text-muted-foreground hover:text-foreground">
                أعلن معنا
              </Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                وظائف
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">اشترك في النشرة الإخبارية</h3>
            <p className="text-sm text-muted-foreground">احصل على أهم الأخبار مباشرة إلى بريدك الإلكتروني</p>
            <form className="space-y-2">
              <div className="space-y-2">
                <label htmlFor="footer-email" className="sr-only">
                  البريد الإلكتروني
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button className="w-full">اشترك الآن</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2023 المدونة الإخبارية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
