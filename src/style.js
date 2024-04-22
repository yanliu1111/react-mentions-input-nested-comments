export default {
  // control: {
  //   backgroundColor: '#fff',
  //   fontSize: '1.2em',
  //   fontWeight: 'normal',
  // },
  // '&multiLine': {
  //   control: {
  //     fontFamily: 'monospace',
  //     minHeight: 63,
  //   },
  //   highlighter: {
  //     padding: 9,
  //     border: '1px solid transparent',
  //   },
  //   input: {
  //     padding: 9,
  //     border: '1px solid silver',
  //   },
  // },
  // '&singleLine': {
  //   control: {
  //     display: 'inline-block',
  //     width: 180,
  //   },
  //   highlighter: {
  //     padding: 1,
  //     border: '2px inset transparent',
  //   },
  //   input: {
  //     padding: 1,
  //     border: '2px inset',
  //   },
  // },
  suggestions: {
    list: {
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.15)',
      fontSize: '1.2em',
    },
    item: {
      padding: '5px 15px',
      borderBottom: '1px solid rgba(0,0,0,0.15)',
      '&focused': {
        backgroundColor: '#03dac5',
      },
    },
  },
};
