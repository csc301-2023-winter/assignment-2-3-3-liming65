import { Inter } from '@next/font/google'
import {Grid, Paper} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SideBar} from "@/components/sidebar";
import {Recording} from "@/components/recording";
import {Demo} from "@/components/demo";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={'d-flex align-items-center justify-content-center bg-light'}
      style={{width: '100vw', height: '100vh'}}>
      <Paper style={{
        width: '75vw',
        height: '75vh',
      }}
        className={'p-3'}
      >
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <SideBar />
          </Grid>
          <Grid item xs={7}>
            <Recording />
          </Grid>
          <Grid item xs={4}>
            <Demo />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
