import Link from 'next/link'
import { MailIcon, PhoneIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RESUME_DATA } from '@/data/'

export default async function Bio() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-black print:space-y-6">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-white text-5xl font-extrabold  text-center">
            Hi, I am <span className="text-green-400">Bruno</span>
          </h1>
          <div className="flex-col py-20 text-justify">
            <p className="text-white text-base p-4">
              With a solid <span className="text-green-400">decade</span> in the
              tech trenches, I am a committed software engineer passionate about
              building robust and scalable applications
            </p>
            <p className="text-white text-base p-4">
              {`I'm`} fluent in{' '}
              <span className="text-green-400">Typescript</span> and have a
              talent for crafting code {`that's`} both powerful and easy to
              manage
            </p>
            <p className="text-white text-base p-4">
              Eager to ride the wave of new technologies and level up my skills,{' '}
              {`I'm`} always up for a new challenge.
            </p>
            <p className="text-white text-base p-4">
              If you want to know a little more about my professional
              experience, just check it out my{' '}
              <Link href="/cv">
                <span className="text-green-400">CV</span>
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <div className="flex gap-x-4 pt-1 font-mono text-sm text-muted-foreground print:hidden justify-center">
        {RESUME_DATA.contact.email ? (
          <Button
            className="size-14 border-green-400 hover:text-green-400"
            variant="outline"
            size="icon"
            asChild
          >
            <a href={`mailto:${RESUME_DATA.contact.email}`}>
              <MailIcon className="size-4" />
            </a>
          </Button>
        ) : null}
        {RESUME_DATA.contact.tel ? (
          <Button
            className="size-14 border-green-400 hover:text-green-400"
            variant="outline"
            size="icon"
            asChild
          >
            <a href={`tel:${RESUME_DATA.contact.tel}`}>
              <PhoneIcon className="size-4" />
            </a>
          </Button>
        ) : null}
        {RESUME_DATA.contact.social.map((social) => (
          <Button
            key={social.name}
            className="size-14 border-green-400 hover:text-green-400"
            variant="outline"
            size="icon"
            asChild
          >
            <a href={social.url}>
              <social.icon className="size-4" />
            </a>
          </Button>
        ))}
      </div>
    </main>
  )
}
