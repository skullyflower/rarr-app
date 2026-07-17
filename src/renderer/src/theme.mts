import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import RARR_Splash_BG from '@renderer/assets/RARR_Splash_BG.gif'

const fontmode = JSON.parse(window.localStorage.getItem('UseRegFonts') || 'false')
const inputColorLight = 'purple.900'
const inputColorDark = 'gray.50'
const inputBGLight = 'gray.50'
const inputBGDark = 'pink.800'
const borderColorDark = 'purple.500'
const borderColorLight = 'purple.700'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const defaultTheme = extendTheme(
  { config },
  {
    fontSizes: {
      sm: '16px',
      md: '18px',
      lg: '20px'
    },
    colors: {
      gray: {
        '50': '#EFF3F5',
        '100': '#D4DEE3',
        '200': '#B8C8D1',
        '300': '#9CB2BF',
        '400': '#809DAD',
        '500': '#64879B',
        '600': '#506C7C',
        '700': '#3C515D',
        '800': '#28363E',
        '900': '#141B1F'
      },
      pink: {
        '50': '#FAEBEE',
        '100': '#F1C6CE',
        '200': '#E8A1AF',
        '300': '#DE7C90',
        '400': '#D55871',
        '500': '#CC3351',
        '600': '#A32941',
        '700': '#7A1F31',
        '800': '#521420',
        '900': '#290A10'
      },
      purple: {
        '50': '#F2F0F4',
        '100': '#DAD5E1',
        '200': '#C3BBCE',
        '300': '#ABA0BB',
        '400': '#9485A8',
        '500': '#7C6A95',
        '600': '#635577',
        '700': '#4A4059',
        '800': '#322B3B',
        '900': '#19151E'
      },
      blue: {
        '50': '#EDF2F8',
        '100': '#CCDCEA',
        '200': '#ACC5DD',
        '300': '#8BAECF',
        '400': '#6B97C2',
        '500': '#4A81B5',
        '600': '#3B6791',
        '700': '#2D4D6C',
        '800': '#1E3348',
        '900': '#0F1A24'
      },
      cyan: {
        '50': '#EBF7F9',
        '100': '#C8E9EF',
        '200': '#A4DBE5',
        '300': '#80CDDB',
        '400': '#5CBFD0',
        '500': '#39B1C6',
        '600': '#2D8D9F',
        '700': '#226A77',
        '800': '#17474F',
        '900': '#0B2328'
      },
      green: {
        '50': '#EFF6F2',
        '100': '#D1E5DB',
        '200': '#B4D5C4',
        '300': '#96C5AC',
        '400': '#79B495',
        '500': '#5BA47E',
        '600': '#498365',
        '700': '#37624C',
        '800': '#254132',
        '900': '#122119'
      },
      yellow: {
        '50': '#F7F4ED',
        '100': '#EAE0CD',
        '200': '#DCCDAD',
        '300': '#CEB98D',
        '400': '#C0A56D',
        '500': '#B3914C',
        '600': '#8F743D',
        '700': '#6B572E',
        '800': '#473A1F',
        '900': '#241D0F'
      },
      orange: {
        '50': '#F8F1EC',
        '100': '#EDD8CA',
        '200': '#E1BEA8',
        '300': '#D5A585',
        '400': '#CA8C63',
        '500': '#BE7341',
        '600': '#985C34',
        '700': '#724527',
        '800': '#4C2E1A',
        '900': '#26170D'
      },
      red: {
        '50': '#F7EDED',
        '100': '#EACDCD',
        '200': '#DCADAD',
        '300': '#CE8C8C',
        '400': '#C16C6C',
        '500': '#B34C4C',
        '600': '#8F3D3D',
        '700': '#6B2E2E',
        '800': '#481E1E',
        '900': '#240F0F'
      }
    },
    fonts: {
      heading: `'Creepster', sans-serif`,
      otherHeading: `'Arial Rounded MT Bold',Helvetica,'Arial Black', sans-serif`,
      body: `'Underdog', sans-serif`
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        // styles for the `body`
        body: {
          bgImage: RARR_Splash_BG,
          bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.400',
          color: props.colorMode === 'dark' ? inputColorDark : inputColorLight,
          bgSize: '100%'
        }
      })
    },
    components: {
      Heading: {
        baseStyle: (props: StyleFunctionProps) => ({
          color: props.colorMode === 'dark' ? 'purple.300' : 'purple.700',
          weight: 'normal'
        })
      },
      Badge: {
        baseStyle: (props: StyleFunctionProps) => ({
          color: props.colorMode === 'dark' ? 'purple.100' : 'purple.900',
          bg: props.colorMode === 'dark' ? 'purple.600' : 'whiteAlpha.500'
        })
      },
      Button: {
        baseStyle: (props: StyleFunctionProps) => ({
          color: props.colorMode === 'dark' ? 'purple.100' : 'purple.900'
        }),
        // 3. We can add a new visual variant
        variants: {
          'with-shadow': {
            bg: 'purple.400',
            boxShadow: '0 0 2px 2px #efdfde'
          },
          solid: (props: StyleFunctionProps) => ({
            color: props.colorMode === 'dark' ? 'red.100' : 'red.900',
            bg: props.colorMode === 'dark' ? 'purple.600' : 'purple.200',
            _hover: {
              bg: props.colorMode === 'dark' ? 'purple.700' : 'purple.100'
            }
          })
        },
        defaultProps: {
          size: 'md', // default is md
          colorScheme: 'purple' // default is gray
        }
      },
      Input: {
        baseStyle: (props: StyleFunctionProps) => ({
          field: {
            color: props.colorMode === 'dark' ? inputColorDark : inputColorLight,
            borderColor: props.colorMode === 'dark' ? borderColorDark : borderColorLight,
            boxShadow: 'none',
            outline: 'none',
            _placeholder: {
              color: props.colorMode === 'dark' ? 'gray.600' : 'gray.50'
            },
            _focus: {
              backgroundColor: props.colorMode === 'dark' ? inputBGDark : inputBGLight,
              borderColor: 'pink.500',
              outline: 'none',
              boxShadow: 'none'
            },
            _focusVisible: {
              outline: 'none',
              borderColor: 'pink.500',
              boxShadow: 'none'
            },
            _hover: {
              borderColor: 'pink.500',
              backgroundColor: props.colorMode === 'dark' ? inputBGDark : inputBGLight
            }
          },
          defaultProps: {
            colorScheme: 'purple'
          }
        })
      },
      Textarea: {
        baseStyle: (props: StyleFunctionProps) => ({
          color: props.colorMode === 'dark' ? inputColorDark : inputColorLight,
          borderColor: props.colorMode === 'dark' ? borderColorDark : borderColorLight,
          _placeholder: {
            color: props.colorMode === 'dark' ? 'gray.600' : 'gray.50'
          },
          _focus: {
            outline: 'none',
            borderColor: 'pink.500',
            backgroundColor: props.colorMode === 'dark' ? inputBGDark : inputBGLight
          },
          _focusVisible: {
            outline: 'none',
            borderColor: 'pink.500',
            boxShadow: 'none'
          },
          _hover: {
            borderColor: 'pink.500',
            backgroundColor: props.colorMode === 'dark' ? inputBGDark : inputBGLight
          }
        }),
        defaultProps: {
          colorScheme: 'purple'
        }
      },
      Select: {
        baseStyle: (props: StyleFunctionProps) => ({
          field: {
            borderColor: props.colorMode === 'dark' ? borderColorDark : borderColorLight,
            boxShadow: 'none',
            _focus: {
              borderColor: 'pink.500',
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: props.colorMode === 'dark' ? inputBGDark : inputBGLight
            },
            _forcusVisible: {
              backgroundColor: props.colorMode === 'dark' ? inputBGDark : inputBGLight,
              borderColor: 'pink.500',
              outline: 'none',
              boxShadow: 'none'
            }
          }
        }),
        defaultProps: {
          colorScheme: 'purple'
        }
      }
    }
  }
)

export const cleanTheme = {
  ...defaultTheme,
  fonts: {
    heading: `'Arial Rounded MT Bold',Helvetica,'Arial Black', sans-serif`,
    otherHeading: `'Creepster', sans-serif`,
    body: `'Arial', sans-serif`
  },
  fontSizes: {
    sm: '16px',
    md: '18px',
    lg: '20px'
  }
}
const theme = fontmode ? cleanTheme : defaultTheme
export default theme
