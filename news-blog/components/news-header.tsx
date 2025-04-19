"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, X } from "lucide-react"

export function NewsHeader() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium">
                الرئيسية
              </Link>
              <Link href="/politics" className="text-lg font-medium">
                سياسة
              </Link>
              <Link href="/economy" className="text-lg font-medium">
                اقتصاد
              </Link>
              <Link href="/sports" className="text-lg font-medium">
                رياضة
              </Link>
              <Link href="/tech" className="text-lg font-medium">
                تكنولوجيا
              </Link>
              <Link href="/culture" className="text-lg font-medium">
                ثقافة
              </Link>
              <Link href="/science" className="text-lg font-medium">
                علوم
              </Link>
              <Link href="/environment" className="text-lg font-medium">
                بيئة
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-4 flex items-center space-x-2">
          <span className="text-xl font-bold">المدونة الإخبارية</span>
        </Link>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary ml-4">
            الرئيسية
          </Link>
          <Link
            href="/politics"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary ml-4"
          >
            سياسة
          </Link>
          <Link
            href="/economy"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary ml-4"
          >
            اقتصاد
          </Link>
          <Link
            href="/sports"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary ml-4"
          >
            رياضة
          </Link>
          <Link
            href="/tech"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary ml-4"
          >
            تكنولوجيا
          </Link>
          <Link
            href="/culture"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary ml-4"
          >
            ثقافة
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {showSearch ? (
            <div className="relative flex items-center">
              <Input type="search" placeholder="بحث..." className="w-[200px] sm:w-[300px] pl-8" />
              <Button variant="ghost" size="icon" className="absolute left-0" onClick={() => setShowSearch(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">إغلاق البحث</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">بحث</span>
            </Button>
          )}
          <Button variant="outline" size="sm" className="hidden sm:flex">
            تسجيل الدخول
          </Button>
          <Button size="sm" className="hidden sm:flex">
            اشترك الآن
          </Button>
        </div>
      </div>
    </header>
  )
}
