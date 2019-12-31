
import User from './components/user/User.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue';



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
                component:UserDetail
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