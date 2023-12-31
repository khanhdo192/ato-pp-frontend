module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Roboto', 'Helvetica'],
        body: ['Roboto', 'Helvetica'],
        roboto: 'Roboto',
      },
      screens: {
        xs: '480px',
      },
      width: {
        mt: 'min-content',
        4.5: '1.125rem',
        5.5: '1.375rem;',
        6.5: '1.625rem;',
        menu: '270px',
        'menu-lg': '72px',
      },
      height: {
        mt: 'min-content',
        4.5: '1.125rem',
        5.5: '1.375rem;',
        6.5: '1.625rem;',
<<<<<<< HEAD
        cases: '345px',
=======
        cases: '335px',
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        test: '600px',
        'test-output': '670px',
        main: 'calc(100vh - 64px)',
        'modal-test': '500px',
<<<<<<< HEAD
        'modal-test-lg': '420px',
=======
        'modal-test-lg': '320px',
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      },
      padding: {
        4.5: '1.125rem',
        5.5: '1.375rem;',
        18: '4.5rem',
      },
      margin: {
        '-px': '-1px',
        px: '1px',
        menu: '270px',
        'menu-lg': '72px',
        n: '0!important',
        18: '4.5rem',
      },
      minWidth: {
        2: '0.5rem;',
        2.5: '0.675rem;',
        3: '0.75rem;',
        4: '1rem',
        4.5: '1.125rem',
        5: '1.25rem',
        6: '1.5rem',
        6.5: '1.625rem;',
        7: '1.75rem;',
        8: '2rem',
<<<<<<< HEAD
        11: '2.75rem',
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        'btn-action': '88px',
        menu: '270px',
      },
      maxWidth: {
        8: '2.25rem;',
        9: '2.5rem',
        10: '2.75rem',
        1688: '1688px',
        modal: '375px',
        'modal-md': '540px',
        login: '704px',
<<<<<<< HEAD
        register: '80%',
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        '1/2': '50%',
      },
      minHeight: {
        5: '1.25rem',
        6: '1.5rem',
        main: 'calc(100vh - 64px)',
<<<<<<< HEAD
        register: '80%',
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      },
      maxHeight: {
        modal: '625px',
      },
      inset: {
        '-8px': '-8px',
        '-4px': '-4px',
        '-px': '-1px',
        px: '1px',
        '2px': '2px',
        5.5: '1.375rem',
        9.5: '2.375rem',
        30: '7.5rem',
      },
      zIndex: {
        '-1': '-1',
        1: '1',
      },
      colors: {
        //black
        blck: {
          100: '#000000',
        },
        //blue
        b: {
<<<<<<< HEAD
=======
          50: '#78b3ce',
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          100: '#edf4fa',
          200: '#d7e9f8',
          250: '#9ACBF5',
          300: '#4facfe',
          310: '#389CF5',
          320: '#5AE4FF',
          330: '#35CCF2',
<<<<<<< HEAD
=======
          400: '#0081d8',
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          500: '#2b84d9',
          600: '#427bb8',
          700: '#1561b0',
          750: '#00447d',
          /*"800": "#0f4d8c",*/
          800: '#003A8F',
          950: '#13548a',
          1000: '#3fd9d7',
        },
        //Greys
        gr: {
          100: '#F3F3F4',
          200: '#EEEEEE',
          300: '#CCCCCC',
          400: '#999999',
          450: '#888888',
          500: '#666666',
          550: '#4F4F4F',
          600: '#333333',
          700: '#222222',
<<<<<<< HEAD
          750: '#fcfcfc',
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        },
        //Green
        g: {
          100: '#EDF7ED',
          300: '#54EC27',
          400: '#5CB660',
          450: '#45A14B',
<<<<<<< HEAD
          470: '#41d873',
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        },
        //Yellow
        y: {
          100: '#FFF4E5',
          400: '#FFA117',
          450: '#FF8C00',
<<<<<<< HEAD
        },
        //Red
        r: {
          50: '#d64343',
=======
          500: '#ffd000',
        },
        //Red
        r: {
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
          100: '#FDECEA',
          300: '#FF7A70',
          400: '#F55448',
          500: '#E63D30',
        },
        //Purple
        p: {
          100: '#F5F0FD',
          400: '#9672E0',
          500: '#2F6EED',
        },
<<<<<<< HEAD
        white: '#FFFFFF',
      },
      gridTemplateColumns: {
        'home-table-title': '12% 9% 10% 12% 12% 12% 12% 13% 7%',
        'home-table-elements': '12% 9% 10% 12% 12% 12% 12% 13% 7%',
=======
        //Orange
        o: {
          100: '#fff0e7',
          200: '##ff8433',
          300: '#ff741a',
          400: '#ff6500',
          500: '#e65b00',
        },
        white: '#FFFFFF',
      },
      gridTemplateColumns: {
        'home-table': '12% 7% 7% 7% 9% 15% 12% 11% 5% 10% 5%',
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        '1-2': '32.6% auto',
        '2-1': 'auto 32.6%',
        '40-60': '40% auto',
        '30-70': '30% auto',
        '8.5-auto': '2.125rem auto',
        'hist-table': '40% 40% 20%',
        'hist-table-md': '36% 36% 28%',
<<<<<<< HEAD
        'log-table': '13% 13% 13% 13% 13% 13% 13% 5% auto',
        'test-session': '25% auto 12%',
        'test-result': '28% 28% 18% 18% 8%',
        'user-roles': '40% 30% 30%',
        'user-staff': '14.8% 14.2% 10% 16% 14% 11% 17.5% auto',
=======
        'log-table-step-1': '30% 15% 15% 20% 20%',
        'log-table': '30% 25% 25% 20%',
        'test-session': '25% auto 12%',
        'test-result': '28% 28% 18% 18% 8%',
        'user-roles': '40% 30% 30%',
        'user-staff': '30% 30% 30% auto',
        'user-tester': '25% 25% 25% auto',
        'user-tester-account': '12% 15% 15% 15% 15% 10% 10% auto',
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
        'comp-account':
          '9.9% 10% 11.8% 7.2% 6% 10.9% 10.8% 8.5% 9.1% 12.1% auto',
        'switchs-4': '42% 14.5% 14.5% 14.5% 14.5%',
        'switchs-3': '56.5% 14.5% 14.5% 14.5%',
<<<<<<< HEAD
        'long-horizontal-label': '15% auto', //'20% auto',
        'short-horizontal-label': '31.6% auto', //'40.7% auto',
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      },
      fontSize: {
        xxs: '9.5px',
        'btn-action': '11px',
        h3: '13px',
<<<<<<< HEAD
        '7xl': '5rem',
      },
      boxShadow: {
        icon: '.5px 1px 2px 1px rgba(0,0,0,0.22)',
        login:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      scale: {
        103: '1.03',
      },
      shadow: {
        all: '4px, 4px, 4px, 0,0,0,0.22',
=======
      },
      boxShadow: {
        icon: '.5px 1px 2px 1px rgba(0,0,0,0.22)',
        switch: '.0px 2px 0px 0px rgb(0 0 0 / 40%)',
      },
      scale: {
        103: '1.03',
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
