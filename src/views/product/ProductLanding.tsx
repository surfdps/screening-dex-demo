import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  useTheme,
  Button
} from "@mui/material";
import Title from "../../components/text/Title";
import SecurityIcon from "@mui/icons-material/Security";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const ProductLanding = () => {
  const theme = useTheme();
  
  return (
    <Box pb={8}>
      {/* Hero Section */}
      <Box 
        sx={{
          background: `linear-gradient(${theme.palette.primary.dark}80, ${theme.palette.primary.main}90)`,
          py: 8,
          mb: 6,
          borderRadius: { xs: 0, md: 2 },
          boxShadow: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" color="white" gutterBottom>
                The Next Generation DeFi Token
              </Typography>
              <Typography variant="h5" color="white" paragraph>
                Secure, Decentralized, and Ready for the Future
              </Typography>
              <Stack direction="row" spacing={2} mt={3}>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    bgcolor: "white", 
                    color: theme.palette.primary.main,
                    '&:hover': {
                      bgcolor: 'white',
                      opacity: 0.9
                    }
                  }}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outlined"
                  size="large"
                  sx={{ 
                    color: 'white', 
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      opacity: 0.9
                    }
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src="/images/logo_bt.png"
                alt="YAM Token"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: 300,
                  filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Product Description */}
      <Container maxWidth="lg">
        <Box mb={8} textAlign="center">
          <Typography variant="h4" component="h2" gutterBottom>
            About YAM Token
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: 800, mx: 'auto' }}>
            YAM Token is a revolutionary DeFi protocol designed for optimal yield farming and liquidity provision. 
            Our platform combines the best features of decentralized finance with robust security measures to ensure 
            your assets are protected while earning maximum returns.
          </Typography>
        </Box>
        
        {/* Feature Section */}
        <Typography variant="h4" component="h2" gutterBottom mb={4} textAlign="center">
          Key Features
        </Typography>
        
        <Grid container spacing={4} mb={8}>
          {/* Feature 1 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <SecurityIcon sx={{ fontSize: 80, color: theme.palette.primary.main }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Advanced Security
                </Typography>
                <Typography variant="body2">
                  Built on battle-tested smart contracts with multiple security audits, 
                  our protocol ensures your assets remain safe through advanced cryptographic 
                  measures and decentralized governance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Feature 2 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <SwapHorizIcon sx={{ fontSize: 80, color: theme.palette.primary.main }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Efficient Swaps
                </Typography>
                <Typography variant="body2">
                  Experience lightning-fast token swaps with minimal slippage and 
                  reduced gas fees. Our optimized automated market maker provides the 
                  best rates across multiple liquidity pools.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Feature 3 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <AccountBalanceWalletIcon sx={{ fontSize: 80, color: theme.palette.primary.main }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Yield Optimization
                </Typography>
                <Typography variant="body2">
                  Automatically route your assets to the highest-yielding opportunities 
                  in the DeFi ecosystem. Our intelligent protocols maximize your returns 
                  while minimizing risks and exposure.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      {/* Contact/Footer Section */}
      <Box bgcolor={theme.palette.grey[100]} py={6}>
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8} textAlign="center">
              <Typography variant="h4" component="h2" gutterBottom>
                Ready to Get Started?
              </Typography>
              <Typography variant="body1" paragraph>
                Join thousands of users already benefiting from YAM Token's revolutionary DeFi platform.
              </Typography>
              <Button variant="contained" size="large" sx={{ mt: 2 }}>
                Connect Wallet
              </Button>
              
              <Box mt={5}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body2">
                  Email: support@ihavenoideawhattoputhere@eseo.dev
                </Typography>
                <Typography variant="body2">
                  Telegram: @ihavenoideawhattoputhere
                </Typography>
                <Typography variant="body2">
                  Twitter: @ihavenoideawhattoputhere
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductLanding;