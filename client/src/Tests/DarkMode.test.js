// does dark mode work

const {darkMode} = require('./Hooks/useDarkMode')
test('if works', () =>{
    expect(darkMode).not.toBeTruthy();
})