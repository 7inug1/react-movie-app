import React from 'react'
import styled, {css} from 'styled-components'

const DescriptionComponent = ({type,...props})=>{
    return <Description type={type}>{props.children}</Description>
}

export default DescriptionComponent;

