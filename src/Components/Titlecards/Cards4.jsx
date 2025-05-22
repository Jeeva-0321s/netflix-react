import './Titlecards.css';
import Cards4_data from '../../assets/cards4/cards4_data';

const cards4 = ({title}) => {
    return (
      <div>
  <div className="title-card">
          <h2>{title ? title : 'On Netflix'}</h2>
          <div className="card-list2">
            {Cards4_data.map((card,index)=>{
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

export default cards4;
  