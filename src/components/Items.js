const data1 = [];

const Items = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="has-text-centered is-size-2 has-text-weight-semibold has-text-black">
          What can get delivered with PACKRS
        </h1>
        <div class="columns is-multiline">
          {data1.map((item) => (
            <div class="column is-4 ">First column</div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Items;
