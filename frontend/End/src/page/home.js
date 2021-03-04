import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import SidebarMenu from "../atoms/sideBarMenu";

import { loadUser } from '../state/thunks';

function HomePage({getUser}){
useEffect(()=>{
getUser();
}, [])

return(
    <SidebarMenu>

    </SidebarMenu>

)
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);