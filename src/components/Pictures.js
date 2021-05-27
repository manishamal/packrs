const Pictures = () => {
  return (
    <div className="section">
      <div className="container">
        <div classname="columns ">
          <div className="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://www.packrs.co/images/Become.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">Become a Packrs</p>
                    <p class="subtitle is-6">
                      Become a rider and enjoy the freedom to fit work around
                      your life. Plus great fees, perks and discounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://www.packrs.co/images/Partner.Png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>

              <div class="card-content">
                <div class="media">
                  <div class="media-right"></div>
                  <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pictures;
