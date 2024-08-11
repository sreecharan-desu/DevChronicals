import React, { useEffect, useState } from 'react';


export function UserDetails({userData}){
    return(
      <>
            <hr style={{width:"90%",textAlign:"center"}}/>
            <br />
            <div style={{display : 'flex',flexDirection : "column",textAlign : 'center',alignContent : 'center',justifyContent : 'center'}}>
                <h1>
                    {userData.name}
                  </h1>
                  <img src={userData.avatar_url} style={{borderRadius : '50%',width : '200px',height : '200px',margin : '0px 580px'}}/>
                  <p>
                    {userData.bio}
                  </p>
                  <p>
                    Joined : {userData.created_at.substring(0,10)}
                  </p>
                  <p>
                    Location : {userData.location}
                  </p>
            </div> 
            <hr style={{width:"90%",textAlign:"center"}}/>
  
      </>
    )
  }
  
export function NetworkIssue(){
    return(
      <>
          <div style={{display : 'flex',flexDirection : "column",textAlign : 'center',alignContent : 'center',justifyContent : 'center'}}>
            <hr style={{width:"90%",textAlign:"center"}}/>
              <p>
                Sorry network issue see the console for more info..     
              </p>
            <hr style={{width:"90%",textAlign:"center"}}/>
          </div> 
      </>
    )
    
  }