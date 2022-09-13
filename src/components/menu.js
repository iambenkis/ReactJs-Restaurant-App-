const dishes = [
  {
    dishImg: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    dishPrice: 10,
    dishName: 'Aloo gobi',
  },
  {
    dishImg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
    dishPrice: 10,
    dishName: 'Butter chicken',
  },
  {
    dishImg: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    dishPrice: 10,
    dishName: 'Chana masala',
  },
  {
    dishImg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
    dishPrice: 10,
    dishName: 'Palak paneer',
  },
  {
    dishImg: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    dishPrice: 10,
    dishName: 'Chicken tikka masala',
  },
  {
    dishImg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
    dishPrice: 10,
    dishName: 'Fish curry',
  },
];
const dishTags = [];
dishes.map((dish) => {
  dishTags.push(
    <div className="dish">
      <img src={dish.dishImg} />
      <div className="details">
        <p>{dish.dishName}</p>
        <h5>{dish.dishPrice}</h5>
      </div>
    </div>,
  );
});
const Menu = (props) => (
  <div className="menu">
    <div className="menu-content">
      <div className="menu-text">
        <p className="try-text">TRY & DISCOVER</p>
        <h3>OUR DISHES</h3>
        <p className="desc-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.
          Utenim ad minim veniam, quis nostrud. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam!
        </p>
      </div>
      <div className="dishes">
        {dishTags}
      </div>
    </div>
  </div>
);

export default Menu;
