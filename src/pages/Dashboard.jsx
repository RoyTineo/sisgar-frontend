import React from "react";

function Dashboard() {
  return (
    <div>
      
        {/* Info boxes */}
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-info elevation-1">
                <i className="fas fa-cog" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Notificaciones Realizadas</span>
                <span className="info-box-number">
                  10
                  <small>%</small>
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1">
                <i className="fas fa-thumbs-up" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Audiencias realizadas</span>
                <span className="info-box-number">41,410</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          {/* fix for small devices only */}
          <div className="clearfix hidden-md-up" />
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1">
                <i className="fas fa-shopping-cart" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Resoluciones emitidas</span>
                <span className="info-box-number">760</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1">
                <i className="fas fa-users" />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Docuementos ingresados</span>
                <span className="info-box-number">2,000</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}

       
        </div>
      
  
  );
}

export default Dashboard;
