import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';

const Home = () =>{
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Full Stack Next.js Frontend with Python Backend
        </Typography>
        <Typography sx={{mb: 6, color: 'text.secondary' }}>
          {'Adapted from '}
          <Link href="https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs">this example</Link>
          {' in the Material UI documentation.'}
        </Typography>
        <Typography variant="h4">
          <Link href="/streaming" color="secondary" component={NextLink}>
            Go to Text Streaming Example
          </Link>
        </Typography>        
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
