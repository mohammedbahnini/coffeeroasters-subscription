import React, { useEffect, useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion';
import cn from 'classnames'

function StepItem(props) {
    const { step, index, stepsCount } = props;
    const ref = useRef(null)
    const titleRef = useRef(null)
    const subTitleRef = useRef(null)
    const descriptionRef = useRef(null)
    const options = {
        duration: 0.5
    };
    const visibilityValues = {
        opacity: 1, translateY: 0
    }

    const isInView = useInView(ref, { once: true, amount: 0.7 })

    useEffect(() => {
        if (isInView) {

            animate([
                [titleRef.current, visibilityValues, options],
                [subTitleRef.current, visibilityValues, { ...options, delay: 0 }],
                [descriptionRef.current, visibilityValues, { ...options, delay: 0 }]
            ])

        }
    }, [isInView])

    return (
        <motion.div
            ref={ref}
            className='mt-20 text-center relative
            md:text-left md:flex-1 md:mt-10 md:pt-20 md:[&:not(:last-child)]:pr-[10px]
            lg:mt-[80px] lg:[&:not(:last-child)]:pr-[95px] lg:pt-[100px]
            '
        >
            <div className='absolute w-full flex-1 flex items-center top-0 hidden invisible md:flex md:visible ' key={index}>
                <span className='w-[31px] aspect-square border-dark-cyan border-2 block rounded-full '></span>
                <span className={cn('h-[2px] bg-pale-orange block w-full  ', { 'hidden': index === stepsCount - 1 })}></span>
            </div>

            <motion.h1
                ref={titleRef}
                initial={{ opacity: 0, translateY: '-40px' }}
                className="text-[72px] md:leading-none font-black text-pale-orange  "
            >
                {step.order}
            </motion.h1>
            <motion.h2
                ref={subTitleRef}
                initial={{ opacity: 0, translateY: '-40px' }}
                className="heading-3 text-dark-grey-blue  mt-6 md:mt-[42px] lg:mr-8 lg:mt-10  "
            >
                {step.title}
            </motion.h2>
            <motion.p
                ref={descriptionRef}
                initial={{ opacity: 0, translateY: '-40px' }}
                className="body-text text-dark-grey-blue mt-6  md:mt-[38px] lg:mt-[42px]  "
            >
                {step.description}
            </motion.p>
        </motion.div>

    )
}

export default StepItem
