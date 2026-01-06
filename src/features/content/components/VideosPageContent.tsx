"use client"

import React, { useState } from 'react'
import { Video } from 'lucide-react'
import { Content } from '@/types'
import { getContentByType } from '@/data/content'
import { ContentPageHeader } from './ContentPageHeader'
import { ContentList } from './ContentList'
import { StatsBadge } from '@/components/shared'
import { VideoPlayer } from '@/components/content/VideoPlayer'

export function VideosPageContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [moduleFilter, setModuleFilter] = useState('all')
  const [selectedContent, setSelectedContent] = useState<Content | null>(null)
  const [videoOpen, setVideoOpen] = useState(false)

  const videos = getContentByType('video')

  const filteredVideos = videos.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesModule = moduleFilter === 'all' || content.moduleId.toString() === moduleFilter
    return matchesSearch && matchesModule
  })

  const handleView = (content: Content) => {
    setSelectedContent(content)
    setVideoOpen(true)
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <ContentPageHeader
        title="Vídeos"
        description="Videoaulas e conteúdos audiovisuais"
        icon={Video}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        moduleFilter={moduleFilter}
        onModuleFilterChange={setModuleFilter}
        searchPlaceholder="Buscar vídeos..."
      />

      <div className="flex gap-4 flex-wrap">
        <StatsBadge label={`${filteredVideos.length} vídeos disponíveis`} color="primary" />
      </div>

      <ContentList
        contents={filteredVideos}
        emptyIcon={Video}
        emptyMessage="Nenhum vídeo encontrado"
        onView={handleView}
      />

      <VideoPlayer
        content={selectedContent}
        open={videoOpen}
        onOpenChange={setVideoOpen}
      />
    </div>
  )
}
