import { useState } from 'react';
import './Card.css';
import { AnimateSharedLayout } from 'framer-motion';

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <AnimateSharedLayout>
            {expanded ? <ExpandedCard /> : <CompactCard />}
        </AnimateSharedLayout>
    );
};

// compact card
function CompactCard(){
    return(
        <div className="compactCard">
            <p>hi hi</p>
        </div>
    );
} 
    


// expanded card
function ExpandedCard(){
    return(
        <div className="expandedCard">
        <p>hii</p>
    </div>
    );
}  
    


export default Card;
