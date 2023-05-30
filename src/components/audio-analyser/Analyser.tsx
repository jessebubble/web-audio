import { PlayPauseIcon } from '@heroicons/react/20/solid'
import audioFile from "../../assets/GalaxyGroove.mp3"

export default function Analyser() {
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
                <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                    <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                        <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                            <p>
                                <span className="text-sky-600">AudioAnalyser</span> is a built in node that takes an input audio source and performs a Fast Fourier Transform (FFT) on the audio data to obtain frequency domain information
                                <span className="mt-2 block text-base font-normal">
                                    This allows you to analyze the intensity or volume of specific frequency ranges in the audio and use the data to visualize the audio or apply audio effects based on specific frequency ranges
                                </span>
                            </p>
                        </blockquote>
                    </div>
                    <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                        <canvas id="canvas" className="rounded-xl w-full h-72">
                                                  
                        </canvas>
                    </div>
                    <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                        <div className="font-semibold text-white">Audio Analyser Demo</div>
                        <div className="mt-1 text-sky-600">
                            <PlayPauseIcon 
                                className="w-8 h-8 hover:text-sky-500" 
                                onClick={toggleAudio}
                            />
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
        </>
    )
}