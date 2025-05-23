
import './Titlecards.css';
import cards_data from '../../assets/cards/Cards_data';


const Titlecards = ({title}) => {
  return (
    <div>
      <div className="title-card">
        <h2>{title ? title : 'Popular on Netflix'}</h2>
        <div className="card-list">
          {cards_data.map((card,index)=>{
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

export default Titlecards;
