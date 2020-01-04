
import Home from './components/Home.vue';
import Header from './components/Header.vue';
// this is for lazy loading the components
// it's webpack syntax, it's lioke  a promece
// this elements can be bundled using groups
const User= resolve=>{
    require.ensure(['./components/user/User.vue'],()=>{
        resolve(require('./components/user/User.vue'))
    },'user' )
};
const UserStart= resolve=>{
    require.ensure(['./components/user/UserStart.vue'],()=>{
        resolve(require('./components/user/UserStart.vue'))
    },'user')
};

const UserDetail= resolve=>{
    require.ensure(['./components/user/UserDetail.vue'],()=>{
        resolve(require('./components/user/UserDetail.vue'))
    },'user')
};
const UserEdit= resolve=>{
    require.ensure(['./components/user/UserEdit.vue'],()=>{
        resolve(require('./components/user/UserEdit.vue'))
    },'user')
};


// import Home from './components/Home.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue';



// each route is an object
export const routes=[
    // {
    //     path:'/user',
    //     component:User
    // },
    {
        path:'/user',
        components:{
            default:User,
            'header-bottom':Header
        },
        // add to get child routes
        children:[
            {
                path:'',
                component:UserStart
            },
            {
                path:':id',
                component:UserDetail,
                // this guards the route
                beforeEnter: (to,from,next)=>{
                    console.log("scoped guard");
                    next();

                }
            },
            {
                path:':id/edit',
                component:UserEdit,
                name:'userEdit'
            }
        ]
    },
    {
        // this could work for creating layouts???
        path:'/',
        name:'home',
        components:{
            default:Home,
            'header-top':Header
        }
    },
    // this is for redirecting when they are at the wrong page
    {
        path:'/redirect-me',redirect:{
            name:'home'
        }
    },
    // this redirectes all the non specified routes to home
    // |* is the  catch aLL
    {
        path:'*',redirect:{
            name:'home'
        }
    }
]