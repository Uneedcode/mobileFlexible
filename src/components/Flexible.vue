<!--
 * @Author: your name
 * @Date: 2021-09-01 12:21:51
 * @LastEditors: your name
 * @LastEditTime: 2021-09-22 18:33:54
 * @Description: file content
-->
<template>
    <div class="dd">23423423</div>
</template>
<script>
export default {
    name:'Flexible',
    method(){
function objToArr(obj) {
    const arr = []
    for (let i in obj) {
        const o = {};
        o.name=i;
        o.value=obj[i];
        arr.push(o)
    }
    return arr;
}
let obj = { '未完成': 5, '已完成': 8, '待确认': 4, '已取消': 6 };
    objToArr(obj)
    }
}
</script>
<style scoped>
@media screen and (min-width: 480px) {  
    html{
        font-size: 16px;
    }
    .dd{
        background-color: green;
    }
}

@media screen and (min-width: 768px) {  
        html{
        font-size: 32px;
    }
    .dd{
        background-color: black;
    }
}
@media screen and (min-width: 992px) {  
        html{
        font-size: 48px;
    }
    .dd{
        background-color: #ff0;
    }
}

@media screen and (min-width: 1200px) {  
        html{
        font-size: 96x;
    }
    .dd{
        background-color: #f0f;
    }
}
.dd{
    width: 100px;
    height: 200px;
    font-size: 1rem;
}
</style>