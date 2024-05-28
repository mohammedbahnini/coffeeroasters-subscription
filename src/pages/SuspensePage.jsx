import React, { Suspense, useEffect, useState } from 'react'
import PageLoader from '../components/Common/PageLoader';

function SuspensePage(props) {
    const { page } = props;

    const [isVisible , setIsVisible] = useState(false);

    useEffect(()=>{
        setIsVisible(false)
        setTimeout(() => {
            setIsVisible(true)
        }, 500);
    } , [page])
    return (
        <Suspense>
            { isVisible ? page : <PageLoader /> }
        </Suspense>
    )
}

export default SuspensePage
