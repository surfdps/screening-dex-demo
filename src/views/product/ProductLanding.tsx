import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  useTheme,
  Button,
  useMediaQuery
} from "@mui/material";
import Title from "../../components/text/Title";
import SecurityIcon from "@mui/icons-material/Security";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const ProductLanding = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const isSmallMobile = useMediaQuery('(max-width:400px)');
  
  return (
    <Box pb={8}>
      {/* Hero Section */}
      <Box 
        sx={{
          background: `linear-gradient(${theme.palette.primary.dark}80, ${theme.palette.primary.main}90)`,
          py: { xs: 4, sm: 6, md: 8 },
          mb: { xs: 4, sm: 5, md: 6 },
          borderRadius: { xs: 0, md: 2 },
          boxShadow: 3
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant={isSmallMobile ? "h3" : "h2"} 
                component="h1" 
                color="white" 
                gutterBottom
                sx={{ 
                  fontSize: { 
                    xs: '1.75rem', 
                    sm: '2.5rem', 
                    md: '3rem' 
                  },
                  lineHeight: { xs: 1.2, sm: 1.3 }
                }}
              >
                The Next Generation DeFi Token
              </Typography>
              <Typography 
                variant="h5" 
                color="white" 
                paragraph
                sx={{ 
                  fontSize: { 
                    xs: '1rem', 
                    sm: '1.25rem', 
                    md: '1.5rem' 
                  }
                }}
              >
                Secure, Decentralized, and Ready for the Future
              </Typography>
              <Stack 
                direction={{ xs: isSmallMobile ? 'column' : 'row', md: 'row' }} 
                spacing={{ xs: 1, sm: 2 }} 
                mt={3}
                sx={{ width: '100%' }}
              >
                <Button 
                  variant="contained" 
                  size={isSmallMobile ? "medium" : "large"}
                  fullWidth={isSmallMobile}
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
                  size={isSmallMobile ? "medium" : "large"}
                  fullWidth={isSmallMobile}
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
                  maxHeight: { xs: 200, sm: 250, md: 300 },
                  mt: { xs: 2, md: 0 },
                  filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Product Description */}
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Box mb={{ xs: 5, sm: 6, md: 8 }} textAlign="center">
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontSize: { 
                xs: '1.5rem', 
                sm: '2rem', 
                md: '2.25rem' 
              } 
            }}
          >
            About YAM Token
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              maxWidth: 800, 
              mx: 'auto',
              px: { xs: 1, sm: 2 },
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            YAM Token is a revolutionary DeFi protocol designed for optimal yield farming and liquidity provision. 
            Our platform combines the best features of decentralized finance with robust security measures to ensure 
            your assets are protected while earning maximum returns.
          </Typography>
        </Box>
        
        {/* Feature Section */}
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          mb={{ xs: 3, md: 4 }} 
          textAlign="center"
          sx={{ 
            fontSize: { 
              xs: '1.5rem', 
              sm: '2rem', 
              md: '2.25rem' 
            } 
          }}
        >
          Key Features
        </Typography>
        
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} mb={{ xs: 5, sm: 6, md: 8 }}>
          {/* Feature 1 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <SecurityIcon sx={{ 
                  fontSize: { xs: 60, sm: 70, md: 80 }, 
                  color: theme.palette.primary.main 
                }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom
                  sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                >
                  Advanced Security
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8125rem', sm: '0.875rem' } }}>
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
                <SwapHorizIcon sx={{ 
                  fontSize: { xs: 60, sm: 70, md: 80 }, 
                  color: theme.palette.primary.main 
                }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom
                  sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                >
                  Efficient Swaps
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8125rem', sm: '0.875rem' } }}>
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
                <AccountBalanceWalletIcon sx={{ 
                  fontSize: { xs: 60, sm: 70, md: 80 }, 
                  color: theme.palette.primary.main 
                }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom
                  sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                >
                  Yield Optimization
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8125rem', sm: '0.875rem' } }}>
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
      <Box bgcolor={theme.palette.grey[100]} py={{ xs: 4, sm: 5, md: 6 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8} textAlign="center">
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom
                sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' } }}
              >
                Ready to Get Started?
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              >
                Join thousands of users already benefiting from YAM Token's revolutionary DeFi platform.
              </Typography>
              <Button 
                variant="contained" 
                size={isSmallMobile ? "medium" : "large"} 
                sx={{ mt: 2 }}
              >
                Connect Wallet
              </Button>
              
              <Box mt={{ xs: 4, sm: 5 }}>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  gutterBottom
                  sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem' } }}
                >
                  Contact Us
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8125rem', sm: '0.875rem' } }}>
                  Email: support@ihavenoideawhattoputhere@eseo.dev
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8125rem', sm: '0.875rem' } }}>
                  Telegram: @ihavenoideawhattoputhere
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8125rem', sm: '0.875rem' } }}>
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