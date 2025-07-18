"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Utensils } from "lucide-react"
import Image from "next/image"

interface MealPhotoProps extends React.HTMLAttributes<HTMLDivElement> {
  photoUrl?: string;
  mealType: string;
}

export function MealPhoto({ photoUrl, mealType, className, ...props }: MealPhotoProps) {
  return (
    <div
      className={cn(
        "relative flex h-40 w-40 overflow-hidden rounded-lg bg-muted shrink-0",
        className
      )}
      {...props}
    >
      {photoUrl ? (
        <div className="relative h-full w-full">
          <Image
            src={photoUrl}
            alt={`${mealType} meal`}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Utensils className="h-8 w-8" />
            <span className="text-sm">Add Photo</span>
          </div>
        </div>
      )}
    </div>
  )
} 