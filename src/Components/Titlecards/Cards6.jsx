import './Titlecards.css';
import Cards6_data from '../../assets/cards6/cards6_data';

const cards6 = ({title}) => {
    return (
      <div>
  <div className="title-card">
          <h2>{title ? title : 'On Netflix'}</h2>
          <div className="card-list2">
            {Cards6_data.map((card,index)=>{
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

export default cards6;
  