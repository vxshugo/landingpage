
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='page-scroll' href='#page-top'>
            <img width={100} src="img/logo.png" alt=""/>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Проекты
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                О нас
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Подать заявку
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Контакты
              </a>
            </li>
            <li style={{marginTop: 12}}>
              <select className="selectpicker" data-width="fit">
                <option data-content='<span class="flag-icon flag-icon-us"></span> English'>English</option>
                <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Руссий</option>
                <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Эспаниоль</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
