import React, { useEffect, useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion';


function CollectionItem(props) {
  const { collection } = props;
  const divRef = useRef(null)
  const imgRef = useRef(null)
  const textRef = useRef(null)

  const isInView = useInView(divRef, { amount: 1, once: true })



  useEffect(() => {
    if (isInView) {
      animate(imgRef.current, { opacity: 1, y: 0 }, { duration: 0.7, type: 'spring', })
      animate(textRef.current, { opacity: 1, y: 0 }, { duration: 0.7, type: 'spring' })

    }
  }, [isInView])

  return (

    <motion.div
      ref={divRef}
      className='text-center text-dark-grey-blue 
      md:flex md:gap-x-8
      lg:flex-col lg:flex-1 '
    >
      <div className='md:flex-1 md:pt-4'>
        <motion.img
          src={collection.img}
          alt={collection.title}
          className='w-[200px] mx-auto lg:w-[225px]  '
          initial={{ opacity: 0, y: '-40px' }}
          ref={imgRef}
        />
      </div>
      <motion.div
      className='md:flex-1 
      md:text-left md:mt-[30px] 
      lg:text-center lg:mt-[72px] '
        ref={textRef}
        initial={{ opacity: 0, y: '40px' }}
      >
        <h2 className="heading-4 capitalize ">{collection.title}</h2>
        <p className="body-text mt-4 lg:mt-6">{collection.description}</p>
      </motion.div>
    </motion.div>

  )
}

export default CollectionItem
