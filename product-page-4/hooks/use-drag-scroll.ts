"use client"

import { useRef, useEffect, useState } from "react"

export function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const slider = ref.current
    if (!slider) return

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true)
      setStartX(e.pageX - slider.offsetLeft)
      setScrollLeft(slider.scrollLeft)
      slider.style.cursor = "grabbing"
      slider.style.userSelect = "none"
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      if (slider) {
        slider.style.cursor = "grab"
        slider.style.removeProperty("user-select")
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 2 // Scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk
    }

    const handleMouseLeave = () => {
      setIsDragging(false)
      if (slider) {
        slider.style.cursor = "grab"
        slider.style.removeProperty("user-select")
      }
    }

    slider.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mousemove", handleMouseMove)
    slider.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mousemove", handleMouseMove)
      slider.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isDragging, startX, scrollLeft])

  return { ref, isDragging }
}

