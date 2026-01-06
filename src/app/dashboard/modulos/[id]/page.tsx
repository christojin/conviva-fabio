"use client"

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { modules } from '@/data/modules'
import { getContentByModule } from '@/data/content'
import { userModuleProgress } from '@/data/activity'
import { ContentCard } from '@/components/content/ContentCard'
import { VideoPlayer } from '@/components/content/VideoPlayer'
import { PDFViewer } from '@/components/content/PDFViewer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Content } from '@/types'
import {
  ArrowLeft, Heart, Users, Compass, Brain, MessageCircle,
  FileText, Play, BookOpen, ExternalLink, CheckCircle
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Heart, Users, Compass, Brain, MessageCircle
}

export default function ModuleDetailPage() {
  const params = useParams()
  const moduleId = parseInt(params.id as string)

  const [selectedContent, setSelectedContent] = useState<Content | null>(null)
  const [videoOpen, setVideoOpen] = useState(false)
  const [pdfOpen, setPdfOpen] = useState(false)

  const module = modules.find(m => m.id === moduleId)
  const contents = getContentByModule(moduleId)
  const progress = userModuleProgress.find(p => p.moduleId === moduleId)

  if (!module) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--text-muted)]">Módulo não encontrado</p>
        <Button asChild variant="link" className="mt-4">
          <Link href="/dashboard/modulos">Voltar aos módulos</Link>
        </Button>
      </div>
    )
  }

  const Icon = iconMap[module.icon] || Heart

  const apostilas = contents.filter(c => c.type === 'apostila')
  const videos = contents.filter(c => c.type === 'video')
  const revistas = contents.filter(c => c.type === 'revista')
  const links = contents.filter(c => c.type === 'link')

  const handleViewContent = (content: Content) => {
    setSelectedContent(content)
    if (content.type === 'video') {
      setVideoOpen(true)
    } else if (content.type === 'apostila' || content.type === 'revista') {
      setPdfOpen(true)
    } else if (content.type === 'link') {
      window.open(content.url, '_blank')
    }
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Back button */}
      <Button asChild variant="ghost" className="mb-4">
        <Link href="/dashboard/modulos">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar aos Módulos
        </Link>
      </Button>

      {/* Module header */}
      <Card className="overflow-hidden border-0 shadow-lg">
        <div
          className="relative p-6 md:p-8"
          style={{ backgroundColor: `${module.color}15` }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div
              className="p-4 rounded-xl shadow-lg flex-shrink-0"
              style={{ backgroundColor: module.color }}
            >
              <Icon className="h-10 w-10 text-white" />
            </div>

            <div className="flex-1">
              <Badge
                variant="outline"
                className="mb-2"
                style={{ borderColor: module.color, color: module.color }}
              >
                Módulo {module.order}
              </Badge>
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
                {module.title}
              </h1>
              <p className="text-[var(--text-secondary)]">
                {module.description}
              </p>
            </div>

            {/* Progress */}
            {progress && (
              <div className="w-full md:w-48 p-4 rounded-xl bg-white/80 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[var(--text-primary)]">Progresso</span>
                  <span className="text-lg font-bold" style={{ color: module.color }}>
                    {progress.progress}%
                  </span>
                </div>
                <Progress value={progress.progress} indicatorColor={module.color} className="h-2 mb-2" />
                <p className="text-xs text-[var(--text-muted)]">
                  {progress.completedItems} de {progress.totalItems} itens concluídos
                </p>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Content tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="all">
            Todos ({contents.length})
          </TabsTrigger>
          <TabsTrigger value="apostilas">
            <FileText className="h-4 w-4 mr-1 hidden sm:inline" />
            Apostilas ({apostilas.length})
          </TabsTrigger>
          <TabsTrigger value="videos">
            <Play className="h-4 w-4 mr-1 hidden sm:inline" />
            Vídeos ({videos.length})
          </TabsTrigger>
          <TabsTrigger value="revistas">
            <BookOpen className="h-4 w-4 mr-1 hidden sm:inline" />
            Revistas ({revistas.length})
          </TabsTrigger>
          <TabsTrigger value="links">
            <ExternalLink className="h-4 w-4 mr-1 hidden sm:inline" />
            Links ({links.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contents.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onView={() => handleViewContent(content)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="apostilas" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apostilas.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onView={() => handleViewContent(content)}
              />
            ))}
          </div>
          {apostilas.length === 0 && (
            <p className="text-center py-8 text-[var(--text-muted)]">Nenhuma apostila neste módulo</p>
          )}
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onView={() => handleViewContent(content)}
              />
            ))}
          </div>
          {videos.length === 0 && (
            <p className="text-center py-8 text-[var(--text-muted)]">Nenhum vídeo neste módulo</p>
          )}
        </TabsContent>

        <TabsContent value="revistas" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revistas.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onView={() => handleViewContent(content)}
              />
            ))}
          </div>
          {revistas.length === 0 && (
            <p className="text-center py-8 text-[var(--text-muted)]">Nenhuma revista neste módulo</p>
          )}
        </TabsContent>

        <TabsContent value="links" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((content) => (
              <ContentCard
                key={content.id}
                content={content}
                onView={() => handleViewContent(content)}
              />
            ))}
          </div>
          {links.length === 0 && (
            <p className="text-center py-8 text-[var(--text-muted)]">Nenhum link neste módulo</p>
          )}
        </TabsContent>
      </Tabs>

      {/* Video player modal */}
      <VideoPlayer
        content={selectedContent}
        open={videoOpen}
        onOpenChange={setVideoOpen}
      />

      {/* PDF viewer modal */}
      <PDFViewer
        content={selectedContent}
        open={pdfOpen}
        onOpenChange={setPdfOpen}
      />
    </div>
  )
}
