import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderSpinner = (props) => (
  
    <Dimmer active inverted>
      <Loader inverted content={props.text} size={'large'}/>
    </Dimmer>

    
 
)

export default LoaderSpinner
