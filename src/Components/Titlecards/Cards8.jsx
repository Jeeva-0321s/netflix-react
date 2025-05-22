import './Titlecards.css';
import Cards8_data from '../../assets/cards8/cards8_data';

const cards8 = ({title}) => {
    return (
      <div>
  <div className="title-card">
          <h2>{title ? title : 'On Netflix'}</h2>
          <div className="card-list2">
            {Cards8_data.map((card,index)=>{
            return <div className='card' key={index}>
              <img src={card.image} alt="" />
                  <p>{card.name}</p>
                </div>
  })}
           
          </div>
        </div>
      </div>
    );
  };

export default cards8;
  