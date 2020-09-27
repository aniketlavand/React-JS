import React from 'react';
import "./style.css"
import UserCard from '../UserCard/index';

class UserGallery extends React.Component{

    constructor(props){
        super(props);
     this.state={
              users:[],
              currentPage:0,
              isLoading:false,
              total:0
     };

    };
   
    componentDidMount=()=>{
        this.fetchUsers();
    }
   
    fetchUsers=()=>{
      const pagetoFetch=this.state.currentPage+1;
      const url=`https://reqres.in/api/users?page=${pagetoFetch}`;
      this.setState({
        isLoading:true
      });
      fetch(url,{
          method:"GET"
      }).then((response)=>{
          return response.json();
      }).then((result)=>{

        const allUsers=[...this.state.users,...result.data]
        this.setState({
          users:allUsers ,
          currentPage:pagetoFetch, 
          isLoading:false,
          total: result.total_pages
        })
      }).catch(error=>{
          this.setState({
              isLoading:false
          });

      });

    }

    render=()=>{
        return(
          <div className="container">
             <p className="title">-----User Gallery-----</p>
             <div className="user-card-container">
               {this.state.users.map((user) =>{
                   return(
                       <UserCard
                       key={user.id}
                       picUrl={user.avatar}
                       firstName={user.first_name}
                       lastName={user.last_name}
                       email={user.email}
                       
                       />

                   );
               })}
                
             </div>

             {this.state.isLoading?(
                 <span className="loading-text">Loading...</span>
             ):
             (<button className={this.state.currentPage>=this.state.total?"disappear":"load-btn"} onClick={this.fetchUsers}  >Load More</button>)
                 }
          </div>


        )
    }


}


export default UserGallery;

