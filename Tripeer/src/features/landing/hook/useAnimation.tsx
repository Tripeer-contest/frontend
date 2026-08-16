import { RefObject, useEffect, useRef } from "react";

type targetElemnts  = (RefObject<HTMLElement|null>)[]

const ioCallback = (entries :  IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const targetElement = entry.target as HTMLElement
            targetElement.style.opacity = "1"
            targetElement.style.transform = `translate(0,0)`
        }
    })
}

export default function useAnimation(targets:targetElemnts) {
    const ioRef = useRef<null|IntersectionObserver>(null)

    useEffect(()=>{
        ioRef.current = new IntersectionObserver(ioCallback,{threshold: 0.5})
        targets.forEach(target => {
            if(target.current && ioRef.current){
                ioRef.current.observe(target.current)
            }
        })

        return() => {
            targets.forEach((target) => {
                if(target.current && ioRef.current){
                    ioRef.current.unobserve(target.current)
                }
            })
        }
    },[targets])
}