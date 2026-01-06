"use client"

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Content } from '@/types'

interface VideoPlayerProps {
  content: Content | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function VideoPlayer({ content, open, onOpenChange }: VideoPlayerProps) {
  if (!content) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle>{content.title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe
            src={content.url}
            title={content.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-4 pt-2">
          <p className="text-sm text-[var(--text-secondary)]">
            {content.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
