import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  description: string
  category: string
  image: string
  date: string
  isBreaking?: boolean
}

export function NewsCard({ title, description, category, image, date, isBreaking = false }: NewsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full object-cover aspect-[3/2]"
        />
        {isBreaking && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            عاجل
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <Badge variant="outline">{category}</Badge>
          <h3 className="font-bold line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-xs text-muted-foreground">{date}</span>
        <Link href="#" className="text-xs font-medium hover:underline">
          اقرأ المزيد
        </Link>
      </CardFooter>
    </Card>
  )
}
