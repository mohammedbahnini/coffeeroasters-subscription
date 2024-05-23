import React, { useEffect, useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion';

function StepItem(props) {
    const { step } = props;
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

    const isInView = useInView(ref, { once: true, amount: 0.5 })

    useEffect(() => {
        if (isInView) {
            // animate(titleRef.current, visibilityValues, options)
            // animate(subTitleRef.current, visibilityValues, {...options , delay : 0.2})
            // animate(descriptionRef.current, visibilityValues, {...options , delay : 0.4})

            animate([
                [titleRef.current ,  visibilityValues, options] , 
                [subTitleRef.current , visibilityValues, {...options , delay : 0}] , 
                [descriptionRef.current ,  visibilityValues, {...options , delay : 0}]
            ])

        }
    }, [isInView])

    return (
        <motion.div
            ref={ref}
            className='mt-20'
        >
            <motion.h1
                ref={titleRef}
                initial={{ opacity: 0, translateY: '-40px' }}
                className="text-[72px] font-black text-pale-orange text-center"
            >
                {step.order}
            </motion.h1>
            <motion.h2
                ref={subTitleRef}
                initial={{ opacity: 0, translateY: '-40px' }}
                className="heading-3 text-dark-grey-blue text-center mt-6"
            >
                {step.title}
            </motion.h2>
            <motion.p
                ref={descriptionRef}
                initial={{ opacity: 0, translateY: '-40px' }}
                className="body-text text-center text-dark-grey-blue mt-6 break-keemotion.p"
            >
                {step.description}
            </motion.p>
        </motion.div>

    )
}

export default StepItem
