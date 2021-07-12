const plugin = require('tailwindcss/plugin')
module.exports = {
  // purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1080px'
    },
    extend: {
      transitionDuration: {
        3000: '3s'
      },
      animation: {
        slidedown: 'slidedown 1s ease-in-out'
      },
      keyframes: {
        slidedown: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' }
        }
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  variants: {
    extend: {
      display: ['hover', 'after'],
      overflow: ['after'],
      rotate: ['group-hover', 'after'],
      margin: ['after'],
      transform: ['after'],
      translate: ['after']
    }
  },
  plugins: [
    // 指定变体before:和after:
    plugin(function ({ addVariant, e }) {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}:before`
        })
      })
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}:after`
        })
      })
    }),
    // 添加功能类content-before、content-after
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.content': {
          content: 'attr(data-content)'
        },
        '.content-before': {
          content: 'attr(data-content)'
        },
        '.content-after': {
          content: 'attr(data-content)'
        }
      }
      addUtilities(newUtilities, ['before', 'after']) // 指定变体
    }),
    // 由于菜单中的向下箭头交互比较复杂，在此处声明component自定义
    plugin(function ({ addComponents }) {
      addComponents({
        '.menu-down-arrow': {
          '&::after': {
            display: 'inline-block',
            transform: 'rotate(180deg) translateY(2px)',
            overflow: 'hidden',
            marginLeft: '5px',
            transition: 'transform .3s ease-in-out'
          },
          '&:hover::after': {
            transform: 'rotate(0deg)'
          }
        }
      })
    })
  ]
}
