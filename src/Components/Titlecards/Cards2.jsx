import './Titlecards.css';
import Cards2_data from '../../assets/cards2/Cards2_data';

const cards = ({title}) => {
    return (
      <div>
  <div className="title-card">
          <h2>{title ? title : 'On Netflix'}</h2>
          <div className="card-list2">
            {Cards2_data.map((card,index)=>{
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

export default cards;
  