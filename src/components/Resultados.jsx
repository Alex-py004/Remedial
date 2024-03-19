import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Resultados() {
  const apiKey = 'Py8J2Tp8nzHVR3BXpYUz2BdGp2fVckoq';
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`
    ).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setResultados(data.results.books);
      });
    });
  }, [apiKey]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Los Más Vendidos del New York Times</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="">Alex Gurrola</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          {resultados.map((libro) => (
            <div key={libro.primary_isbn10} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={libro.book_image} className="card-img-top" alt={libro.title} />
                <div className="card-body">
                  <h5 className="card-title">{libro.title}</h5>
                  <p className="card-text">Autor: {libro.author}</p>
                  <p className="card-text">Editorial: {libro.publisher}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resultados;
