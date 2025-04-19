import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface FeaturedNewsCardProps {
  title: string
  description: string
  category: string
  image: string
  date: string
  isBreaking?: boolean
}

export function FeaturedNewsCard({
  title,
  description,
  category,
  image,
  date,
  isBreaking = false,
}: FeaturedNewsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={1200}
          height={600}
          className="w-full object-cover aspect-[2/1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="secondary">{category}</Badge>
            {isBreaking && <Badge variant="destructive">عاجل</Badge>}
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-white/80 mb-2 line-clamp-2">{description}</p>
          <p className="text-white/60 text-sm">{date}</p>
        </div>
      </div>
    </Card>
  )
}
