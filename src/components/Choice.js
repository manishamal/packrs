const data =[{"name":"test1"},{"name":"test2"}];

const Choice = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="has-text-centered is-size-2 has-text-weight-semibold has-text-black">
          You want it, we deliver it
        </h1>
        <div class="columns">
          <div class="column">
          <div>
        {data.map(function(d, idx){
          return (<li key={idx}>{d.name}</li>)
        })}

      </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Choice;
