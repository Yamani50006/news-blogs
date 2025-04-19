"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

const breakingNews = [
  "الاتفاق التاريخي: توقيع معاهدة السلام بين الدولتين",
  "ارتفاع مؤشرات البورصة بنسبة 5٪ مع زيادة حجم التداول",
  "المنتخب الوطني يتأهل للنهائيات بعد مباراة مثيرة",
  "إطلاق أحدث هاتف ذكي بتقنيات متطورة وسعر منافس",
]

export function BreakingNewsBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % breakingNews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + breakingNews.length) % breakingNews.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % breakingNews.length)
  }

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-white text-primary">
            عاجل
          </Badge>
          <div className="flex-1 overflow-hidden relative">
            <div className="flex items-center whitespace-nowrap">
              <span className="animate-marquee inline-block px-4">{breakingNews[currentIndex]}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={handlePrev} className="p-1 rounded-full hover:bg-primary-foreground/10">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">السابق</span>
            </button>
            <button onClick={handleNext} className="p-1 rounded-full hover:bg-primary-foreground/10">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">التالي</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
