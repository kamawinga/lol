import React from 'react';
import YouTube from "react-youtube";

export default class YouTubeVideo  
extends React.Component {

    render() { 
        const opts = { 
          height: "449", 
          width: "736", 
          playerVars: { 
            autoplay: 0,
          },
        }; 
      
        return (
            <div className='flex flex-col w-full items-center justify-center'>
                <div className='flex flex-col w-[800px] items-center justify-center relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-dark dark:border-light md:order-1'
                >
                    <div
                        className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'
                    />
                    <div className='flex w-full flex-col items-center justify-center' >
                        <YouTube videoId="OX_m0SuT28I" opts={opts} onReady={this._onReady} />
                    </div>
                </div>
            </div>
        )
    }
    
  _onReady(event) { 
    event.target.pauseVideo(); 
  }
}
