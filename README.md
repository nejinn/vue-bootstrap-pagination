# vue-bootstrap-pagination
vue bootstrap有一个很强大的组件bootstrap-vue。但是这个组件的分页貌似并不支持前后端分离的分页。
我至少是每页看出来。如果有看出来的请告诉我。
如果有用这个组件的同学可以跟我交流。
QQ：871966163
直通车[bootstrap-vue](https://bootstrap-vue.js.org/docs/)

自己写了个分页组件，开箱即用。


## 参数

组件参数 | 类型 |  默认值 | 描述|  
-|-|- |-|
total | 数字、字符串 | 1 | 数据总量 |
size | 数字、字符串 | 10 | 每页数量 |
currentPage | 数字、字符串 | 1 | 当前页码 |
limit | 数字、字符串 | 5 | 分页元素 |
align | 字符串 |  | 分页位置，默认是左边，可以选'left','center','right' |
firstFunction | 函数 |  | 第一页按钮函数 |
prevFunction | 函数 |  | 上一页按钮函数 |
currentFunction | 函数 |  | 点击页码函数 |
nextFunction | 函数 |  | 下一页页码函数 |
lastFunction | 函数 |  | 最后一页页码函数 |
sizeFunction | 函数 |  | 修改每页数量自动执行函数 |

## 函数
名称 | 描述|  
-|-|
getCurrentPage | 获取分页当前页码 |


## 效果图

![效果图](https://github.com/nejinn/vue-bootstrap-pagination/blob/master/pg.gif)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

打开
```
http://localhost:8080/pagination

```
可以查看demo
