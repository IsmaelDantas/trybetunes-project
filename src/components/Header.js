import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    }, async () => {
      this.setState({
        user: await getUser(),
        loading: false,
      });
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <div>
        {
          loading && <Loading />
        }
        <header data-testid="header-component" className="header-container">
          <h1>TrybeTunes</h1>
          <span className="user-container">
            {
              user.image === ''
                ? (
                  <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg" alt="user icon" />
                )
                : (
                  <img src={ user.image } alt="foto de perfil do usuario" />
                )
            }
            <p data-testid="header-user-name">
              { user.name }
            </p>
          </span>
        </header>
        <nav className="nav-container">
          <Link
            to="/search"
            data-testid="link-to-search"
            className="nav-container-link"
          >
            Pesquisar
          </Link>
          <Link
            to="/favorites"
            data-testid="link-to-favorites"
            className="nav-container-link"
          >
            Favoritos
          </Link>
          <Link
            to="/profile"
            data-testid="link-to-profile"
            className="nav-container-link"
          >
            Perfil
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
