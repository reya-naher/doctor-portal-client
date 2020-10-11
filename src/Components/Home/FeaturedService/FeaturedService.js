import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
  return (
    <div>
      <section className="features-service pb-0 pb-md-5 my-5">
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-md-5 mb-4 m-md-0">
              <img src={featured} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-7 align-self-center">
              <h1>Exceptional Dental Care, on Your Term</h1>
              <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iste tenetur nesciunt dignissimos explicabo possimus fuga aliquam quas? Ipsum eum tempore, placeat veritatis consequuntur ab sint quaerat nisi inventore ipsa voluptate nulla dolorum quia fugit labore saepe laudantium quo sapiente. Nemo, blanditiis repellat iusto provident quidem fugit. Exercitationem, nobis distinctio!</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default FeaturedService;