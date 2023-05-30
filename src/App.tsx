import { PlayPauseIcon } from "@heroicons/react/20/solid"
import audioFile from './assets/GalaxyGroove.mp3'
import Analyser from "./components/audio-analyser/Analyser"
import Stereo from "./components/stereo-panner/Stereo"

// Basic play/pause example
export default function App() { 
    const audio = new Audio(audioFile)
    
    const toggleAudio = () => {
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
        }
    }

    return (
        <> 
        <section className="isolate overflow-hidden bg-black px-6 lg:px-8">
            <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
                <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),black)] opacity-20 lg:left-36" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-black shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
                <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                    <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                        <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                            <p>
                                The <span className="text-sky-500">Web Audio API</span> is a powerful tool for working with audio in the browser. It allows you to create and manipulate audio sources, effects, and analyzers in real time
                                <span className="mt-2 block text-base font-normal">
                                    This page is built with Vite, TailwindCSS and contains a collection of demos that demonstrate some of the capabilities of the Web Audio API
                                </span> 
                            </p>
                        </blockquote>
                    </div>
                    <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                        <img
                        className="rounded-xl bg-indigo-50 lg:rounded-3xl"
                        src="https://a-us.storyblok.com/f/1014535/1024x1024/b7d5537439/web-audio-hero.png"
                        alt="blue aztex boombox"
                        />
                    </div>
                    <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                        <div className="font-semibold text-white">Play/Pause Demo</div>
                        <div className="mt-1 text-sky-500">
                            <PlayPauseIcon 
                                className="w-8 h-8 hover:text-sky-600" 
                                onClick={toggleAudio}
                            />
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
        <Stereo />
        <Analyser />
        </>
    )
}