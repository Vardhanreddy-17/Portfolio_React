import React from 'react';
import "./OnlinePlatforms.css"

function OnlinePlatforms() {
    const leetCodeStatsCardURL = `https://leetcard.jacoblin.cool/2100032328?theme=forest&font=Alice&ext=heatmap`;
    const codeforcesStatsCardURL = `https://codeforces-readme-stats.vercel.app/api/card?username=Vardhanreddy_18`;

    return (
        <div className='Codingplatforms wrapper'>
        <h1 className='Heading'>Coding Platforms</h1>
        <div className='container'>
            <div className='coding-content-left'>
                <h2 className='Heading'>LeetCode Stats</h2><br/>
                <img src={leetCodeStatsCardURL} alt="LeetCode Stats Card" /><br/>
            </div>
            
            <div className='coding-content-right'>
            <h2 className='Heading'>Codeforces Stats</h2><br/>
                <div className='card'>
                    <img src={codeforcesStatsCardURL} alt="Codeforces Stats Card" />
                   
                </div>
            </div> 
        </div>
        </div>
        
    );
}

export default OnlinePlatforms;
