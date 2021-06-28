import styled from 'styled-components';

const Wrapper = styled.section`
  svg {
    color: rgb(234, 190, 74);
    font-size: 68px;
  }
`;

const data = [
  {
    icon: 'fas fa-stopwatch',
    title: 'Any product you need',
    subtitle: 'From food, fruits, gifts to keys we can get it for you!',
  },
  {
    icon: 'fas fa-map-marked-alt',
    title: '45 mins delivery',
    subtitle:
      'Time us - Your ordered stuff will be dilivered in maximum 45 minutes',
  },
  {
    icon: 'fas fa-piggy-bank',
    title: 'Save time & money',
    subtitle:
      'No need to go outside and waste time and energy, we are here for you.',
  },
  {
    icon: 'fas fa-gift',
    title: 'Earn cash and free deliveries',
    subtitle:
      'Spread the word! Refer us and you will be awarded free deliveries',
  },
];

const Choice = () => {
  return (
    <Wrapper className="section">
      <div className="container">
        <h1 className="mb-1 has-text-centered is-size-2 has-text-weight-semibold has-text-black">
          You want it, we deliver it
        </h1>
        <div className="columns is-multiline pt-6">
          {data.map((item) => (
            <div className="column is-6 mb-6" key={item.title}>
              <article className="media">
                <div className=" media-left">
                  <i className={item.icon} />
                </div>

                <div className="media-content">
                  <div className="content">
                    <h1>{item.title}</h1>
                    <span className="is-size-6 has-text-weight-bold has-text-black">
                    <p>{item.subtitle}</p>
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default Choice;
