// app/download/page.tsx
import Tabs from '@/components/ui/tabs'
import { Download } from 'lucide-react'

export default function DownloadCV() {
  return (
    <>
      <Tabs />
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-black print:space-y-6">
          <h1 className="text-4xl font-bold text-white mb-12">
            Download My <span className="text-green-400">CV</span>
          </h1>

          <div className="p-6 rounded-lg border border-green-400/20 hover:border-green-400/40 transition-colors">
            <div className="text-center space-y-8">
              <p className="text-gray-300 text-lg">
                Get a PDF of my professional highlights, packed with skills,
                achievements, and just enough charm to impress.
              </p>

              <a
                href="/cv.pdf"
                download="BrunoSimplicioCV.pdf"
                className="group inline-flex items-center gap-3 bg-transparent hover:bg-green-400/10 text-green-400 px-8 py-4 border-2 border-green-400 rounded-lg transition-all duration-300 text-lg"
              >
                <Download
                  className="size-5 transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
                Download CV
              </a>

              {/* <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 text-sm rounded-full bg-green-400/10 text-green-400">
                  Experience
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-400/10 text-green-400">
                  Skills
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-400/10 text-green-400">
                  Education
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-400/10 text-green-400">
                  Projects
                </span>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
