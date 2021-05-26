const data1 = [
  { icon: 'fas fa-cube', list: 'Lorem ipsum dolor sit amet' },
  { icon: 'fas fa-cube', list: 'Lorem ipsum dolor sit amet' },
];

const Choice = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="has-text-centered is-size-2 has-text-weight-semibold has-text-black">
          You want it, we deliver it
        </h1>
        <div class="columns">
          <div class="column">
            <h1 className="">Any product you need</h1>
            <p className="">From food, fruits, gifts to keys we can get it for you!</p>
          </div>
          <div class="column">Second column</div>
          <div class="column">Third column</div>
          <div class="column">Fourth column</div>
        </div>
      </div>
    </div>
  );
};
export default Choice;
