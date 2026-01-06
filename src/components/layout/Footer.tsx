import React from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md gradient-primary">
              <span className="text-xs font-bold text-white">C+</span>
            </div>
            <span className="text-sm text-[var(--text-secondary)]">
              © {currentYear} CONVIVA+. Todos os direitos reservados.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/termos"
              className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacidade"
              className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/ajuda"
              className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
            >
              Ajuda
            </Link>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
            Feito com <Heart className="h-4 w-4 text-[var(--primary)] fill-[var(--primary)]" /> para a educação
          </div>
        </div>
      </div>
    </footer>
  )
}
