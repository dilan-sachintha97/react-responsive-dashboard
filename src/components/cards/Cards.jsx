import { cardData } from '../../data/Data'
import Card from '../card/Card'
import './Cards.css'

const Cards = () => {
  return (
    <div  className='cards'>
        {
            cardData?.map((data,index)=>(
                <div key={index} className="parentContainer">
                    <Card
                        title={data.title}
                        color={data.color}
                        barValue={data.barValue}
                        value={data.value}
                        png={data.png}
                        series={data.series}
                    />
                </div>
            ))
        }
    </div>
  )
}

export default Cards
