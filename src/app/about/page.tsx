import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Sobre mim',
  description:
    'Sou o Jhonnyssom Silva, mais conhecido como Grilo. Desenvolvedor Frontend, esposo, pai e entusiasta de ciclismo e corrida.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Olá! Eu sou o Jhonnyssom Silva, mais conhecido como Grilo. Sou um
            desenvolvedor Frontend, esposo, pai e apaixonado por ciclismo e
            corrida.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Comecei a programar em 2024 — bem recente eu sei. Antes disso,
              trabalhei na área de TI por 10 anos mais ou menos, atuando com
              suporte ao usuário, infraestrutura, redes e segurança da
              informação. Em 2023, decidi que era hora de mudar e comecei a
              estudar desenvolvimento web. Hoje sou desenvolvedor Frontend, com
              foco em React, Next.js, Tailwind CSS e todo o ecossistema que
              envolve o desenvolvimento web.
            </p>
            <p>
              Tive minha primeira oportunidade como desenvolvedor na Nivello
              Tecnologia, empresa onde atuo atualmente como parte do time do
              Ybera Group. Estagiei por 12 meses e, após esse período, fui
              efetivado. Hoje trabalho como desenvolvedor Frontend, criando
              interfaces modernas e performáticas, sempre buscando aprimorar
              minhas habilidades como programador.
            </p>
            <p>
              Fora da tecnologia, sou casado com a Bruna, minha esposa há 10
              anos, minha companheira de vida. Juntos, temos uma filha chamada
              Mariana de 5 anos, que é a nossa maior alegria. Mariana é uma
              criança muito inteligente e curiosa, e está sempre aprendendo
              coisas novas. Ser pai é uma experiência incrível, e me sinto muito
              grato por poder acompanhar o crescimento dela de perto.
            </p>
            <p>
              Também sou apaixonado por esportes, especialmente ciclismo e
              corrida de rua. Sempre que posso, estou pedalando ou correndo por
              aí, explorando meus limites e me desafiando a ser melhor a cada
              dia.
            </p>
            <p>
              Este blog é um espaço onde compartilho minhas experiências como
              desenvolvedor, dicas de programação, projetos pessoais e reflexões
              sobre a vida. Espero que você goste do conteúdo e se sinta à
              vontade para interagir e comentar.
            </p>
            <p>Obrigado por visitar meu blog! Vamos juntos nessa jornada.</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/jhonnyssomsilva" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/grilodeveloper"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/grilodeveloper"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/jhonnyssomsilva"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:jhonnyssomux@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jhonnyssomux@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
