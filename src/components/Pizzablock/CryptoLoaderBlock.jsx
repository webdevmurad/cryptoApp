import React from 'react'
import ContentLoader from "react-content-loader"

function CryptoLoaderBlock() {
    return (
        <div>
            <ContentLoader 
                speed={2}
                width={250}
                height={300}
                viewBox="0 0 250 300"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="NaN" rx="6" ry="6" width="84" height="NaN" /> 
                <rect x="17" y="435" rx="0" ry="0" width="5" height="7" /> 
                <rect x="-2" y="-3" rx="10" ry="10" width="250" height="300" />
            </ContentLoader>
        </div>
    )
}

export default CryptoLoaderBlock
