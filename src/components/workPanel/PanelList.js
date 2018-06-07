import React from 'react';
import SinglePanel from './SinglePanel';


const PanelList = ({ data }) => {
    const panelComponent = data.map(panel => {
        return <SinglePanel 
                    img1={panel.img1}
                    img2={panel.img2}
                    img3={panel.img3}
                    title={panel.title}
                    styleBg={panel.styleBg}
                    language={panel.language}
                    url={panel.url}
                    description={panel.description} />
    })
    return (
        <div className="row container mx-auto">
        {panelComponent}
        </div>
    )
}

export default  PanelList;