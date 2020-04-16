var r = require.context("./users", true, /.vue/);
var arr = [];
r.keys().forEach((key) => {
  var _keyarr = key.split(".");
  if(key.indexOf("index") != -1 ){
    arr.push({
      path: _keyarr[1],
      name: _keyarr[2],
      component: r(key).default
    })
  }else{
    arr.push({
      path: _keyarr[1] + '/' + _keyarr[2],
      name: _keyarr[2],
      component: r(key).default
    })
  }
})
export default arr;

// 打包速度优化的总结
// 1  处理的内容多少  处理步骤多少
// 2  能少处理的就少处理
// 3  我们能够减少一些处理步骤


// 打包优化 --> dll优化
// 先预处理第三方库( vue vue-router  axios  loadsh)   告诉我们的真正打包不需要处理这些