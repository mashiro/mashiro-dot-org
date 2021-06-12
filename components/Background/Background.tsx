import { useEffect, useState } from 'react'
import Unity, { UnityContext } from 'react-unity-webgl'
import styles from './Background.module.css'

const BUILD_DIR = 'background'
const BUILD_NAME = 'background'
const BUILD_EXT = '.br'

const unityContex = new UnityContext({
  loaderUrl: `${BUILD_DIR}/${BUILD_NAME}.loader.js`,
  dataUrl: `${BUILD_DIR}/${BUILD_NAME}.data${BUILD_EXT}`,
  frameworkUrl: `${BUILD_DIR}/${BUILD_NAME}.framework.js${BUILD_EXT}`,
  codeUrl: `${BUILD_DIR}/${BUILD_NAME}.wasm${BUILD_EXT}`,
})

type BackgroundProps = {}

export const Background: React.FC<BackgroundProps> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    unityContex.on('loaded', () => {
      setTimeout(() => {
        setIsLoaded(true)
      }, 2000)
    })
  }, [])

  return (
    <Unity
      className={styles.background}
      style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
      unityContext={unityContex}
    ></Unity>
  )
}
