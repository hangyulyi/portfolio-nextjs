'use client'

import React, { useEffect, useRef, useState } from 'react'

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 16;
const FRAME_COUNT = 2;
const ANIMATION_SPEED = 150;

type Action = 'left' | 'right' | 'idle' | 'mad' | 'sleep';

const AnimatedSprite: React.FC = () => {
    const [frame, setFrame] = useState(0)
    const [action, setAction] = useState<Action>('idle')
    const [position, setPosition] = useState({ x: 100, y:100})

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (intervalRef.current) clearInterval(intervalRef.current)
    })

    return (
        <div 
        
        />
    )
}

export default AnimatedSprite