import HomeComp from './components/Views/Home.vue';
import PlansComp from './components/Views/Plans.vue';
import UsersComp from './components/Views/Users.vue';
import EventComp from './components/Views/Events.vue';
import TeamComp from './components/Views/Team.vue';
import MemberComp from './components/Views/Membership.vue';
import PurchasesComp from './components/Views/Purchases.vue';
import StaffsComp from './components/Views/Staffs.vue';
import AttendanceComp from './components/Views/Attendance.vue';
import SettingsComp from './components/Views/Settings.vue';
import AboutComp from './components/Views/About.vue';
import ServicesComp from './components/Views/Services.vue';



export const routes = [
    {path:'/', component:HomeComp},
    {path:'/Users', component:UsersComp},
    {path:'/Plans', component:PlansComp},
    {path:'/Events', component:EventComp},
    {path:'/Team', component:TeamComp},
    {path:'/Membership', component:MemberComp},
    {path:'/Purchases', component:PurchasesComp},
    {path:'/Staffs', component:StaffsComp},
    {path:'/Attendance', component:AttendanceComp},
    {path:'/Settings', component:SettingsComp},
    {path:'/About', component:AboutComp},
    {path:'/Services', component:ServicesComp},
]