import img from '../assets/envelope.svg'


export default function Flip (){


    return (
        <section>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={img} />
                  <h2></h2>
                </div>
                
                <div className="flip-card-back">
                  <img src={img} />
                  <h2></h2>
                  <h4>google.apps</h4>
                </div>
              </div>
            </div>
          </section>
    )
}