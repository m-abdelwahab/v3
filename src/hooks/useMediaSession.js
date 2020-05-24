import React, { useEffect, useRef, useState } from "react"

export default ({
  element,
  mediaMetadata: { title, album, artist, artwork },
  controls,
}) => {
  if (!("mediaSession" in navigator)) {
    return
  }

  useEffect(() => {
    if (!element) {
      return
    }

    navigator.mediaSession.metadata = new MediaMetadata({
      title,
      artist,
      album,
      artwork,
    })

    Object.keys(controls).forEach(e =>
      navigator.mediaSession.setActionHandler(e, controls[e])
    )
  }, [element])
  return
}
