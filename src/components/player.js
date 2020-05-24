// @jsx jsx
import { jsx, useThemeUI } from "theme-ui"
import React, { useEffect, createRef } from "react"
import AudioPlayer from "react-h5-audio-player"
import { useLocalStorage } from "../hooks/useLocalStorage"

const Player = ({ source, id }) => {
  const { theme } = useThemeUI()
  let [progress, setProgress] = useLocalStorage(`${id}`, 0)

  const player = createRef()

  const handleProgress = () => {
    progress = player.current?.audio.current.currentTime || 0
    setProgress(progress)
    return progress
  }
  const setCurrentTime = () =>
    (player.current.audio.current.currentTime = progress)
  const resetCurrentTime = () => (progress = 0)

  useEffect(() => {
    const onLoad = async () => {
      setCurrentTime()
    }
    onLoad()
  }, [])

  return (
    <AudioPlayer
      ref={player}
      src={source}
      controls
      onPause={() => handleProgress()}
      onPlay={() => {
        setCurrentTime()
      }}
      onEnded={() => resetCurrentTime()}
      onTimeUpdate={() => handleProgress()}
      layout="stacked-reverse"
      progressJumpSteps={{ backward: 10000, forward: 30000 }}
    />
  )
}

export default Player
