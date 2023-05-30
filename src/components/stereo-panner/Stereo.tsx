import { PlayPauseIcon } from '@heroicons/react/20/solid'
import audioFile from '../../assets/GalaxyGroove.mp3'

export default function Stereo() {
    const audio = new Audio(audioFile)

    return (
        <> 
        <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
            <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
                <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                    <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                        <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>
                                <span className="text-sky-600">Stereo Panner</span> accepts an input audio signal and applies panning to adjust the balance between the left and right channels
                                <span className="mt-2 block text-base font-normal">
                                    By adjusting the panning value dynamically or programmatically, you can create various panning effects, simulate audio movement,
                                    or position the audio in different locations within the stereo field
                                </span>
                            </p>
                        </blockquote>
                    </div>
                    <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                        <img 
                            src="https://a-us.storyblok.com/f/1014535/1024x1024/db80e433f4/web-stereo-hero2.png"
                            alt="stereo panner"
                            className="rounded-xl bg-indigo-50 lg:rounded-3xl"
                        />
                    </div>
                    <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                        <div className="font-semibold text-gray-900">Stereo Panner Demo</div>
                        <div className="mt-1 text-sky-600">
                            <PlayPauseIcon 
                                className="w-8 h-8 hover:text-sky-500" 
                                onClick={() => audio.paused ? audio.play() : audio.pause()}
                            />
                           {/*  <input 
                                type="range"
                                min="-1"
                                max="1"
                                step="0.1"
                                defaultValue="0"
                                className="w-full mt-2"
                                onChange={() => { 
                                    const panner = new StereoPannerNode(audioContext, { pan: parseFloat((event.target as HTMLInputElement).value) })
                                    const source = audioContext.createMediaElementSource(audio)
                                    source.connect(panner).connect(audioContext.destination)

                                    audio.play()

                                    audio.addEventListener('ended', () => {
                                        audio.currentTime = 0
                                        audio.play()
                                    })
                                }} 
                            /> */}
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
        </>
    )
}