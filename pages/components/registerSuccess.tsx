import classNames from "classnames";
import React, { useEffect, useState } from "react"
import Confetti from 'react-confetti'
import { useWindowSize } from "react-use";

export default function registerSuccess() {
    const [isLoading, setIsLoading] = useState(true)
    const [isContentVisible, setIsContentVisible] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const { width, height } = useWindowSize()

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)

            setTimeout(() => {
                setIsContentVisible(true)
            }, 300);

            setTimeout(() => {
                setIsVisible(false)
            }, 5000);
        }, 1200);
    }, [])

    return (
        <div className="relative flex items-center justify-center w-screen min-h-screen p-12 text-gray-900 bg-gray-600">
            {isVisible && !isLoading && isContentVisible && (
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={400}
                    initialVelocityX={20}
                    initialVelocityY={10}
                    wind={0.05}
                    gravity={0.05}
                    recycle={false}
                />
            )}

            {isVisible && <div className={classNames("flex flex-col relative z-10 items-center justify-center overflow-y-auto w-full bg-white rounded shadow-lg bg-cover bg-center bg-no-repeat relative transition-all duration-300", {
                "max-w-4xl h-[35rem]": isLoading,
                "max-w-sm h-[24rem]": !isLoading,
            })}>
                {isLoading && <img src="https://cdn.dribbble.com/users/63485/screenshots/7739432/media/58d521274d14982e86e9c3fdb21af9c0.gif" className="absolute h-2/3 animate-move-left-right" />}

                {!isLoading && isContentVisible && (
                    <div className="relative flex flex-col">
                        <div className="p-8">
                            <h2 className="text-2xl font-medium text-center text-gray-600">
                                Fudeo
                            </h2>
                            <h1 className="text-3xl font-bold text-center">
                                Benvenuto!
                            </h1>

                            <div className="relative">
                                <span className="absolute text-6xl font-bold text-gray-200 select-none -left-2 -top-4">
                                    {"❝"}
                                </span>

                                <p className="relative mt-8 leading-6 text-center text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate optio ex quasi quaerat voluptatum facilis fugit quibusdam incidunt perspiciatis.
                                </p>

                                <h6 className="mt-4 font-medium text-center text-gray-600">
                                    - Team Fudeo
                                </h6>
                            </div>
                        </div>

                        <div className="h-1 rounded-r-full bg-emerald-500 animate-[width-to-100%_5s_normal_forwards_linear]"></div>
                    </div>
                )}
            </div>}
        </div>
    )
}
