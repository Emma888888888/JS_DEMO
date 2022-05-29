// console.log("hello world 2");
// {
// let my_name="Emma"
// console.log(my_name);
// my_name='Shiya'
// console.log(my_name);

// var something='abc'
// console.log(something);

// let firstName="Emma", lastName='Zhang'
// firstName=undefined
// firstName=null
// console.log(firstName);
// }

// // `` can change line, ''/"" both ok, 
// // can add string


// {
// let a=1.1
// console.log(a);
// let b='this is a b'
// let b_1="this is a b_1"
// let b_3='he said:"ddsfasfaf"'
// let b_4=`he said: ${b}`
// console.log(b_4);
// let b_5='he said:'+b
// console.log(b_5);

// let b_6=''+1
// console.log(b_6, typeof b_6);
// let b_7=+''
// console.log(b_7, typeof b_7);

// /**
//  * TODO:xxxxx 
//  * FIXME:yyyyy
//  * 
//  */

// /**
//  * false=f=0
//  * true=1
//  */
// let c=true // true false
// let d=undefined
// let e=null

// // if(c){
// //     console.log("good");
// //     if(d){
// //         console.log("d good")
// //     }else{
// //         console.log("d bad")
// //     }
// // } else {
// //     console.log("bad");
// // }

// /**
//  * if (c) {console.log("good")} 
//  * - can run, but no else to be defined
//  * also, cant add two console.log
//  */

// if (c){
//     console.log("good");
// }else if(d){
//     console.log("bad");
// }else if(e){
//     console.log("ok");
// }else{

// }


// }

// {

//     let obj={
//         name:"Emma",
//         age:16,
//         }
    
//     console.log(obj)
//     console.table(obj)

//     obj.income=0
//     console.table(obj);

//     obj['name']='Shiya'
//     console.table(obj);

//     obj['names']='ahdsdsds'
//     console.log(obj);

// }

{
    let obj={
        name:"Emma",
        age:16,
        }


    let a=1
    let b=a

    console.log(a,b);
    b=2
    console.log(a,b);

    let obj_2=obj
    console.log(obj,obj_2);

    obj_2.age=30
    console.log(obj,obj_2);

    let obj_3={...obj}
    console.log(obj,obj_3);
    obj_3.age=100
    console.log(obj,obj_3);

    let user={
        name: "Emma",
        age: 18,
        profile: {
            cv: "https://xxxx",
            id: 1212121212
        }

    }

    let user2= {...user}
    user2.name="Peter"
    console.log(user,user2);

    user2.profile.id=787878789
    console.log(user,user2);

}


{
let array=[1,2,3,"4",true, {name:"Emma"}]
console.log(array[6]);

array[0]="sddddd"
console.table(array);
// 改了array_1, array也会改
let array_1=array
array_1[4]=false
console.table(array);

console.log(array.length);
console.log(array[6]);
array[100]=78
console.log(array[100]);
console.log(array.length);
array[100].name="Shiya"
console.log(array[100]);
console.log(array[100].name);

array[101]={}
array[101].name="Shiya"
console.log(array[101]);

}

{
    const password="sssssssssss"
    // password='yyyyyyyyy'
    // console.log(password);
    // console lock it, no change can be made for password

    let password2="hhhhhhh"
    password2='kkkkkkk'
    console.log(password2);

    const obj={
        name: "shiya"
    }

    obj.name="shasha"
    // obj=1212
    console.log(obj);

}

{
let x=10
let y=3
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
// 求余数 %
console.log(x%y); 
// ** 开根  10*10*10
console.log(x**y);
console.log(Math.sqrt(100));
// ++ 先使用再加一
console.log(x++);
console.log(x);
// -- 先使用再减一
console.log(x--);
console.log(x);
// 先相加，再使用 （加号在前）
console.log(x);
console.log(++x);
console.log(x);
// 先相减，再使用 （减号在前）
console.log(x);
console.log(--x);
console.log(x);
}

{
    let x=10
    x++
    x=x+5
    x+=5
    x-=5
    x*=5
    x**=5
    x/=5
    x%=5

    // homework: x ?? 5 = ? origin? when effect?

}

{
    let x=1
    console.log(x>1);
    console.log(x>=1);
    console.log(x<1);
    console.log(x<=1);
    
    console.log(x==1);
    console.log(x===1);
// =： 赋予
// ==: 判断x的数值value是否相等
console.log(0==false);
console.log(0!=false);

// ===: 判断type和value 是否相等
console.log(0===false);
console.log(0!==false);
// 0=false, 1=true, 其他都不能对应
console.log(true==1);
console.log(true==2);

}

{
    // 方法一
    let points=100
    if (points>100) {
        console.log('gold');
    } else {
        console.log('silver');
    }
// 方法二：三联运算符 (statement ? x : y)
// if yes: x; if no: y
let type=points >100 ? 'gold' : 'silver'
console.log(points >100 ? 'gold' : 'silver')

}

{
// and,or,not // &&
// && 两个都为真，才是真
// 严格模式（line 1加一句：use strict(诸多限制，，非严格模式（没写let也可）
//  严格模式：无let会显示dayTime is not defined 非严格模式没事
console.log(true && true);
let dayTime=8
if(dayTime >18 && dayTime < 24){
    console.log('night');
} else {
    console.log('day');
}

// || or 判断
console.log(false || true);
if((dayTime >18 && dayTime < 24) || 
  (dayTime >0 && dayTime < 6) ) {
    console.log('night');
} else {
    console.log('day');
}

// shift + command + p: command 各种选择下拉菜单
// ：123 一键跳转123行

}

{
// truthy, falsthy 看起来像真，像假
// '0' represent true, any number represent that number;
// only 0 is special, other number only represent number
console.log(0 || false);
console.log(3 || false);
console.log(null || false);
console.log(undefined || false);
console.log(NaN || false);

console.log(3 || false);
// 前面真，优先选择前面的，前面假，选后，都假，啥不选= 选择器
console.log(false || 10); 
console.log(4 || 10);

// 端口号:没人设置，我就用5666；有人设置，就不用了
// 环境有，优先使用环境port，否则用我自己设的
const PORT =5666
const PORT =process.env.PORT || port 
// ! 取反，真的反是假，！！ 取两次反
// true 不等于 ！= 2 or true == 2是错的，但if给2取反是false(!2=false)
console.log(!!!!!!!true);
console.log(true == 2);
console.log(!2);

}
