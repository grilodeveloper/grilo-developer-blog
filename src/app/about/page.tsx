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
    'Sou o Jhonnyssom Silva, mais conhecido como Grilo. Programador Frontend, esposo, pai e entusiasta de ciclismo e corrida.',
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
            Hello! I&apos;m Jhonnyssom Silva, also known as Grilo. I&apos;m a
            Frontend developer, husband, father, and passionate about cycling
            and running.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I started programming in 2024 — pretty recent, I know. Before
              that, I worked in IT for about 10 years, focusing on user support,
              infrastructure, networking, and information security. In 2023, I
              decided it was time for a change and began studying web
              development. Today, I’m a Frontend Developer focused on React,
              Next.js, Tailwind, and the whole ecosystem that makes modern web
              development so exciting.
            </p>
            <p>
              I got my first opportunity as a developer at Nivello Tecnologia,
              the company where I currently work as part of the Ybera Group
              team. I started as an intern for 12 months, and after that period,
              I was hired full-time. Now I work as a Frontend Developer,
              creating modern, high-performance interfaces and constantly
              striving to improve my skills as a programmer.
            </p>
            <p>
              Outside of tech, I’m married to Bruna, my wife and life partner
              for over 10 years. Together, we have a 5-year-old daughter named
              Mariana, our greatest joy. She’s a bright and curious child who’s
              always learning new things. Being a father is an incredible
              experience, and I’m deeply grateful to be part of her growth every
              day.
            </p>
            <p>
              I’m also passionate about sports — especially cycling and running.
              Whenever I can, I’m out riding or running, pushing my limits and
              challenging myself to get better every day. dia.
            </p>
            <p>
              This blog is a space where I share my experiences as a developer,
              coding tips, personal projects, and reflections on life. I hope
              you enjoy the content and feel free to interact and leave a
              comment.
            </p>
            <p>Thanks for visiting my blog — let’s keep growing together!</p>
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
