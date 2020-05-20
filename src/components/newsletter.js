import React from "react"
import styled from "@emotion/styled"

const Newsletter = () => {
  return (
    <div>
      <h1>
        I share my my thoughts and the things I learn about Coding and life
      </h1>
      <p>
        I'm currently working towards becoming a better Software Engineer/
        Human, and I want you to get better with me. So make sure you sign up to
        not miss out on any content that I publish.
      </p>
      <form>
        <input type="text" placeholder="your name" />
        <input type="email" placeholder="your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter
