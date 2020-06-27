import React from 'react'
import ReactPlayer from 'react-player'

const ReactPlayerDemo = () => {
	return (
		<div className='player'>
			<ReactPlayer
				controls
				width='1000px'
				height='500px'
        url='https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12'
        onReady={() => console.log('onReady')}
        onStart={() => console.log('onStart')}
        onPause={() => console.log('onPause')}
        onEnded={() => console.log('onEnded')}
        onError={() => console.log('onError')}
			/>
		</div>
	)
}

export default ReactPlayerDemo
