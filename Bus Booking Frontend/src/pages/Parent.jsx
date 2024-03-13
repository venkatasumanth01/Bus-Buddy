import {Route,Routes} from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Signin from "./Signin";
import HomePage from "./HomePage";
import BusSelection from "./BusSelection";
import Form from "./Form";
import Ticket from "../components/Ticket";
import TicketsPage from "../pages/TicketsPage";
import Home from "../admin/Home";
import AddBus from "../admin/AddBus";
import ViewBus from "../admin/ViewBus";
import EditBus from "../admin/EditBus";
import AdminBusSection from "../admin/AdminBusSection";
import AdminPage from "../admin/AdminPage";
import ViewTickets from "../admin/ViewTickets";

const Parent=()=>{
    return(
        <>
            <Routes>
                <Route path="" element={<LandingPage></LandingPage>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="signin" element={<Signin></Signin>}></Route>
                <Route path="homepage" element={<HomePage></HomePage>}></Route>
                <Route path="busselection" element={<BusSelection></BusSelection>}></Route>
                <Route path="form" element={<Form></Form>}></Route>
                <Route path="ticket" element={<Ticket></Ticket>}></Route>
                <Route path="ticketspage" element={<TicketsPage></TicketsPage> } ></Route>
                <Route path="home" element={<Home></Home> }></Route>
                <Route path="addBus" element={<AddBus></AddBus>}></Route>
                <Route path="viewBus" element={<ViewBus></ViewBus> }></Route>
                <Route path="editbus/:id" element={<EditBus></EditBus>}></Route>
                <Route path="adminpage" element={<AdminPage></AdminPage>}></Route>
                <Route path="adminbussection" element={<AdminBusSection></AdminBusSection>}></Route>
                <Route path="viewTickets" element={<ViewTickets></ViewTickets>}></Route>
            </Routes>
        </>
    )
}
export default Parent;