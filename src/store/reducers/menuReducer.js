const initialState = {
  cart: [
    {
      name: "可乐 600g",
      count: 102,
      money: 3,
    },
    {
      name: "营养快线 600g",
      count: 100,
      money: 5,
    },
    {
      name: "红烧牛肉面(康师傅)",
      count: 300,
      money: 4.5,
    },
  ],
};
export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
}
