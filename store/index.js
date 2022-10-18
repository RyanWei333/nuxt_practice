export const actions = {
  async nuxtServerInit(store, context) {
    //可以在這裡初始一些內容到store中
    await console.log("nuxtSeverInit!!!");
  },
};
