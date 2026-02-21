import { useRef, useEffect, useState } from 'react'

/**
 * ShineAnchor
 * - Scroll triggers a "shine" effect (light passing through).
 * - Wraps a standard <a> tag.
 */
export default function ShineAnchor({ children, className = '', ...props }) {
    const ref = useRef(null)
    const [isShining, setIsShining] = useState(false)
    const [hasShined, setHasShined] = useState(false) // 一度光ったら終わりにするか、毎回か

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 画面に入った、かつまだ光っていない場合（あるいは毎回光らせるなら hasShined チェックを外す）
                    if (entry.isIntersecting) {
                        setIsShining(true)
                        // アニメーション完了後にstateを戻す（連続動作やリセット用）
                        // CSSアニメーションが1.11sなので、少し余裕を持ってリセット
                        setTimeout(() => {
                            setIsShining(false)
                        }, 1300)
                    }
                })
            },
            {
                threshold: 0.2, // 20%見えたら発火
                rootMargin: '0px 0px -50px 0px' // 少し内側で発火
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, []) // 毎回光らせるため依存なし（厳密にはcallback変えないならOK）

    return (
        <a
            ref={ref}
            className={`btn-shine-effect ${isShining ? 'is-shining' : ''} ${className}`}
            {...props}
        >
            {children}
        </a>
    )
}
