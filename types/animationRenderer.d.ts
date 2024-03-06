declare namespace AnimatedJava {
    export interface IAnimationNode {
        type: 'bone' | 'camera' | 'locator'
        name: string
        uuid: string
        node?: Group | NullObject | Locator | OutlinerElement
        matrix: THREE.Matrix4
        pos: THREE.Vector3
        rot: THREE.Quaternion
        scale: THREE.Vector3
        interpolation?: 'instant' | 'default'
    }
    export interface IRenderedFrame {
        time: number
        nodes: IAnimationNode[]
        variant?: {
            uuid: string
            executeCondition: string
		}
        commands?: {
            commands: string
            executeCondition: string
		}
        animationState?: {
            animation: string
            executeCondition: string
		}
		teleport?: THREE.Vector3
        playSound?: {
            name: string
            category: string
            volume: string
        };
    }

    export interface IRenderedAnimation {
        name: string
        startDelay: number
        loopDelay: number
        frames: IRenderedFrame[]
        /**
         * Duration of the animation in ticks (AKA frames). Same as animation.frames.length
         */
        duration: number
        loopMode: 'loop' | 'once' | 'hold'
    }
}