"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { modules } from '@/data/modules'
import { Footer } from '@/components/layout/Footer'
import {
  Heart, Users, Compass, Brain, MessageCircle,
  ArrowRight, CheckCircle2, Play, BookOpen, FileText,
  Smartphone, Shield, Award, Star, MessageSquare
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Heart, Users, Compass, Brain, MessageCircle
}

const features = [
  {
    icon: FileText,
    title: 'Apostilas Exclusivas',
    description: 'Material didático desenvolvido por especialistas em educação socioemocional'
  },
  {
    icon: Play,
    title: 'Vídeos Interativos',
    description: 'Aulas em vídeo que engajam e facilitam o aprendizado'
  },
  {
    icon: BookOpen,
    title: 'Revistas Digitais',
    description: 'Edições especiais com atividades práticas e reflexivas'
  },
  {
    icon: Smartphone,
    title: 'Acesso Mobile',
    description: 'Plataforma responsiva para estudar em qualquer lugar'
  },
  {
    icon: Shield,
    title: 'Ambiente Seguro',
    description: 'Conteúdo protegido e acesso controlado por perfil'
  },
  {
    icon: Award,
    title: 'Acompanhamento',
    description: 'Relatórios de progresso para alunos e professores'
  }
]

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Professora',
    school: 'Escola Municipal São Paulo',
    content: 'O CONVIVA+ transformou a forma como trabalhamos as competências socioemocionais. Os alunos estão mais engajados!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    name: 'Carlos Santos',
    role: 'Coordenador Pedagógico',
    school: 'Secretaria de Educação',
    content: 'Uma plataforma completa e intuitiva. Facilita muito o trabalho de gestão e acompanhamento dos conteúdos.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    name: 'Ana Oliveira',
    role: 'Mãe de Aluno',
    school: 'Escola Estadual Rio de Janeiro',
    content: 'Meu filho adora usar a plataforma. É fácil de navegar e os conteúdos são muito bem elaborados.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
]

const stats = [
  { value: '5.000+', label: 'Alunos ativos' },
  { value: '200+', label: 'Escolas parceiras' },
  { value: '50+', label: 'Conteúdos exclusivos' },
  { value: '98%', label: 'Satisfação' }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--surface)]/95 backdrop-blur border-b border-[var(--border)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                <span className="text-lg font-bold text-white">C+</span>
              </div>
              <span className="font-bold text-xl text-[var(--text-primary)]">
                CONVIVA<span className="text-[var(--primary)]">+</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                Recursos
              </a>
              <a href="#modules" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                Módulos
              </a>
              <a href="#testimonials" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                Depoimentos
              </a>
              <a href="#contact" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                Contato
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild variant="ghost">
                <Link href="/login">Entrar</Link>
              </Button>
              <Button asChild className="hidden sm:flex">
                <Link href="/login">Começar Agora</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-1 text-sm bg-[var(--primary)]/10 text-[var(--primary)] border-0">
              Plataforma de Educação Socioemocional
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
              Desenvolvendo competências para a{' '}
              <span className="text-[var(--primary)]">vida</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              O CONVIVA+ é uma plataforma educacional completa para desenvolver
              habilidades socioemocionais em estudantes, professores e famílias.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto">
                <Link href="/login">
                  Acessar Plataforma
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
                <a href="#features">
                  Conhecer Recursos
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto px-4 md:px-6 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center card-hover">
                <CardContent className="p-6">
                  <p className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[var(--surface)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-1 text-sm bg-[var(--secondary)]/10 text-[var(--secondary)] border-0">
              Recursos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Tudo que você precisa em uma plataforma
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Ferramentas completas para uma educação socioemocional efetiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-1 text-sm bg-[var(--accent)]/10 text-[var(--accent-foreground)] border-0">
              Módulos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Competências Socioemocionais
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Conteúdos organizados em módulos temáticos para um aprendizado progressivo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {modules.map((module) => {
              const Icon = iconMap[module.icon] || Heart
              return (
                <Card key={module.id} className="card-hover overflow-hidden">
                  <div
                    className="h-2"
                    style={{ backgroundColor: module.color }}
                  />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${module.color}20` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: module.color }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                          {module.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                          {module.description}
                        </p>
                        <p className="text-xs mt-3" style={{ color: module.color }}>
                          {module.totalItems} conteúdos disponíveis
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[var(--surface)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-1 text-sm bg-[var(--primary)]/10 text-[var(--primary)] border-0">
              Depoimentos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              O que dizem sobre nós
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Veja como o CONVIVA+ está transformando a educação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[var(--accent)] text-[var(--accent)]" />
                    ))}
                  </div>
                  <p className="text-[var(--text-secondary)] mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {testimonial.role} • {testimonial.school}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="relative p-8 md:p-12 gradient-primary">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Pronto para começar?
                </h2>
                <p className="text-white/80 mb-8">
                  Junte-se a milhares de educadores e alunos que já estão
                  transformando a educação com o CONVIVA+
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-[var(--primary)] hover:bg-white/90">
                    <Link href="/login">
                      Acessar Agora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <a href="#contact">
                      Fale Conosco
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[var(--surface)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center">
            <Badge className="mb-4 px-4 py-1 text-sm bg-[var(--secondary)]/10 text-[var(--secondary)] border-0">
              Contato
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Entre em contato
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Tem dúvidas ou quer saber mais? Estamos aqui para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <a href="mailto:contato@convivamais.edu.br">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  contato@convivamais.edu.br
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-[#25D366] text-white border-[#25D366] hover:bg-[#25D366]/90">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
