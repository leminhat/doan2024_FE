import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Grid className="'bg-black text-white text-center mt-10"
        container
        sx={{bgcolor:"black",color:"white",py:3}}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6"> Company </Typography>
           <div>
           <Button className="pb-5" variant="h6" getterBottom> Xem thêm </Button>
           </div>
            <div>
            <Button className="pb-5" variant="h6" getterBottom> Blog </Button>
            </div>
            <div>
            <Button className="pb-5" variant="h6" getterBottom> Press </Button>
            </div>
           <div>
           <Button className="pb-5" variant="h6" getterBottom> Jobs </Button>
           </div>
            <div>
            <Button className="pb-5" variant="h6" getterBottom> Partners </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6"> Solutions </Typography>
           <div>
           <Button className="pb-5" variant="h6" getterBottom> Marketing </Button>
           </div>
            <div>
            <Button className="pb-5" variant="h6" getterBottom> Analiytics </Button>
            </div>
            <div>
            <Button className="pb-5" variant="h6" getterBottom> commerce </Button>
            </div>
           <div>
           <Button className="pb-5" variant="h6" getterBottom> Insights </Button>
           </div>
            <div>
            <Button className="pb-5" variant="h6" getterBottom> Support </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6"> Documentation</Typography>
           <div>
           <Button className="pb-5" variant="h6" getterBottom> Guides </Button>
           </div>
            <div>
            <Button className="pb-5" variant="h6" getterBottom> API Status </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6"> Legal </Typography>
           <div>
           <Button className="pb-5" variant="h6" getterBottom> Claim </Button>
           </div>
            <div>
            <Button className="pb-5" variant="h6" getterBottom> Privacy </Button>
            </div>
            <div>
            <Button className="pb-5" variant="h6" getterBottom> Terms </Button>
            </div>
          </Grid>

        </Grid>

        
    </div>
  )
}

export default Footer