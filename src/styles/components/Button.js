const ButtonStyles = {
  // style object for base or default style
  // baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: 'primary.500',
      color: 'white',
      _hover: {
        bg: 'primary.700',
        _disabled: {
          bg: 'primary.700'
        }
      }
    },
    primaryOutline: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'primary.500',
      color: 'primary.500',
      _hover: {
        boxShadow: 'md'
      }
    },
    primaryLink: {
      bg: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'gray.800',
      textDecoration: 'underline',
      _hover: {
        color: 'primary.500'
      }
    },
    secondary: {
      bg: 'secondary.500',
      color: 'white',
      _hover: {
        bg: 'secondary.600',
        _disabled: {
          bg: 'secondary.200'
        }
      }
    },
    secondaryOutline: {
      bg: 'transparent',
      border: 'solid 1px',
      borderColor: 'secondary.500',
      color: 'secondary.500',
      _hover: {
        boxShadow: 'md'
      }
    },
    warning: {
      bg: 'warning.500',
      color: 'gray.700',
      _hover: {
        bg: 'warning.300',
        _disabled: {
          bg: 'warning.500'
        }
      }
    },
    warningOutline: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'warning.500',
      color: 'warning.500',
      _hover: {
        boxShadow: 'md'
      }
    },
    success: {
      bg: 'success.500',
      color: 'white',
      _hover: {
        bg: 'success.300',
        _disabled: {
          bg: 'success.500'
        }
      }
    },
    successOutline: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'success.500',
      color: 'success.500',
      _hover: {
        boxShadow: 'md'
      }
    },
    danger: {
      bg: 'danger.500',
      color: 'white',
      _hover: {
        bg: 'danger.300',
        _disabled: {
          bg: 'danger.500'
        }
      }
    },
    dangerOutline: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'danger.500',
      color: 'danger.500',
      _hover: {
        boxShadow: 'md'
      }
    },
    greenPremium: {
      bg: 'greenPremium.500',
      color: '#434343',
      boxShadow: '1px 2px 4px rgba(0,0,0,0.24)',
      _hover: {
        bg: 'greenPremium.800',
        color: 'white',
        _disabled: {
          bg: 'greenPremium.500'
        }
      }
    }
  }
  // default values for `size` and `variant`
  // defaultProps: {
  // size: '',
  // variant: '',
  // },
};
export default ButtonStyles;
