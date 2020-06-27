import React from 'react'
import { css } from '@emotion/core'
import {BounceLoader, BarLoader, BeatLoader} from 'react-spinners'

const loaderCSS = css`
  margin: 25px 0 25px 0;
`

const ReactSpinnersDemo = () => {
  return (
    <div className='spinners'>
      <BounceLoader css={loaderCSS} size={24} color='red' loading/>
      <BarLoader css={loaderCSS} size={48} color='yellow' loading />
      <BeatLoader css={loaderCSS} size={72} color='green' loading />
    </div>
  )
}

export default ReactSpinnersDemo
