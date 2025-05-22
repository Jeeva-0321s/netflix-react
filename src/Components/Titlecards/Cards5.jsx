import './Titlecards.css';
import Cards5_data from '../../assets/cards5/cards5_data';

const cards5 = ({title}) => {
    return (
      <div>
  <div className="title-card">
          <h2>{title ? title : 'On Netflix'}</h2>
          <div className="card-list2">
            {Cards5_data.map((card,index)=>{
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

export default cards5;
  