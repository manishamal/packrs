import Items from './Items';

const data = [
  {
    icon: '',
    title: 'Any product you need',
    subtitle: 'From food, fruits, gifts to keys we can get it for you!',
  },
  {
    title: '45 mins delivery',
    subtitle:
      'Time us - Your ordered stuff will be dilivered in maximum 45 minutes',
  },
  {
    title: 'Save time & money',
    subtitle:
      'No need to go outside and waste time and energy, we are here for you.',
  },
  {
    title: 'Earn cash and free deliveries',
    subtitle:
      'Spread the word! Refer us and you will be awarded free deliveries',
  },
];

const Choice = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="has-text-centered is-size-2 has-text-weight-semibold has-text-black">
          You want it, we deliver it
        </h1>
        <div class="columns is-multiline pt-6">
          {data.map((Item) => (
            <div className="column is-6">
              <div key={Item.title}>
                {Item.icon}
                <h1 className="title is-3 pt-1 has-text-black">{Item.title}</h1>
                <p className="subtitle is-4">
                  {Item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Choice;
