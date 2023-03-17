import '../css/Home.css';
import { Link, Outlet } from 'react-router-dom';
import MyCard from '../MyCard';
import { Grid } from '@mui/material';
import MyButton from './MyButton';

function Home() {
    // TODO: move navbar to a separate component
    // TODO: move the grid and button to the Blog page
    // TODO: remove <Outlet /> from this page
    return (
        <>
            <div style={{ textAlign: 'center' }}>HOME</div>
            <div className="navbar">
                <Link to={'/'}><span className='navelement'>Home</span></Link>
                <Link to={'/About'}><span className='navelement'>About Us</span></Link>
                <Link to={'/Pages'}><span className='navelement'>Pages</span></Link >
                <Link to={'/Blog'}><span className='navelement'>Blog</span></Link >
                <Link to={'/Contact'}><span className='navelement'>Contact</span></Link >
            </div>
            <Outlet />

            <div className='content' style={{ margin: '100px' }}>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={4}>
                        <MyCard />
                    </Grid>
                    <Grid xs={4}>
                        <MyCard />
                    </Grid>
                    <Grid xs={4}>
                        <MyCard />
                    </Grid>
                    <Grid xs={4}>
                        <MyCard />
                    </Grid>
                    <Grid xs={4}>
                        <MyCard />
                    </Grid>
                    <Grid xs={4}>
                        <MyCard />
                    </Grid>
                </Grid>
            </div>

            <div>
                <MyButton />
            </div>
        </>
    );
}

export default Home;