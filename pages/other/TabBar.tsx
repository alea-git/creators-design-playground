import classNames from "classnames";
import {
    Swiper as ReactSwiper,
    SwiperSlide as ReactSwiperSlide,
} from "swiper/react"
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Tab } from '@headlessui/react'
import { useHoverDirty } from "react-use";


export default function TabBarScreen() {
    let [categories] = useState({
        Recent: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
        Popular2: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending2: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
        Trending3: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
        Trending4: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })

    const tabBarLayoutRef = useRef(null)
    const tabRefs = Object.keys(categories).map(_ => useRef<any>())
    const [hoverIndicatorBounds, setHoverIndicatorBounds] = useState({
        width: 0,
        left: 0,
    })
    const [hoverIndicatorVisible, setHoverIndicatorVisible] = useState(false)

    const onChange = (index: number) => {
        console.log("ref", tabRefs)
        const bounds = tabRefs[index].current.getBoundingClientRect()
        const tabBarLayoutBounds =
            tabBarLayoutRef.current.getBoundingClientRect()

        const width = bounds.width + 10
        const left = bounds.left - tabBarLayoutBounds.left - 5

        console.log("bounds", tabBarLayoutBounds, bounds)

        setHoverIndicatorVisible(true)
        setHoverIndicatorBounds({ width, left })
    }

    return (
        <div
            ref={tabBarLayoutRef}
            className="w-full max-w-md px-2 py-16 sm:px-0"
        >
            <Tab.Group onChange={onChange}>
                <Tab.List className="relative bg-gray-200">


                    <ReactSwiper
                        loop={false}
                        grabCursor={true}
                        slidesPerView={
                            Object.keys(categories).length <= 2
                                ? Object.keys(categories).length
                                : "auto"
                        }
                        className="relative w-full"
                    >
                        <div className="absolute inset-0 py-1 bg-red-400">
                            <div
                                style={{
                                    opacity: hoverIndicatorVisible ? 1 : 0,
                                    width: hoverIndicatorBounds.width,
                                    left: hoverIndicatorBounds.left,
                                }}
                                className={classNames(
                                    "h-full transition-all duration-100 rounded-md relative bg-white shadow",
                                )}
                            />
                        </div>

                        {Object.keys(categories).map((category, index) => (
                            <ReactSwiperSlide
                                key={category}
                                style={{
                                    width: "auto",
                                }}
                            >
                                <FragmentTab
                                    ref={tabRefs[index]}
                                    text={category} />
                            </ReactSwiperSlide>
                        ))}
                    </ReactSwiper>
                </Tab.List>
            </Tab.Group>
        </div>
    )
}

const FragmentTab = React.forwardRef<HTMLButtonElement, {
    text: string,
}>((props, ref) => {
    return (
        <Tab as={Fragment}>
            {({ selected }) => (
                <div>
                    <button
                        ref={ref}
                        className='w-full px-4 py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg focus:outline-none'
                    >
                        {props.text}
                    </button>
                </div>
            )}
        </Tab>
    )
})
