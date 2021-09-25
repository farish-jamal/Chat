import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: "space-between", position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10', alignItems: "center"
        }}>
            <img style={{height: "50px",border: "none", marginTop: '5px'}} src="https://image.pngaaa.com/893/281893-middle.png" alt="" />
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '10px', fontWeight: '600', height: "30px" }} variant="contained" color="primary" onClick={()=> auth.signOut()}>LOG Out</Button>
        </div>
    )
}

export default SignOut
