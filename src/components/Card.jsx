
const Card = () => {
  return(
      <div className="card card-price">
          <div className="card-img">
              <div>
                  <a href="#" style={{backgroundColor: "#000", opacity: 0.7}} >
                      <img src="https://www.investinregions.ru/upload/resize_cache/iblock/6ca/1312_266_2/123-_1_.jpg" className="img-responsive"/>
                  </a>
              </div>
          </div>
          <div className="card-body" style={{textAlign: "left"}}>
              <div className="price">
                  <p style={{fontWeight: 600, color: "#000"}}>
                      БЮДЖЕТ
                      350 000
                  </p>
                  <br/>
                  ОБЪЕМ ТРЕБУЕМЫХ ИНВЕСТИЦИЙ
                  280 000  тыс. руб.</div>
              <div className="lead">Wrap yourself in luxury</div>
              <ul className="details">
                  <li>A stitch in time saves nine.</li>
                  <li>All good things come to those who wait.</li>
                  <li><b>Shipping:</b> $10 in USA, $15 outside USA</li>
              </ul>
              <a href="#" className="btn btn-primary btn-lg btn-block buy-now">
                  Подробнее
              </a>
          </div>
      </div>
  )
}

export default Card